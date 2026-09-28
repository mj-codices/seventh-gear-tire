"use client";
import Image from "next/image";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { useState, FormEvent, ChangeEvent, useEffect, Suspense } from "react";
import { ContactForm } from "../components/contact/ContactForm";
import {
  ONSITE_OPTIONS,
  VEHICLE_TYPES,
  TIRE_TYPE_OPTIONS,
} from "../config/contactOptions";
import { submitContactForm } from "../actions/contact/ServerAction";

// Declare global grecaptcha interface for TypeScript
declare global {
  interface Window {
    grecaptcha: any;
  }
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const onsiteParam = searchParams.get("onsite");

  // Helper to convert query string into Step 1 internal ID
  const getInitialService = (param: string | null) => {
    if (!param) return "";
    switch (param.toLowerCase()) {
      case "curation_sourcing":
      case "fleet":
      case "distribution":
        return "curation_sourcing";
      case "shop_service":
      case "shop":
        return "shop_service";
      case "onsite_service":
      case "mobile":
        return "onsite_service";
      default:
        return param;
    }
  };

  // Helper to validate and convert query string into Step 2 internal ID
  const getInitialOnsite = (param: string | null) => {
    if (!param) return "";
    const isValid = ONSITE_OPTIONS.some((option) => option.id === param);
    return isValid ? param : "";
  };

  // Step 1 & Step 2 States initialized directly from URL params
  const [selectedService, setSelectedService] = useState<string>(() =>
    getInitialService(serviceParam),
  );
  const [selectedOnsiteOption, setSelectedOnsiteOption] = useState<string>(() =>
    getInitialOnsite(onsiteParam),
  );
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>("");

  // Sync state if user switches links/params without re-mounting
  useEffect(() => {
    if (serviceParam) {
      setSelectedService(getInitialService(serviceParam));
    }
    if (onsiteParam) {
      setSelectedOnsiteOption(getInitialOnsite(onsiteParam));
    }
  }, [serviceParam, onsiteParam]);

  useEffect(() => {
    // Scope the reCAPTCHA badge's visibility to this route via a body class
    // instead of deleting its DOM node — the badge script only ever loads
    // once per session, so removing the node left nothing to recreate it
    // on client-side navigation back to /contact.
    document.body.classList.add("contact-route");
    return () => {
      document.body.classList.remove("contact-route");
    };
  }, []);

  // Step 3 States
  const [tireSize, setTireSize] = useState<string>("");
  const [selectedTireType, setSelectedTireType] = useState<string>("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [tireQuantity, setTireQuantity] = useState("1");

  // Location States
  const [locationValue, setLocationValue] = useState<string>("");
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [isGpsCaptured, setIsGpsCaptured] = useState<boolean>(false);

  // Form Submission States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedName, setSubmittedName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPhotoFile(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const contactName = (formData.get("contact_name") as string) || "";
    const contactPhone = (formData.get("contact_phone") as string) || "";
    const companyName = (formData.get("company_name") as string) || "";
    const specialInstructions =
      (formData.get("special_instructions") as string) || "";

    if (!contactName.trim() || !contactPhone.trim() || !locationValue.trim()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      let token = "";

      // Safely acquire reCAPTCHA token if available
      if (siteKey && window.grecaptcha) {
        token = await new Promise<string>((resolve) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(siteKey, { action: "contact_submit" })
              .then((t: string) => resolve(t))
              .catch(() => resolve("")); // Fallback empty token on error
          });
        });
      }

      // Dispatch payload to Server Action backend
      const result = await submitContactForm({
        serviceType: selectedOnsiteOption || selectedService,
        fleetSize: selectedVehicleType,
        fullName: contactName,
        email: (formData.get("contact_email") as string) || "Not provided",
        phone: contactPhone,
        companyName: companyName || "N/A",
        location: locationValue,
        message: `Tire Size: ${tireSize || "N/A"} | Tire Type: ${selectedTireType || "N/A"} | Quantity: ${tireQuantity} | Instructions: ${specialInstructions || "None"}`,
        recaptchaToken: token,
      });

      if (result.success) {
        setSubmittedName(contactName);
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.error || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
      setErrorMessage(
        err.message || "An unexpected error occurred during submission.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSelectedService("");
    setSelectedOnsiteOption("");
    setSelectedVehicleType("");
    setTireSize("");
    setSelectedTireType("");
    setPhotoFile(null);
    setLocationValue("");
    setIsGpsCaptured(false);
    setSubmittedName("");
    setErrorMessage("");
    setIsSubmitted(false);
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();

          if (data && data.display_name) {
            setLocationValue(data.display_name);
          } else {
            setLocationValue(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          }
        } catch (error) {
          console.error("Reverse geocoding error:", error);
          setLocationValue(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        } finally {
          setIsGpsCaptured(true);
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("GPS Error:", error);
        alert(
          "Unable to retrieve location. Please type your address manually.",
        );
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return (
    <>
      {/* Load Invisible reCAPTCHA v3 Script */}
      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
        <Script
          id="recaptcha-v3"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <section className="relative min-h-screen bg-stone-950 text-stone-100 pt-32 sm:pt-40 md:pt-50 px-9 lg:pt-45 pb-10">
        {/* Background Image and Gradient Container */}
        <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none overflow-hidden z-0">
          <Image
            src="/contact_main.png"
            alt="Commercial tire service on Texas highway"
            fill
            priority
            className="w-full h-full object-cover object-[49%_center] opacity-70"
            unoptimized
          />
          {/* Overlay synced inside the exact same container */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/70 to-stone-950"
            aria-hidden="true"
          />
        </div>

        {/* Main Container */}
        <div className="relative z-10 space-y-18 lg:space-y-25">
          {/* Error Alert Message Container */}
          {errorMessage && (
            <div className="max-w-3xl mx-auto p-4 bg-red-950/80 border border-red-800 text-red-200 rounded-xl text-sm font-medium">
              {errorMessage}
            </div>
          )}

          <header className="max-w-3xl mx-auto">
            <div>
              <div>
                <p className="text-white/90 font-display text-base font-bold uppercase tracking-widest mb-2.5 sm:mb-4">
                  Request Service
                </p>
                <div className="w-12 h-[.2rem] bg-red-700" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display text-white/95 leading-tighter sm:leading-13 mt-1 sm:mt-3">
                Need Immediate Tire Service or a Fleet Quote?
              </h1>
              <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg md:text-xl leading-6 max-w-2xl">
                Select your service type below to send your equipment details
                directly to dispatch.
              </p>
            </div>
          </header>

          {/* Form Component */}
          <ContactForm
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            selectedOnsiteOption={selectedOnsiteOption}
            setSelectedOnsiteOption={setSelectedOnsiteOption}
            selectedVehicleType={selectedVehicleType}
            setSelectedVehicleType={setSelectedVehicleType}
            tireSize={tireSize}
            setTireSize={setTireSize}
            selectedTireType={selectedTireType}
            setSelectedTireType={setSelectedTireType}
            locationValue={locationValue}
            setLocationValue={setLocationValue}
            isLocating={isLocating}
            isGpsCaptured={isGpsCaptured}
            setIsGpsCaptured={setIsGpsCaptured}
            handleGetLocation={handleGetLocation}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            submittedName={submittedName}
            handleResetForm={handleResetForm}
            photoFile={photoFile}
            handlePhotoChange={handlePhotoChange}
            tireQuantity={tireQuantity}
            setTireQuantity={setTireQuantity}
          />
        </div>
      </section>
    </>
  );
}

// Default export wrapped in Suspense boundary for Next.js App Router
export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-950" />}>
      <ContactPageContent />
    </Suspense>
  );
}
