import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobe,
  FaTrophy,
} from "react-icons/fa";

import NATMI from "../../assets/NATMI.webp";
import FleetSafety from "../../assets/FSC.webp";
import IHSA from "../../assets/IHSA.webp";

const memberships = [
  {
    name: "NATMI",
    logo: NATMI,
  },
  {
    name: "Fleet Safety Council",
    logo: FleetSafety,
  },
  {
    name: "Infrastructure Health & Safety Association",
    logo: IHSA,
  },
];

const stats = [
  {
    icon: <FaUsers />,
    number: "20+",
    label: "Clients",
  },
  {
    icon: <FaGlobe />,
    number: "15+",
    label: "Projects",
  },
  {
    icon: <FaTrophy />,
    number: "15+",
    label: "Feedbacks",
  },
];

const Membership = () => {
  return (
    <section className="w-full overflow-hidden">
      
      {/* ================= TOP SECTION ================= */}
      <div className="relative py-12 md:py-20 px-4 sm:px-5">
        
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium text-center mb-10 md:mb-20 text-white tracking-wider"
          >
            Membership
          </motion.h2>

          {/* Membership Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-white/30 rounded-[22px] md:rounded-[28px] p-4 sm:p-6 md:p-8"
          >
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
              
              {memberships.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl min-h-[150px] sm:min-h-[170px] flex items-center justify-center shadow-xl p-6 sm:p-8"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-[55px] sm:max-h-[70px] w-auto max-w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="bg-[#eef4fb] py-12 sm:py-14 md:py-16 px-4">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center justify-center text-center"
            >
              
              {/* Icon */}
              <div className="text-[#ff1f1f] text-3xl sm:text-4xl mb-4">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-[42px] sm:text-5xl md:text-6xl font-semibold text-[#444] leading-none">
                {item.number}
              </h3>

              {/* Label */}
              <p className="text-gray-500 mt-3 text-base sm:text-lg tracking-wide">
                {item.label}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;