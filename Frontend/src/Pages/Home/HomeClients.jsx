import React from "react";
import { motion } from "framer-motion";
import RIBS from "../../assets/RIBS.webp"
import UT from "../../assets/UT.webp"
import ST from "../../assets/ST.webp"
import WTI from "../../assets/WTI.webp"
import TXLI from "../../assets/TXLI.webp"
import DM from "../../assets/DM.webp"
import NL from "../../assets/NL.webp"
import LFT from "../../assets/LFT.webp"
import CFE from "../../assets/CFE.webp"

const clients = [
  {
    name: "Ribs Transport",
    logo: RIBS,
  },
  {
    name: "U Trans",
    logo: UT,
  },
  {
    name: "Sun Transportation",
    logo: ST,
  },
  {
    name: "WTI",
    logo: WTI,
  },
  {
    name: "TXLI",
    logo: TXLI,
  },
  {
    name: "DM Express",
    logo: DM,
  },
  {
    name: "Navi Logistics",
    logo: NL,
  },
  {
    name: "LFT",
    logo: LFT,
  },
  {
    name: "CFE",
    logo: CFE,
  }
];

const HomeClients = () => {
  return (
    <section className="relative w-full py-12 md:py-20 px-5 overflow-hidden">

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto border border-white/40 rounded-xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] min-h-[650px]">
          {/* LEFT SIDE */}
          <div className="flex items-start justify-center lg:justify-start p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/20">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-6xl font-medium text-center mb-20 text-white tracking-wider"
            >
              Clients
            </motion.h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 grid-rows-3 bg-white">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className={`
                  flex items-center justify-center
                  min-h-[180px]
                  p-8
                  border-black/30
                  
                  ${
                    index !== 1 && index !== 3 && index !== 5
                      ? "border-r"
                      : "border-b"
                  }

                  ${index !== 4 && index !== 5 ? "border-b" : "border-b"}
                `}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-[70px] md:max-h-[85px] object-contain opacity-90"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeClients;