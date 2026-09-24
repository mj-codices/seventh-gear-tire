"use client";

import {
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useState,
} from "react";
import { Step1ServiceType } from "./Step1ServiceType";
import { Step2OnsiteDetails } from "./Step2OnsiteDetails";
import { Step3TireInfo } from "./Step3TireInfo";
import { Step4ContactLocation } from "./Step4ContactLocation";
import { SubmissionSuccess } from "./SubmissionSuccess";
import { motion, AnimatePresence } from "framer-motion";

export interface OptionItem {
  id: string;
  title: string;
}

export interface VehicleOption {
  value: string;
  label: string;
}

interface ContactFormProps {
  selectedService: string;
  setSelectedService: Dispatch<SetStateAction<string>>;
  selectedOnsiteOption: string;
  setSelectedOnsiteOption: Dispatch<SetStateAction<string>>;
  selectedVehicleType: string;
  setSelectedVehicleType: Dispatch<SetStateAction<string>>;
  tireSize: string;
  setTireSize: Dispatch<SetStateAction<string>>;
  selectedTireType: string;
  setSelectedTireType: Dispatch<SetStateAction<string>>;

  // QUANTITY PROPS
  tireQuantity?: string;
  setTireQuantity?: Dispatch<SetStateAction<string>>;

  // PHOTO PROPS
  photoFile?: File | null;
  handlePhotoChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  locationValue: string;
  setLocationValue: Dispatch<SetStateAction<string>>;
  isLocating: boolean;
  isGpsCaptured: boolean;
  setIsGpsCaptured: Dispatch<SetStateAction<boolean>>;
  handleGetLocation: () => void;

  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submittedName: string;
  handleResetForm: () => void;
}

export function ContactForm({
  selectedService,
  setSelectedService,
  selectedOnsiteOption,
  setSelectedOnsiteOption,
  selectedVehicleType,
  setSelectedVehicleType,
  tireSize,
  setTireSize,
  selectedTireType,
  setSelectedTireType,
  tireQuantity,
  setTireQuantity,
  photoFile,
  handlePhotoChange,
  locationValue,
  setLocationValue,
  isLocating,
  isGpsCaptured,
  setIsGpsCaptured,
  handleGetLocation,
  handleSubmit,
  isSubmitting,
  isSubmitted,
  submittedName,
  handleResetForm,
}: ContactFormProps) {
  // 1. HONEYPOT STATE FOR BOT PROTECTION
  const [honeypot, setHoneypot] = useState("");

  // 2. WRAP SUBMIT TO CHECK HONEYPOT BEFORE INVOKING PARENT'S handleSubmit
  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const botField = formData.get("website_url") as string;

    if (botField || honeypot) {
      console.warn("🤖 Bot submission detected and blocked via Honeypot.");
      return;
    }

    await handleSubmit(e);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.section
        id="contact-form-section"
        layout={isSubmitted ? true : false}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 sm:p-8 bg-stone-900/60 border border-stone-800 rounded-2xl overflow-hidden scroll-mt-28"
      >
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <SubmissionSuccess
                locationValue={locationValue}
                serviceType={selectedOnsiteOption || selectedService}
                vehicleType={selectedVehicleType}
                tireSize={tireSize}
                onReset={handleResetForm}
              />
            </motion.div>
          ) : (
            <motion.form
              key="contact-form"
              onSubmit={onFormSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.97, y: -6 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              className="justify-center"
            >
              {/* HIDDEN HONEYPOT INPUT FOR SPAM PROTECTION */}
              <div
                aria-hidden="true"
                className="opacity-100 absolute -z-10 pointer-events-none h-0 w-0 overflow-hidden"
              >
                <label htmlFor="website_url">Do not fill this field</label>
                <input
                  type="text"
                  id="website_url"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="space-y-8">
                {/* STEP 1: SERVICE TYPE SELECTION */}
                <Step1ServiceType
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                />

                {/* STEP 2: Renders dynamically based on selectedService */}
                {Boolean(selectedService) && (
                  <Step2OnsiteDetails
                    selectedService={selectedService}
                    selectedOnsiteOption={selectedOnsiteOption}
                    setSelectedOnsiteOption={setSelectedOnsiteOption}
                    selectedVehicleType={selectedVehicleType}
                    setSelectedVehicleType={setSelectedVehicleType}
                  />
                )}

                {/* STEP 3 & STEP 4 */}
                <AnimatePresence>
                  {Boolean(selectedService) && selectedOnsiteOption !== "" && (
                    <motion.div
                      key="steps-3-and-4"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-10 mt-8"
                    >
                      <Step3TireInfo
                        selectedService={selectedService}
                        tireSize={tireSize}
                        setTireSize={setTireSize}
                        selectedTireType={selectedTireType}
                        setSelectedTireType={setSelectedTireType}
                        tireQuantity={tireQuantity}
                        setTireQuantity={setTireQuantity}
                        photoFile={photoFile}
                        handlePhotoChange={handlePhotoChange}
                      />

                      <Step4ContactLocation
                        locationValue={locationValue}
                        setLocationValue={setLocationValue}
                        isGpsCaptured={isGpsCaptured}
                        setIsGpsCaptured={setIsGpsCaptured}
                        isLocating={isLocating}
                        handleGetLocation={handleGetLocation}
                        isSubmitting={isSubmitting}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}