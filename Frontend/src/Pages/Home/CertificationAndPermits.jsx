import React from "react";
import { motion } from "framer-motion";
import CSA from "../../assets/CSA.webp"
import CTAPAT from "../../assets/CTPAT.webp"
import DOT from "../../assets/DOT.webp"
import DTOPS from "../../assets/DTOPS.webp"
import FE from "../../assets/FE.webp"
import IFTA from "../../assets/IFTA.webp"
import IRS from "../../assets/IRS.webp"
import MTO from "../../assets/MTO.webp"
import PIP from "../../assets/PIP.webp"
import SCAC from "../../assets/SCAC.webp"
import SMS from "../../assets/SMS.webp"
import SW from "../../assets/SW.webp"
import URS from "../../assets/URS.webp"
import WSIB from "../../assets/WSIB.webp"

const certifications = [
  {
    name: "CSA",
    logo: CSA,
  },
  {
    name: "CTPAT",
    logo: CTAPAT,
  },
  {
    name: "DOT",
    logo: DOT,
  },
  {
    name: "DTOPS",
    logo: DTOPS,
  },
  {
    name: "FE",
    logo: FE,
  },
  {
    name: "IFTA",
    logo: IFTA,
  },
  {
    name: "IRS",
    logo: IRS,
  },
  {
    name: "MTO",
    logo: MTO,
  },
  {
    name: "PIP",
    logo: PIP,
  },
  {
    name: "SCAC",
    logo: SCAC,
  },
  {
    name: "SMS",
    logo: SMS,
  },
  {
    name: "SW",
    logo: SW,
  },
  {
    name: "URS",
    logo: URS,
  },
  {
    name: "WSIB",
    logo: WSIB
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
          className="text-3xl md:text-5xl font-medium text-center mb-20 text-white tracking-wider"
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
                  className="h-10 md:h-16 w-auto object-contain"
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
