import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className="w-full px-5 py-10">
      {/* Outer Border Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto border border-white bg-white/30 rounded-2xl p-4 sm:p-6 lg:p-8"
      >
        {/* Inner White Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#efefef] rounded-[22px] min-h-[420px] flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-black text-[2.2rem] sm:text-[3rem] md:text-[4rem] font-light tracking-[0.08em] mb-8"
            // style={{
            //   fontFamily: "'Courier New', monospace",
            // }}
          >
            Get In Touch
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
            className="max-w-4xl text-black/90 text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.08em] font-medium"
          >
            Maintaining Compliance When You Have A Fleet Is Tough. Most
            Businesses Struggle To Keep Up To Date With Constantly Changing DOT
            Compliance Requirements. The Result Is An Increased Risk Of
            Consequences, Litigation, Or Lost Revenue Due To A Shutdown.
            National Transportation Consultants Helps You Identify Your
            Problems, Fix Them, And Manage DOT Compliance With All The Tools You
            Need To Eliminate Risk In Your Business. With CSS You’ll Never Feel
            Alone. We’ll Be With You Every Step Of The Way.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ff4d4d",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mt-14 border border-[#ff5a5a] text-[#ff5a5a] px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
          >
            Send A Request
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;