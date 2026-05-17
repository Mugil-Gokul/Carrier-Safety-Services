import React from 'react'
import { motion } from "framer-motion";

const ServiceIntro = () => {
  return (
    <section className="w-full text-gray-600 py-16 px-5">
      <div className="text-center border bg-white w-full py-10 rounded-xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm md:text-lg tracking-wide max-w-5xl mx-auto"
        >
          Our roots are in transportation, and we continue to offer innovative transportation solutions for our customers globally. This includes award-winning products like OceanGuaranteed™, designed to provide a cost-effective option for time-definite freight. Transportation products play a critical role in our Order Management, Customs and Trade Compliance, and Distribution solutions, and are often integrated into a customer’s larger network. Our transportation and solutions offer competitive pricing and innovative design, seamlessly integrated into your customized solution.
        </motion.p>
      </div>

    </section>
  )
}

export default ServiceIntro