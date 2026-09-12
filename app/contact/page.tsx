"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, FormEvent, ChangeEvent, useEffect, Suspense } from "react";
import { ContactForm } from "../components/contact/ContactForm";
import {
  ONSITE_OPTIONS,
  VEHICLE_TYPES,
  TIRE_TYPE_OPTIONS,
} from "../config/contactOptions";

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
      return "shop_service"; // ✅ Fixed: Return shop_service
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

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPhotoFile(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract uncontrolled inputs directly from the form submit event
    const formData = new FormData(e.currentTarget);
    const contactName = formData.get("contact_name") as string;
    const contactPhone = formData.get("contact_phone") as string;
    const companyName = formData.get("company_name") as string;
    const specialInstructions = formData.get("special_instructions") as string;

    // Safety check against whitespace bypasses on required fields
    if (
      !contactName?.trim() ||
      !contactPhone?.trim() ||
      !locationValue?.trim()
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Build the complete snapshot using photoFile state
    const submissionSnapshot = {
      submittedAt: new Date().toISOString(),
      serviceType: selectedService,
      onsiteOption: selectedOnsiteOption,
      vehicleType: selectedVehicleType,
      tireInfo: {
        size: tireSize || "Not specified",
        quantity: tireQuantity,
        position: selectedTireType || "Not specified",
        photoFileName: photoFile ? photoFile.name : "No photo attached",
        photoSizeMB: photoFile
          ? (photoFile.size / (1024 * 1024)).toFixed(2)
          : "0",
      },
      contactLocation: {
        name: contactName,
        phone: contactPhone,
        location: locationValue,
        isGpsCaptured,
        companyName: companyName || "N/A",
        specialInstructions: specialInstructions || "None provided",
      },
    };

    // Log formatted snapshot to browser console
    console.group("🚀 [DISPATCH FORM SUBMISSION SNAPSHOT]");
    console.log(JSON.stringify(submissionSnapshot, null, 2));
    console.groupEnd();

    // Save contact name for the success card
    setSubmittedName(contactName);

    // 1.2s delay for button state breathing room before transition
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
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
    <section className="relative min-h-screen bg-stone-950 text-stone-100 pt-32 sm:pt-40 md:pt-50 px-9 lg:pt-45 pb-10">
      {/* Background Image */}
      <Image
        src="/contact_main.png"
        alt="Commercial tire service on Texas highway"
        width={1920}
        height={500}
        priority
        style={{ height: "auto" }}
        className="absolute top-0 inset-x-0 w-full max-h-[500px] object-cover object-[49%_center] z-0 opacity-70"
        unoptimized
      />

      {/* Overlay */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-stone-950/20 via-stone-950/70 to-stone-950 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative z-10 space-y-18 lg:space-y-25">
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
