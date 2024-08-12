"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    setFormData({
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="px-[365px] mt-[80px]">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div className="flex flex-col mb-10">
          <label className="font-semibold mb-6">Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Email Address"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="transition-all duration-300 border border-[#7EB693] rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col mb-10">
          <label className="font-semibold mb-6">Your Email*</label>
          <input
            type="email"
            name="email"
            placeholder="example@yourmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="transition-all duration-300 border border-[#7EB693] rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col mb-10">
          <label className="font-semibold mb-6">Company*</label>
          <input
            type="text"
            name="company"
            placeholder="yourcompany name here"
            value={formData.company}
            onChange={handleChange}
            className="transition-all duration-300 border border-[#7EB693] rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col mb-10">
          <label className="font-semibold mb-6">Subject*</label>
          <input
            type="text"
            name="subject"
            placeholder="how can we help"
            value={formData.subject}
            onChange={handleChange}
            required
            className="transition-all duration-300 border border-[#7EB693] rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-6">Message*</label>
          <textarea
            name="message"
            placeholder="hello there, i would like to talk about how to..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="transition-all duration-300 border border-[#7EB693] rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="max-w-[220px]">
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-7 bg-[#274c5b] text-white font-semibold rounded-2xl shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
