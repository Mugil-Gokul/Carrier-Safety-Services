import React from "react";
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="w-full text-white py-10 sm:py-12 md:py-16 px-4 sm:px-5">
      
      {/* Container */}
      <div className="text-center border border-white/30 w-full py-8 sm:py-10 md:py-12 px-5 sm:px-8 md:px-10 rounded-2xl md:rounded-xl">
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[14px] sm:text-[15px] md:text-lg leading-7 sm:leading-8 tracking-wide max-w-5xl mx-auto text-white/90"
        >
          For over 15 years, Carrier Safety Services has helped trucking and
          transportation companies maintain DOT compliance, improve fleet safety,
          and reduce operational risk. Our experienced consultants identify
          potential compliance issues before they become costly problems, helping
          businesses stay audit-ready, protect their drivers, and operate with
          confidence. We provide reliable safety solutions designed to keep your
          fleet compliant, efficient, and running smoothly every day.
        </motion.p>

      </div>
    </section>
  );
};

export default AboutIntro;