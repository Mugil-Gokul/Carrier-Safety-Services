import React, { useState } from "react";
import { motion } from "framer-motion";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    const subject = `New Contact Enquiry - ${firstName} ${lastName}`;

    const body = `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    // Replace with your email
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@carriersafetyservices.com&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body.trim())}`;

    window.open(gmailLink, "_blank");

    toast.success("Opening Gmail...");

    // Reset Form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12 md:py-14 px-4 sm:px-5">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto rounded-[22px] md:rounded-[28px] border border-white bg-white/30 p-4 sm:p-5 md:p-8 shadow-2xl"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-black text-[34px] sm:text-[46px] md:text-6xl font-medium tracking-[1px] sm:tracking-[2px] md:tracking-[3px] leading-tight mb-8 sm:mb-10 md:mb-14"
        >
          Start Conversation
        </motion.h2>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#f5f5f5] rounded-[22px] md:rounded-[28px] p-5 sm:p-6 md:p-10 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* ================= NAME ================= */}
            <div>
              <label className="block text-black text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                Name
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full h-[54px] sm:h-[58px] rounded-xl border border-gray-300 bg-white px-4 sm:px-5 text-sm sm:text-base text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
                />

                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full h-[54px] sm:h-[58px] rounded-xl border border-gray-300 bg-white px-4 sm:px-5 text-sm sm:text-base text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
                />
              </div>
            </div>

            {/* ================= EMAIL ================= */}
            <div>
              <label className="block text-black text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                Email
              </label>

              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Sample@gmail.com"
                required
                className="w-full h-[54px] sm:h-[58px] rounded-xl border border-gray-300 bg-white px-4 sm:px-5 text-sm sm:text-base text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
              />
            </div>

            {/* ================= PHONE ================= */}
            <div>
              <label className="block text-black text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                Phone
              </label>

              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full h-[54px] sm:h-[58px] rounded-xl border border-gray-300 bg-white px-4 sm:px-5 text-sm sm:text-base text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
              />
            </div>

            {/* ================= MESSAGE ================= */}
            <div>
              <label className="block text-black text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-4">
                Message
              </label>

              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full rounded-2xl border border-gray-300 bg-white p-4 sm:p-5 text-sm sm:text-base text-gray-700 outline-none resize-none focus:border-[#1e57a8] transition-all duration-300 min-h-[180px] sm:min-h-[220px]"
              />
            </div>

            {/* ================= BUTTON ================= */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white px-8 sm:px-10 md:px-14 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
