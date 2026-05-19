import React from "react";
import { motion } from "framer-motion";

const cultureCards = [
  {
    title: "SAFETY",
    heading: "Safety Comes First",
    description:
      "We prioritize driver safety, fleet compliance, and operational reliability to help transportation companies reduce risk and maintain confidence on the road.",
  },
  {
    title: "COMMITMENT",
    heading: "Reliable Compliance Support",
    description:
      "For over 15 years, we have helped trucking companies stay DOT compliant with dependable guidance, proactive solutions, and industry expertise.",
  },
  {
    title: "INTEGRITY",
    heading: "Built On Trust & Partnership",
    description:
      "We work closely with every client to provide transparent support, practical solutions, and long-term strategies that strengthen fleet operations.",
  },
];

const AboutCulture = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-5">
      
      <div className="relative z-10 mx-auto">
        
        {/* ================= TOP CONTENT ================= */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center max-w-3xl mx-auto"
>
  
  {/* Small Label */}
  <p className="text-blue-300 uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[11px] md:text-sm mb-3 font-medium">
    Our Values
  </p>

  {/* Main Heading */}
  <h2 className="text-white text-[28px] sm:text-[36px] md:text-4xl font-semibold leading-tight mb-4 px-2">
    Driven By Safety, Built On Trust
  </h2>

  {/* Description */}
  <p className="text-white/70 text-[14px] sm:text-[15px] md:text-base leading-7 sm:leading-8 max-w-4xl mx-auto px-2">
    At Carrier Safety Services, our mission is to help trucking and
    transportation companies operate safely, efficiently, and confidently.
    With over 15 years of industry experience, we provide reliable compliance
    support, practical safety solutions, and long-term partnerships that help
    fleets stay protected and audit-ready.
  </p>
</motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
          
          {cultureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="bg-[#f3f3f3] rounded-2xl md:rounded-xl p-5 sm:p-6 shadow-xl border border-white/10"
            >
              
              {/* Card Label */}
              <p className="text-[#2d63ff] uppercase tracking-[2px] text-[10px] sm:text-[11px] font-medium mb-4">
                {card.title}
              </p>

              {/* Card Heading */}
              <h3 className="text-[#1b2340] text-[22px] sm:text-[24px] md:text-2xl font-semibold font-serif leading-snug mb-4">
                {card.heading}
              </h3>

              {/* Card Description */}
              <p className="text-[#4d5875] text-[14px] sm:text-[15px] leading-7">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutCulture;