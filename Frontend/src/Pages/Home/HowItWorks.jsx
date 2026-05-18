import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "MOCK COMPLIANCE AUDIT",
    description:
      "THOROUGH EVALUATIONS BY EXPERTS FIND PROBLEMS BEFORE INVESTIGATORS DO.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Review Improvement Plan",
    description:
      "Address any problems uncovered with a strategic plan.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Implement Processes & Procedures",
    description:
      "CSS will take the guess work out of what changes need to be implemented.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Peace Of Mind From Reduced Risk",
    description:
      "Stop guessing whether you’re in compliance and be confident in your efforts.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-12 px-5 overflow-hidden relative">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-medium text-center mb-14 text-white"
      >
        How It Works
      </motion.h2>
      {/* dotted background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto bg-[#f1f1f1] rounded-[22px] px-5 md:px-12 py-8 md:py-10 shadow-2xl"
      >
        {/* Tabs */}
        <div className="w-full flex justify-center mb-12">
          <div className="bg-[#d5d5d5] rounded-sm md:rounded-full p-2 flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-0 w-full md:w-fit">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`px-6 md:px-10 py-4 rounded-full text-[11px] md:text-xs tracking-[2px] font-bold transition-all duration-300 leading-tight min-w-[150px] uppercase
                  
                  ${
                    activeTab === index
                      ? "bg-[#ff3131] text-black shadow-lg"
                      : "bg-transparent text-black"
                  }`}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <h2 className="text-black text-3xl md:text-5xl font-light tracking-[3px] leading-[1.2] uppercase max-w-[500px]">
                {tabs[activeTab].description}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Right Image Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeTab].image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-[#e2e2e2] p-3 rounded-2xl shadow-inner">
                <div className="w-full md:w-[320px] h-[260px] rounded-[18px] overflow-hidden border border-gray-400">
                  <img
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
