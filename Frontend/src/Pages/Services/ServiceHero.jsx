import React from "react";
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 px-5">

      {/* Outer Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto border border-white/30 rounded-[28px] p-4 md:p-5"
      >
        {/* Main White Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#f3f3f3] rounded-[24px] px-6 md:px-12 py-10 md:py-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* Small Label */}
                <motion.p
                  initial={{ opacity: 0, letterSpacing: "0.2em" }}
                  whileInView={{ opacity: 1, letterSpacing: "0.08em" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[#3558d8] uppercase text-[11px] tracking-[3px] font-semibold mb-10"
                >
                  Optimize Logistics
                </motion.p>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[#1b2340] text-3xl md:text-5xl font-semibold leading-tight max-w-xl mb-6"
                >
                  Streamline Supply Chains & Boost Delivery Efficiency
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-[#4b5675] text-sm md:text-base leading-7 max-w-md"
                >
                  An AI-powered system for trustworthy service data,
                  accident prevention, intelligent route optimization,
                  and proactive inventory management.
                </motion.p>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-[#ff3b3b] text-white px-8 py-3 rounded-full text-sm tracking-[2px] uppercase font-medium w-fit shadow-lg"
              >
                Contact Us
              </motion.button>
            </div>

            {/* RIGHT IMAGE BOX */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="w-full max-w-[420px] h-[380px] bg-[#d9d9d9] rounded-[28px] shadow-inner"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;