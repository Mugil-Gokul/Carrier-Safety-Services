import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Production Online has helped me become a better musician and producer than I ever thought possible.",
    name: "Kyle Weznick",
    role: "Media Director, Turn Around Music Group",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Working with this team completely changed the way we manage compliance and safety operations.",
    name: "Michael Brown",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Their support and professionalism helped us scale faster while staying fully compliant.",
    name: "Sarah Johnson",
    role: "Fleet Coordinator",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

const AboutTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative w-full overflow-hidden py-14 px-5">

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto bg-[#f4f4f4] rounded-[30px] px-6 md:px-10 py-8 md:py-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-[#111] text-3xl md:text-5xl font-light leading-tight">
                From our
              </h2>

              <h2 className="text-[#111] text-4xl md:text-6xl font-bold leading-tight">
                community.
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-7 mt-6 max-w-md">
                Here’s what other subscribers had to say about Production
                Online.
              </p>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black text-lg bg-white"
              >
                <FaArrowLeft />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black text-lg bg-white"
              >
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#1b2d8d] text-3xl mb-5" />

                {/* Quote */}
                <h3 className="text-[#111] text-2xl md:text-4xl font-medium leading-[1.5] max-w-2xl">
                  “{testimonials[activeIndex].quote}”
                </h3>

                {/* User */}
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-[#111] text-lg font-semibold">
                      {testimonials[activeIndex].name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutTestimonials;