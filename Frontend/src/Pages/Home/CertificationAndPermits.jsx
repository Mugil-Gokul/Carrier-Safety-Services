import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Chartwells",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Chartwells_logo.svg",
  },
  {
    name: "Aramark",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Aramark_logo.svg",
  },
  {
    name: "Starship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Starship_Technologies_logo.svg",
  },
  {
    name: "FedEx",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/FedEx_Express.svg",
  },
  {
    name: "UPS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/United_Parcel_Service_logo_2014.svg",
  },
  {
    name: "DHL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg",
  },
];

// duplicate for seamless loop
const duplicatedLogos = [...certifications, ...certifications];

const CertificationAndPermits = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20">
      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold text-center mb-20 text-white"
        >
          Certifications And Permits
        </motion.h2>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden w-full">
          {/* fade left */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#18408f] to-transparent z-20" />

          {/* fade right */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#18408f] to-transparent z-20" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center gap-16 md:gap-28 w-max"
          >
            {duplicatedLogos.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center min-w-[180px] md:min-w-[250px]"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 md:h-16 w-auto object-contain brightness-0 invert opacity-95"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationAndPermits;
