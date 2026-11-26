"use client";

import { useState } from "react";
import { SineWaveBackdrop } from "@/components/SineWaveBackdrop";

type OnboardingStep = "details" | "location" | "amenities" | "pricing" | "photos";

const amenitiesList = [
  "Free WiFi",
  "Swimming Pool",
  "Fitness Center",
  "Restaurant",
  "Room Service",
  "Spa",
  "Bar / Lounge",
  "Airport Shuttle",
  "Parking",
  "Pet Friendly",
  "Laundry Service",
  "Business Center",
];

export default function HotelOnboardingPage() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("details");

  // Form state
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [starRating, setStarRating] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [basePrice, setBasePrice] = useState("");
  const [currency, setCurrency] = useState("USD");

  const steps: { key: OnboardingStep; label: string; number: number }[] = [
    { key: "details", label: "Basic Details", number: 1 },
    { key: "location", label: "Location", number: 2 },
    { key: "amenities", label: "Amenities", number: 3 },
    { key: "pricing", label: "Pricing", number: 4 },
    { key: "photos", label: "Photos", number: 5 },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === currentStep);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1].key);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1].key);
    }
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSubmit = () => {
    console.log("Hotel onboarding submitted:", {
      hotelName,
      description,
      address,
      city,
      country,
      starRating,
      roomCount,
      selectedAmenities,
      basePrice,
      currency,
    });
    alert("Hotel onboarding submitted successfully!");
  };

  const isStepValid = () => {
    switch (currentStep) {
      case "details":
        return hotelName.trim() !== "" && description.trim() !== "" && starRating !== "" && roomCount !== "";
      case "location":
        return address.trim() !== "" && city.trim() !== "" && country.trim() !== "";
      case "amenities":
        return selectedAmenities.length > 0;
      case "pricing":
        return basePrice !== "";
      case "photos":
        return true;
      default:
        return false;
    }
  };

  const inputClassName =
    "w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all";

  return (
    <div className="relative flex-1 overflow-hidden py-12 px-4 sm:py-16">
      <SineWaveBackdrop />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/80 dark:bg-slate-900/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            AS-IT SINE HotelOS • Newly Launched Product
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-2">
            🏨 Hotel <span className="sine-gradient-text">Onboarding</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Complete the steps below to list your hotel
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10 rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white/80 dark:bg-[#0b1124]/80 p-5 backdrop-blur-md shadow-sm">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => {
              const completedOrActive = step.number <= currentStepIndex + 1;
              return (
                <div key={step.key} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      completedOrActive
                        ? "sine-gradient-bg text-white shadow-lg shadow-cyan-500/20"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {completedOrActive ? "✓" : step.number}
                  </div>
                  <span
                    className={`text-xs mt-2 font-semibold ${
                      completedOrActive
                        ? "text-cyan-700 dark:text-cyan-300"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="relative h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full sine-gradient-bg transition-all duration-500 rounded-full"
              style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden bg-white/90 dark:bg-[#0b1124]/90 rounded-3xl shadow-2xl shadow-blue-950/10 dark:shadow-cyan-950/30 p-7 sm:p-10 border border-slate-200/90 dark:border-slate-800 backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-1 sine-gradient-bg" />

          {/* Step 1: Basic Details */}
          {currentStep === "details" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                Basic Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  Hotel Name *
                </label>
                <input
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  placeholder="e.g. Grand Paradise Resort"
                  className={inputClassName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell guests about your hotel..."
                  rows={4}
                  className={`${inputClassName} resize-none`}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Star Rating *
                  </label>
                  <select
                    value={starRating}
                    onChange={(e) => setStarRating(e.target.value)}
                    className={inputClassName}
                  >
                    <option value="">Select rating</option>
                    <option value="1">⭐ 1 Star</option>
                    <option value="2">⭐⭐ 2 Stars</option>
                    <option value="3">⭐⭐⭐ 3 Stars</option>
                    <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                    <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Number of Rooms *
                  </label>
                  <input
                    type="number"
                    value={roomCount}
                    onChange={(e) => setRoomCount(e.target.value)}
                    placeholder="e.g. 50"
                    min="1"
                    className={inputClassName}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {currentStep === "location" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                Location Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 123 Ocean View Drive"
                  className={inputClassName}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Miami"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. USA"
                    className={inputClassName}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Amenities */}
          {currentStep === "amenities" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">
                Amenities & Facilities
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                Select all amenities that your hotel offers
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenitiesList.map((amenity) => {
                  const selected = selectedAmenities.includes(amenity);
                  return (
                    <button
                      key={amenity}
                      type="button"
                      onClick={() => toggleAmenity(amenity)}
                      className={`px-4 py-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selected
                          ? "border-cyan-500 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold shadow-sm"
                          : "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/60"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            selected
                              ? "sine-gradient-bg border-transparent"
                              : "border-slate-400 dark:border-slate-600"
                          }`}
                        >
                          {selected && (
                            <span className="text-white text-xs font-bold">✓</span>
                          )}
                        </span>
                        {amenity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Pricing */}
          {currentStep === "pricing" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                Pricing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Base Price per Night *
                  </label>
                  <input
                    type="number"
                    value={basePrice}
                    onChange={(e) => setBasePrice(e.target.value)}
                    placeholder="e.g. 150"
                    min="0"
                    step="0.01"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Currency
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className={inputClassName}
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="INR">INR (₹)</option>
                    <option value="AED">AED (د.إ)</option>
                  </select>
                </div>
              </div>
              {basePrice && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mt-4">
                  <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
                    ✓ Base rate set to{" "}
                    {new Intl.NumberFormat("en-US", { style: "currency", currency }).format(Number(basePrice))}
                    {" "}/ night
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Photos */}
          {currentStep === "photos" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">
                Photos & Media
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                Upload photos of your hotel to attract more guests
              </p>
              <div
                className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 text-center hover:border-cyan-500/60 bg-slate-50/50 dark:bg-slate-900/40 transition-colors cursor-pointer"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input id="file-upload" type="file" multiple accept="image/*" className="hidden" />
                <div className="text-4xl mb-3">📸</div>
                <p className="text-slate-700 dark:text-slate-200 font-semibold">
                  Click to upload photos
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">
                  PNG, JPG or WEBP (max. 5MB each)
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                currentStepIndex === 0
                  ? "bg-slate-100 dark:bg-slate-800/60 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer"
              }`}
            >
              ← Back
            </button>

            <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
              Step {currentStepIndex + 1} of {steps.length}
            </span>

            {currentStepIndex < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  isStepValid()
                    ? "sine-gradient-bg text-white shadow-md shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                }`}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  isStepValid()
                    ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/20 cursor-pointer"
                    : "bg-emerald-500/30 text-white/60 cursor-not-allowed"
                }`}
              >
                Submit Hotel ✓
              </button>
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8">
          Need help? Contact our AS-IT SINE support team for assistance
        </p>
      </div>
    </div>
  );
}
