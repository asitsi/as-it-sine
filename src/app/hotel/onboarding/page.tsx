"use client";

import { useState } from "react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🏨 Hotel Onboarding
          </h1>
          <p className="text-gray-500 text-lg">
            Complete the steps below to list your hotel
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => (
              <div key={step.key} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step.number <= currentStepIndex + 1
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.number <= currentStepIndex + 1 ? "✓" : step.number}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    step.number <= currentStepIndex + 1
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-500 rounded-full"
              style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Step 1: Basic Details */}
          {currentStep === "details" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Basic Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hotel Name *
                </label>
                <input
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  placeholder="e.g. Grand Paradise Resort"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell guests about your hotel..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Star Rating *
                  </label>
                  <select
                    value={starRating}
                    onChange={(e) => setStarRating(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Rooms *
                  </label>
                  <input
                    type="number"
                    value={roomCount}
                    onChange={(e) => setRoomCount(e.target.value)}
                    placeholder="e.g. 50"
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {currentStep === "location" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Location Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 123 Ocean View Drive"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Miami"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. USA"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Amenities */}
          {currentStep === "amenities" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Amenities & Facilities
              </h2>
              <p className="text-gray-500 mb-4">
                Select all amenities that your hotel offers
              </p>
              <div className="grid grid-cols-2 gap-3">
                {amenitiesList.map((amenity) => (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`px-4 py-3 rounded-xl border text-left transition-all ${
                      selectedAmenities.includes(amenity)
                        ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                        : "border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`w-5 h-5 rounded border flex items-center justify-center ${
                          selectedAmenities.includes(amenity)
                            ? "bg-blue-600 border-blue-600"
                            : "border-gray-400"
                        }`}
                      >
                        {selectedAmenities.includes(amenity) && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </span>
                      {amenity}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Pricing */}
          {currentStep === "pricing" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Base Price per Night *
                  </label>
                  <input
                    type="number"
                    value={basePrice}
                    onChange={(e) => setBasePrice(e.target.value)}
                    placeholder="e.g. 150"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
                  <p className="text-green-800 font-medium">
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Photos & Media</h2>
              <p className="text-gray-500 mb-4">
                Upload photos of your hotel to attract more guests
              </p>
              <div
                className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input id="file-upload" type="file" multiple accept="image/*" className="hidden" />
                <div className="text-4xl mb-3">📸</div>
                <p className="text-gray-600 font-medium">Click to upload photos</p>
                <p className="text-gray-400 text-sm mt-1">
                  PNG, JPG or WEBP (max. 5MB each)
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                currentStepIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ← Back
            </button>

            <span className="text-sm text-gray-500">
              Step {currentStepIndex + 1} of {steps.length}
            </span>

            {currentStepIndex < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  isStepValid()
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "bg-blue-300 text-white cursor-not-allowed"
                }`}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  isStepValid()
                    ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                    : "bg-green-300 text-white cursor-not-allowed"
                }`}
              >
                Submit Hotel ✓
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Need help? Contact our support team for assistance
        </p>
      </div>
    </div>
  );
}
