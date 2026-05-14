import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const PartnersDetail = [
    {
      name: "SAMSARA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/NATMI_logo.png",
    },
    {
      name: "Speed Gauge",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Safety_Council_logo.png",
    },
    {
      name: "Infrastructure Health & Safety Association",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/IHSA_logo.png",
    },
  ];
  return (
    <section className="w-full overflow-hidden">
      {/* TOP BLUE SECTION */}
      <div className="relative py-8 md:py-20 px-5">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-white text-4xl md:text-6xl font-light tracking-[3px] mb-14"
          >
            Our Partners
          </motion.h2>

          {/* Partners Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-white/40 rounded-[22px] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {PartnersDetail.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#efefef] rounded-2xl h-[170px] flex items-center justify-center shadow-xl p-8"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-[70px] w-auto object-contain"
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
