import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="relative w-full overflow-hidden py-14 px-5">

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto rounded-[28px] border border-white bg-white/30 p-5 md:p-8 shadow-2xl"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-black text-4xl md:text-7xl font-semibold tracking-[3px] mb-10 md:mb-14"
        >
          Start Conversation
        </motion.h2>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#f5f5f5] rounded-[28px] p-6 md:p-10 shadow-xl"
        >
          <form className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-black text-lg md:text-xl font-medium mb-4">
                Name
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="First Name"
                  className="w-full h-[58px] rounded-xl border border-gray-300 bg-white px-5 text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
                />

                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-[58px] rounded-xl border border-gray-300 bg-white px-5 text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-black text-lg md:text-xl font-medium mb-4">
                Email
              </label>

              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Sample@gmail.com"
                className="w-full h-[58px] rounded-xl border border-gray-300 bg-white px-5 text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-black text-lg md:text-xl font-medium mb-4">
                Phone ( optional )
              </label>

              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                className="w-full h-[58px] rounded-xl border border-gray-300 bg-white px-5 text-gray-700 outline-none focus:border-[#1e57a8] transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-black text-lg md:text-xl font-medium mb-4">
                Message
              </label>

              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={6}
                placeholder="Write your message here..."
                className="w-full rounded-2xl border border-gray-300 bg-white p-5 text-gray-700 outline-none resize-none focus:border-[#1e57a8] transition-all duration-300"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-full md:px-14 text-lg font-medium shadow-lg"  
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