import React from "react";
import { motion } from "framer-motion";

const ServiceIntro = () => {
  return (
    <section className="w-full text-gray-600 py-10 sm:py-12 md:py-16 px-4 sm:px-5">
      
      {/* Container */}
      <div className="text-center border border-gray-200 bg-white w-full rounded-2xl md:rounded-xl px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-sm">
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[14px] sm:text-[15px] md:text-lg leading-7 sm:leading-8 tracking-wide max-w-5xl mx-auto"
        >
          Our roots are in transportation, and we continue to offer
          innovative transportation solutions for our customers globally.
          This includes award-winning products like OceanGuaranteed™,
          designed to provide a cost-effective option for time-definite
          freight. Transportation products play a critical role in our
          Order Management, Customs and Trade Compliance, and Distribution
          solutions, and are often integrated into a customer’s larger
          network. Our transportation and solutions offer competitive
          pricing and innovative design, seamlessly integrated into your
          customized solution.
        </motion.p>

      </div>
    </section>
  );
};

export default ServiceIntro;