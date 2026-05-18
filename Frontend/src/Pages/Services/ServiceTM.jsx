import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Gauge,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Unlimited carrier connectivity",
    description:
      "300+ carrier products at your disposal.",
  },
  {
    icon: Gauge,
    title: "High performance",
    description:
      "Book transport faster with industry-leading response time of 200ms.",
  },
  {
    icon: LayoutGrid,
    title: "Easy management",
    description:
      "Manage and track all your delivery orders in one dashboard.",
  },
  {
    icon: Sparkles,
    title: "Automated booking rules",
    description:
      "Choose the best carrier product for specific types of orders, always.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const ServiceTM = () => {
  return (
    <section className="relative w-full py-10 sm:py-12 md:py-14 px-4 sm:px-5 overflow-hidden">
      
      {/* Outer Border */}
      <div className="relative max-w-7xl mx-auto border border-white/25 rounded-[22px] md:rounded-[28px] p-3 sm:p-4 md:p-5">
        
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#F4F4F4] rounded-[24px] md:rounded-[30px] px-5 sm:px-8 md:px-14 py-10 sm:py-14 md:py-20"
        >
          
          {/* Heading */}
          <div className="max-w-[420px] mx-auto text-center">
            
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-[#111111] text-[34px] sm:text-[44px] md:text-[54px] leading-[0.95] font-serif font-medium tracking-[-0.03em]"
            >
              Transport
              <br />
              Management
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-5 text-[#222] text-[14px] sm:text-[15px] leading-[1.6] font-normal px-2 sm:px-0"
            >
              Cut transportation costs with a single TMS for
              booking and managing all your delivery orders,
              regardless of the scale of your operations.
            </motion.p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-8 md:gap-x-10 mt-14 sm:mt-20 md:mt-24">
            
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="max-w-full sm:max-w-[220px] mx-auto lg:mx-0 text-center sm:text-left"
                >
                  
                  {/* Icon */}
                  <div className="mb-5 flex justify-center sm:justify-start">
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[#5A2CA0]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#111111] text-[18px] sm:text-[20px] leading-[1.2] font-medium">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[#555] text-[14px] leading-[1.6]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTM;