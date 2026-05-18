import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Comprehensive DOT Compliance Review",
    description:
      "The Comprehensive DOT Compliance Review offers an accurate assessment of your compliance posture as well as actionable advice for improvement. You have access to experts who are trained to understand the complex regulations that affect your fleet.",
  },
  {
    title: "On-Site Training",
    description:
      "You have access to on-site training for employees and/or supervisors that are designed to help you maintain compliance and improve your operations. Our master trainers can provide big advantages for larger fleets by offering some training to supervisors, certifying them to train staff themselves.",
  },
  {
    title: "Fleet Safety Managed Services Program",
    description:
      "Our managed services program provides you with actionable advice and resources developed by experts in safety and compliance. Ongoing support helps you address safety issues specific to your operation and gives you the insights and tools you need to deal with complex and ever-changing regulatory requirements.",
  },
  {
    title: "Enhanced Consultative Services Program",
    description:
      "Everything provided in our managed services program, with added consultative support and resources for businesses with urgent compliance needs.",
  },
  {
    title: "DOT Audit Management, Fine Negotiation, and Ratings Upgrades",
    description:
      "The staff of CSS can review your FMCSA / DOT audit prior to a rating being issued to ensure that only valid violations are recorded. Our staff is also available to manage your FMCSA / DOT audit and interface with the FMCSA investigators during the auditing process to help mitigate the negative impact of an FMCSA / DOT compliance review.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const ServiceListing = () => {
  return (
    <section className="relative overflow-hidden">
      
      <div className="relative mx-auto px-4 sm:px-5 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
          
          {/* ================= LEFT STATIC SECTION ================= */}
          <div className="relative">
            
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-start pt-8 sm:pt-10 lg:pt-24">
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full"
              >
                
                {/* Heading */}
                <h2 className="text-white text-[38px] sm:text-[48px] md:text-[56px] leading-[0.95] font-medium text-center lg:text-left">
                  Our Services
                </h2>

                {/* Description */}
                <p className="mt-6 sm:mt-8 text-white/90 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.9] uppercase tracking-[0.06em] md:tracking-[0.08em] max-w-full lg:max-w-[260px] text-center lg:text-left">
                  We provide comprehensive logistics solutions,
                  tailored to meet your unique needs. From
                  warehousing to transportation, we ensure
                  seamless and efficient supply chain management.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT SCROLLING SECTION ================= */}
          <div className="py-10 sm:py-14 lg:py-24 flex flex-col gap-10 sm:gap-14 lg:gap-20">
            
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className="relative border border-white/25 rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] p-4 sm:p-5 md:p-7 backdrop-blur-sm"
              >
                
                <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-6 sm:gap-8 items-center">
                  
                  {/* Placeholder Box */}
                  <div className="border border-white/30 rounded-[22px] sm:rounded-[28px] h-[220px] sm:h-[250px] md:h-[290px]" />

                  {/* Content */}
                  <div>
                    
                    {/* Title */}
                    <h3 className="text-white text-[24px] md:text-[30px] leading-[1.1] font-serif font-medium text-center md:text-left">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 sm:mt-6 text-white/85 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.9] uppercase tracking-[0.04em] md:tracking-[0.06em] text-center md:text-left">
                      {service.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceListing;