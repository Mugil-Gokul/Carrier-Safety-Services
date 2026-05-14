import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "COMPREHENSIVE DOT COMPLIANCE REVIEW",
    description:
      "The Comprehensive DOT Compliance Review Offers An Accurate Assessment Of Your Compliance Posture As Well As Actionable Advice For Improvement. You Have Access To Experts Who Are Trained To Understand The Complex Regulations That Affect Your Fleet.",
    points: [
      "Companies That Need 100% Clarity To Current Exposure",
      "Due Diligence During An Ownership Change",
      "Preparation For A Real Compliance Review",
    ],
  },
  {
    title: "COMPREHENSIVE DOT COMPLIANCE REVIEW",
    description:
      "The Comprehensive DOT Compliance Review Offers An Accurate Assessment Of Your Compliance Posture As Well As Actionable Advice For Improvement. You Have Access To Experts Who Are Trained To Understand The Complex Regulations That Affect Your Fleet.",
    points: [
      "Companies That Need 100% Clarity To Current Exposure",
      "Due Diligence During An Ownership Change",
      "Preparation For A Real Compliance Review",
    ],
  },
];

const HomeServices = () => {
  return (
    <section className="w-full py-10 px-5 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold text-center mb-14"
      >
        Our Services
      </motion.h2>

      <div className="space-y-16 mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-stretch gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left Box (70%) */}
            <div className="md:w-7/10 w-full bg-transparent rounded-xl border border-white p-6 flex">
              {/* Passage */}
              <div className="w-1/2 pr-6">
                <p className="text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
              {/* Divider */}
              <div className="w-px bg-white/75"></div>
              {/* Points */}
              <div className="w-1/2 pl-6 flex flex-col justify-center items-center">
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Box (30%) */}
            <div className="md:w-3/10 w-full bg-transparent rounded-xl border border-white p-6 flex flex-col justify-between">
              {/* Horizontal line */}
              <div className="w-full h-px bg-white/75 mt-10"></div>
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-center">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
