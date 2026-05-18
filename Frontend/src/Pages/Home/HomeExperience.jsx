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
    <section className="w-full text-white py-12 md:py-16 px-4 sm:px-5">
      
      {/* Experience Banner */}
      <div className="text-center border border-white/40 w-full py-8 sm:py-10 md:py-12 rounded-2xl mb-10 md:mb-12 px-5 sm:px-8">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[24px] sm:text-[32px] md:text-4xl font-bold tracking-[1px] sm:tracking-[3px] mb-5 md:mb-6 leading-tight"
        >
          OVER 15 YEARS OF EXPERIENCE
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[13px] sm:text-[15px] md:text-lg leading-relaxed sm:leading-[1.9] tracking-wide max-w-5xl mx-auto text-white/90"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mx-auto">
        
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
            }}
            className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg"
          >
            <div className="bg-gray-200 rounded-xl h-full flex flex-col justify-between text-center px-5 sm:px-7 md:px-8 py-10 sm:py-12 md:py-14">
              
              {/* Title */}
              <h3 className="text-[17px] sm:text-[17px] md:text-lg font-bold text-black mb-6 sm:mb-8 leading-snug tracking-wide font-serif">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] md:text-base text-black/80 leading-relaxed sm:leading-7">
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