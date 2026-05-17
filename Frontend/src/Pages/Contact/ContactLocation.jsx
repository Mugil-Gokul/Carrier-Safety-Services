import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactLocation = () => {
  return (
    <section className="w-full px-5 py-12 overflow-hidden">
      {/* Outer Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-[#efefef] rounded-[26px] px-5 md:px-8 py-8 md:py-10 shadow-xl"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-black"></div>

          <h2 className="text-black text-lg md:text-2xl font-light tracking-[2px]">
            Our Location
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-stretch">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-[#d9d9d9] rounded-2xl p-6 flex flex-col h-full min-h-[260px] md:min-h-[320px]"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaMapMarkerAlt className="text-[#1e57a8] text-xl" />

              <h3 className="text-black text-xl font-medium">
                Office Hours
              </h3>
            </div>

            <p className="text-black/90 text-sm md:text-base leading-8">
              600 Matheson Blvd W Unit 5,
              <br />
              Mississauga, ON, L5R 4C1
            </p>

            <p className="text-black text-sm md:text-base mt-6">
              Monday - Friday: 9:00 - 5:00
            </p>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-gray-500 rounded-2xl p-4 h-full"
          >
            <div className="rounded-xl overflow-hidden h-[260px] md:h-[320px]">
              <iframe
                title="location-map"
                src="https://www.google.com/maps?q=600+Matheson+Blvd+W+Unit+5,+Mississauga,+ON,+Canada&output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactLocation;