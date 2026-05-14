import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "DOT AND MTO COMPLIANCE SERVICES",
    description:
      "Start With A Mock Audit. Find Out What Could Be Found In A Real Audit So We Know Where To Start.",
  },
  {
    title: "COMPLETE SAFETY PROGRAM MANAGEMENT",
    description:
      "Start With A Mock Audit. Find Out What Could Be Found In A Real Audit So We Know Where To Start.",
  },
  {
    title: "GUARANTEED RESULTS",
    description:
      "If Your DOT/MTO/FMCSA Safety Rating Is Downgraded While Fully Implementing Our Program, We’ll Fix It At No Additional Charge To You.",
  },
];

const HomeExperience = () => {
  return (
    <section className="w-full text-white py-16 px-5">
      {/* Experience Banner (unchanged) */}
      <div className="text-center border border-white w-full py-10 rounded-xl mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold tracking-wider mb-6"
        >
          OVER 15 YEARS OF EXPERIENCE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm md:text-lg tracking-wide max-w-5xl mx-auto"
        >
          Failing To Effectively Manage These Factors Will Result In
          Unnecessarily High Costs And An Increase In Avoidable Risk. It’s No
          Wonder So Many Companies With Fleets Of Vehicles Are Frustrated Or
          Confused About How To Maintain DOT Compliance. Carrier Safety Services
          Consultants Finds Potential Risk And Then Helps You Eliminate It So
          You Can Sleep Better Knowing You’re In Compliance.
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-4 shadow-lg"
          >
            <div className="bg-gray-200 rounded-lg h-full flex flex-col justify-between p-10 text-center">
              {/* Title at top */}
              <h3 className="text-lg md:text-xl font-bold text-black mb-8">
                {card.title}
              </h3>
              {/* Content at bottom */}
              <p className="text-sm md:text-base text-black leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeExperience;
