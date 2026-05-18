import React from "react";
import { motion } from "framer-motion";

const cultureCards = [
  {
    title: "INNOVATION",
    heading: "Redefining What’s Possible",
    description:
      "We are ushering in a new era of how we relate to food and packaging waste—pushing the envelope on what sustainability can and should look like.",
  },
  {
    title: "COMMITMENT",
    heading: "Impact That Matters",
    description:
      "We're committed to leaving this world better than we found it and proving that sustainability and bottom-line savings can go hand in hand.",
  },
  {
    title: "INTEGRITY",
    heading: "With You Every Step",
    description:
      "We aren’t just a transaction, we are a partnership. We are always finding ways to better serve our clients and create deeper impact together.",
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
          <p className="text-blue-300 uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[11px] md:text-xs mb-3 font-medium">
            Culture
          </p>

          {/* Main Heading */}
          <h2 className="text-white text-[28px] sm:text-[36px] md:text-4xl font-semibold leading-tight mb-4 px-2">
            Mission Driven, Values Led
          </h2>

          {/* Description */}
          <p className="text-white/70 text-[14px] sm:text-[15px] md:text-base leading-7 sm:leading-8 max-w-2xl mx-auto px-2">
            At Topanga, our values drive everything we do. From rethinking
            sustainability in food service to fostering real partnerships with
            clients, these principles guide us as we work to create smarter,
            more sustainable kitchens.
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