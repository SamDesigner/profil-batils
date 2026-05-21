"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, Loader2, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "Partition",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const WHATSAPP_NUMBER = "2349023046042"; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Client-Side Fields Validation 
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("All required specification details must be completed before transmission.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid corporate email address.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setFormError("Please provide a more detailed project quantity description (min. 10 characters).");
      return;
    }

    setIsSubmitting(true);

    const textMessage = `*NEW INQUIRY FROM BATI PROFILS WEBSITE*\n\n` +
      `*Name:* ${formData.fullName.trim()}\n` +
      `*Email:* ${formData.email.trim()}\n` +
      `*System Type:* ${formData.projectType}\n\n` +
      `*Message:* \n${formData.message.trim()}`;

    const encodedMessage = encodeURIComponent(textMessage);

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");

      // Reset states fields back to empty defaults on success
      setFormData({
        fullName: "",
        email: "",
        projectType: "Partition",
        message: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* HERO BANNER */}
      <div className="bg-[#2B2B2B] text-white py-20 px-6 border-b-4 border-[#FFCC29]">
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FFCC29] block mb-3">
            Direct Procurement
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Contact <span className="text-[#FFCC29]">Us</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl font-medium leading-relaxed">
            Submit your construction project specs below to route your bill of quantities or custom framing request directly to our commercial office desk via WhatsApp.
          </p>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT FRAME */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: COMPANY CORPORATE META INFO */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-4">
                Headquarters Office
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                Our local manufacturing units and administrative hubs remain positioned to facilitate rapid submittal processing across central logistical corridors.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone Desk */}
              <div className="flex items-center gap-4 text-gray-700 text-sm group">
                <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 text-black">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest">Calling Desk</span>
                  <a href="tel:+237690121135" className="font-bold text-base hover:underline">
                    +237 6 90 12 11 35
                  </a>
                </div>
              </div>

              {/* Contact Hours Window */}
              <div className="flex items-start gap-4 text-gray-700 text-sm group">
                <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 text-black shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest">Availability Window</span>
                  <span className="font-bold text-sm block text-gray-900 mt-0.5">Mon - Fri: 8:00 AM – 4:30 PM</span>
                  <span className="font-bold text-sm block text-gray-500">Saturday: 9:00 AM – 1:00 PM</span>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center gap-4 text-gray-700 text-sm group">
                <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest">Email Submittals</span>
                  <span className="font-bold text-base">info@batiprofils.net</span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4 text-gray-700 text-sm group">
                <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 text-black shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest">Plant Location</span>
                  <span className="font-bold text-base leading-relaxed">
                    Rue prince de Galles Akwa,<br />Douala - Cameroun
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#FFFDF3] border-2 border-black rounded-none flex items-start gap-4">
              <MessageSquare size={24} className="text-[#FFCC29] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wide text-gray-900 mb-1">Instant Routing Note</h4>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Pressing the submit button opens a link instance that redirects your web browser session to compile the data arrays straight into our live technical service window.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INPUT FORM */}
          <div className="w-full lg:w-7/12 bg-white border-2 border-black p-8 md:p-10 shadow-sm">
            <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Request Quotation Frame
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formError && (
                <div className="p-4 bg-red-50 border-l-4 border-red-600 text-xs font-bold uppercase tracking-wide text-red-700">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-gray-500 mb-2">
                    Full Name / Company Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    disabled={isSubmitting}
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Sarl Construction"
                    className="w-full bg-gray-50 border-2 border-gray-200 px-4 py-3 text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-all rounded-none disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-gray-500 mb-2">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 border-2 border-gray-200 px-4 py-3 text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-all rounded-none disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-gray-500 mb-2">
                  Primary Profile Focus System
                </label>
                <select
                  name="projectType"
                  disabled={isSubmitting}
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 px-4 py-3 text-sm font-bold uppercase tracking-wider focus:outline-none focus:border-black focus:bg-white transition-all rounded-none disabled:opacity-50"
                >
                  <option value="Partition">Partition Systems (UW / CW Track)</option>
                  <option value="Ceiling">Ceiling Frameworks (F-Channel / L-Angle)</option>
                  <option value="Cladding">Cladding Solutions</option>
                  <option value="Custom Order">Custom Hot-Dip Galvanized Profiles</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-gray-500 mb-2">
                  Project Quantities & Specifications
                </label>
                <textarea
                  name="message"
                  disabled={isSubmitting}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail profile dimensions, gauge limits (0.50mm - 0.70mm), total volumes required, or destination distribution drop points..."
                  className="w-full bg-gray-50 border-2 border-gray-200 px-4 py-3 text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-all rounded-none resize-none disabled:opacity-50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-black text-[#FFCC29] py-4 rounded-none font-black uppercase text-xs tracking-widest border border-black hover:bg-[#FFCC29] hover:text-black transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Routing Submittals</span>
                      <Loader2 size={14} className="animate-spin text-[#FFCC29]" />
                    </>
                  ) : (
                    <>
                      <span>Submit Specifications</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}