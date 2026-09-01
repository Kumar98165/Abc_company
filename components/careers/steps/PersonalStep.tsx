"use client";

import React from "react";
import { PersonalInfo } from "../types";

interface PersonalStepProps {
  data: PersonalInfo;
  onChange: (updated: Partial<PersonalInfo>) => void;
  errors: { [key: string]: string };
}

export function PersonalStep({ data, onChange, errors }: PersonalStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl font-extrabold text-[#0F172A]">Step 1 — Personal Information</h2>
        <p className="text-xs text-[#64748B] mt-1">
          Please provide your contact and geographic details so our recruitment team can reach you.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name & Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Full Name <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full rounded-xl border ${errors.fullName ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] focus:ring-1 focus:ring-[#FF5F00] transition-colors`}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-500 font-bold">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Email Address <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`w-full rounded-xl border ${errors.email ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] focus:ring-1 focus:ring-[#FF5F00] transition-colors`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500 font-bold">{errors.email}</p>}
          </div>
        </div>

        {/* Phone & Gender */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Phone Number <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full rounded-xl border ${errors.phone ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] focus:ring-1 focus:ring-[#FF5F00] transition-colors`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500 font-bold">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Gender <span className="text-xs font-normal text-[#94A3B8]">(Optional - Not used for candidate ranking)</span>
            </label>
            <select
              name="gender"
              value={data.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Country, State/Province, City */}
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Country <span className="text-[#FF5F00]">*</span>
            </label>
            <select
              name="country"
              value={data.country}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00] cursor-pointer"
            >
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="UAE">UAE</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              State / Province <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="text"
              name="stateProvince"
              value={data.stateProvince}
              onChange={handleChange}
              placeholder="e.g. Maharashtra"
              className={`w-full rounded-xl border ${errors.stateProvince ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]`}
            />
            {errors.stateProvince && <p className="mt-1 text-xs text-red-500 font-bold">{errors.stateProvince}</p>}
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              City <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={handleChange}
              placeholder="e.g. Pune"
              className={`w-full rounded-xl border ${errors.city ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]`}
            />
            {errors.city && <p className="mt-1 text-xs text-red-500 font-bold">{errors.city}</p>}
          </div>
        </div>

        {/* PIN Code, Address 1, Address 2 */}
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              PIN / Postal Code <span className="text-[#FF5F00]">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              value={data.pincode}
              onChange={handleChange}
              placeholder="e.g. 411001"
              className={`w-full rounded-xl border ${errors.pincode ? "border-red-500" : "border-[#E8E0D8]"} bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]`}
            />
            {errors.pincode && <p className="mt-1 text-xs text-red-500 font-bold">{errors.pincode}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Address Line 1
            </label>
            <input
              type="text"
              name="addressLine1"
              value={data.addressLine1}
              onChange={handleChange}
              placeholder="Flat No, Building Name, Street..."
              className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1.5">
            Address Line 2 <span className="text-xs font-normal text-[#94A3B8]">(Optional)</span>
          </label>
          <input
            type="text"
            name="addressLine2"
            value={data.addressLine2}
            onChange={handleChange}
            placeholder="Landmark, Area..."
            className="w-full rounded-xl border border-[#E8E0D8] bg-[#FAF8F5] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FF5F00]"
          />
        </div>
      </div>
    </div>
  );
}
