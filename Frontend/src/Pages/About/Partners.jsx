import React from "react";
import { motion } from "framer-motion";
import SAMSARA from "../../assets/SAMSARA.webp";
import SPEEDGAUGE from "../../assets/SPEEDGAUGE.webp";

const Partners = () => {
  const PartnersDetail = [
    {
      name: "SAMSARA",
      logo: SAMSARA,
    },
    {
      name: "Speed Gauge",
      logo: SPEEDGAUGE,
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      
      {/* TOP SECTION */}
      <div className="relative py-10 sm:py-14 md:py-20 px-4 sm:px-5">
        
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* ================= HEADING ================= */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-white text-[34px] sm:text-[48px] md:text-6xl font-light tracking-[2px] sm:tracking-[3px] mb-10 sm:mb-12 md:mb-14"
          >
            Our Partners
          </motion.h2>

          {/* ================= PARTNERS CONTAINER ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-white/40 rounded-[18px] sm:rounded-[22px] p-4 sm:p-6 md:p-8"
          >
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-10">
              
              {PartnersDetail.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl h-[140px] sm:h-[160px] md:h-[170px] flex items-center justify-center shadow-xl p-5 sm:p-6 md:p-8"
                >
                  
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-[55px] sm:max-h-[65px] md:max-h-[70px] w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;