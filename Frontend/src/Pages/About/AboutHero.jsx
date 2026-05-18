import React from 'react'
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="w-full px-5 py-10">
      {/* Outer Border Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto border border-white rounded-2xl p-4 sm:p-6 lg:p-8"
      >
        {/* Inner White Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#efefef] rounded-xl min-h-[420px] flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16"
        >
          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm font-normal tracking-[0.08em] mb-8"
          >
            ABOUT
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
            className="text-black text-[2.2rem] sm:text-[3rem] md:text-[4rem] font-medium leading-tight mb-4 max-w-3xl"
          >
            Transforming logistics for a safer tomorrow
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
            className="max-w-3xl text-black/90 text-sm sm:text-base md:text-2xl leading-relaxed tracking-wide font-light"
          >
            Carrier Safety Logistics is dedicated to building a safer future by
            enhancing logistics operations with innovative solutions that
            prioritize safety, efficiency, and reliability every step of the way.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutHero
