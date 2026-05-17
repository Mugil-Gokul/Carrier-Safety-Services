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
  }
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
      <div className="relative mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
          
          {/* LEFT STATIC SECTION */}
          <div className="relative">
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-start pt-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-white text-[42px] md:text-[56px] leading-[0.95] font-semibold tracking-[-0.03em]">
                  Our Services
                </h2>

                <p className="mt-8 text-white/90 text-[14px] md:text-[15px] leading-[1.9] uppercase tracking-[0.08em] max-w-[260px]">
                  We provide comprehensive logistics solutions,
                  tailored to meet your unique needs. From
                  warehousing to transportation, we ensure
                  seamless and efficient supply chain management.
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE SCROLLING CONTENT */}
          <div className="py-24 flex flex-col gap-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className="relative border border-white/25 rounded-[34px] p-5 md:p-7 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-8 items-center">
                  
                  {/* Left Placeholder Box */}
                  <div className="border border-white/30 rounded-[28px] h-[250px] md:h-[290px]" />

                  {/* Content */}
                  <div>
                    <h3 className="text-white text-[28px] md:text-[36px] leading-[1.08] font-medium tracking-[-0.02em]">
                      {service.title}
                    </h3>

                    <p className="mt-6 text-white/85 text-[14px] md:text-[15px] leading-[1.9] uppercase tracking-[0.06em]">
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