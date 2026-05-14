import React from 'react'
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="w-full text-white py-16 px-5">
      <div className="text-center border border-white w-full py-10 rounded-xl">
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

    </section>
  )
}

export default AboutIntro