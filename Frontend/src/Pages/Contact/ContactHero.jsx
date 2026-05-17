import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
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
          className="bg-[#efefef] rounded-xl min-h-[380px] flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14"
        >
          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm tracking-[0.12em] mb-6 text-left"
          >
            CONTACT US
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
            className="text-black text-[2rem] sm:text-[2.8rem] md:text-[3.8rem] font-semibold leading-tight max-w-4xl text-left mb-6"
          >
            Let’s connect and build safer logistics solutions together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
            className="max-w-2xl text-black/80 text-sm sm:text-base md:text-lg leading-relaxed font-light text-left"
          >
            Reach out to our team for compliance support, safety solutions,
            transportation guidance, and logistics consultation tailored to your
            business needs.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;