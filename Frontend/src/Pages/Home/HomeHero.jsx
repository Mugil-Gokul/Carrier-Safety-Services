import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/HeroImg.jpg"; // update image path

const logos = [
  "GRUBHUB",
  "VANDERBILT",
  "Chartwells",
  "aramark",
  "STARSHIP",
  "jamix",
  "GRUBHUB",
  // "VANDERBILT",
  // "Chartwells",
];

const HomeHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-4">
      {/* dotted background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-7xl mx-auto rounded-[28px] overflow-hidden min-h-[100vh] border border-white/10"
      >
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Truck Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b183d]/65 via-[#0b183d]/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[100vh] px-6 sm:px-10 lg:px-14 py-10">
          {/* Top Content */}
          <div className="max-w-3xl pt-16 sm:pt-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-xl sm:text-2xl font-light tracking-wide mb-8"
            >
              Best Trucking Safety Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white text-[52px] sm:text-[72px] lg:text-[82px] leading-[1.05] font-light tracking-wide"
            >
              Think For Safety
              <br />
              Think For Carrier
            </motion.h1>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 bg-[#ff3131] hover:bg-[#ff4545] text-white uppercase tracking-[3px] text-sm px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(255,49,49,0.35)]"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/90 text-xs sm:text-sm tracking-[2px] uppercase mb-8"
            >
              Keeping Up With Fleet Safety Requirements Is Like Trying To Hit A
              Moving Target
            </motion.p>

            {/* Logos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-8 sm:gap-12 text-white/95"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="text-lg sm:text-xl font-semibold tracking-wide opacity-90"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;