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
    <section className="relative w-full overflow-hidden py-14 md:py-16 px-5">

      <div className="relative z-10 mx-auto">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Small Label */}
          <p className="text-[#b8d88b] uppercase tracking-[3px] text-[11px] md:text-xs mb-3 font-medium">
            Culture
          </p>

          {/* Main Heading */}
          <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight mb-4">
            Mission Driven, Values Led
          </h2>

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base leading-7 max-w-2xl mx-auto">
            At Topanga, our values drive everything we do. From rethinking
            sustainability in food service to fostering real partnerships with
            clients, these principles guide us as we work to create smarter,
            more sustainable kitchens.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
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
              className="bg-[#f3f3f3] rounded-xl p-6 shadow-xl border border-white/10"
            >
              {/* Card Label */}
              <p className="text-[#2d63ff] uppercase tracking-[2px] text-[11px] font-medium mb-4">
                {card.title}
              </p>

              {/* Card Heading */}
              <h3 className="text-[#1b2340] text-xl md:text-2xl font-semibold leading-snug mb-4">
                {card.heading}
              </h3>

              {/* Card Description */}
              <p className="text-[#4d5875] text-sm leading-7">
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