import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/HeroImg.jpg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden px-3 sm:px-4 md:px-5 py-3 md:py-4">
      
      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-7xl mx-auto rounded-[22px] sm:rounded-[28px] overflow-hidden min-h-[92vh] lg:min-h-[100vh] border border-white/10"
      >
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Truck Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b183d]/75 via-[#0b183d]/35 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[92vh] lg:min-h-[100vh] px-5 sm:px-8 lg:px-14 py-8 sm:py-10">
          
          {/* Top Content */}
          <div className="max-w-3xl pt-24 sm:pt-28 lg:pt-16">
            
            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wide mb-5 sm:mb-6 lg:mb-8"
            >
              Best Trucking Safety Services
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white text-[38px] sm:text-[52px] lg:text-[72px] leading-[1.05] font-serif font-medium tracking-wide"
            >
              Think For Safety
              <br />
              Think For Carrier
            </motion.h1>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 pb-3 sm:pb-5 lg:pb-0">
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/90 text-[10px] sm:text-xs md:text-sm tracking-[1.5px] sm:tracking-[2px] uppercase mb-6 sm:mb-8 font-normal leading-relaxed max-w-[320px] sm:max-w-none"
            >
              Keeping Up With Fleet Safety Requirements Is Like Trying To Hit A
              Moving Target
            </motion.p>

            {/* Button */}
            <div
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#ff3131] hover:bg-[#ff4545] text-white uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-sm px-7 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(255,49,49,0.35)]"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;