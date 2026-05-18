import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "COMPREHENSIVE DOT COMPLIANCE REVIEW",
    description:
      "The Comprehensive DOT Compliance Review Offers An Accurate Assessment Of Your Compliance Posture As Well As Actionable Advice For Improvement. You Have Access To Experts Who Are Trained To Understand The Complex Regulations That Affect Your Fleet.",
    points: [
      "Companies That Need 100% Clarity To Current Exposure",
      "Due Diligence During An Ownership Change",
      "Preparation For A Real Compliance Review",
    ],
  },
  {
    title: "On-Site Training",
    description:
      "You have access to on-site training for employees and/or supervisors that are designed to help you maintain compliance and improve your operations. Our master trainers can provide big advantages for larger fleets by offering some training to supervisors, certifying them to train staff themselves.",
    points: [
      "Defensive Driving Training",
      "Load Securement",
      "Alcohol & Controlled Substance Testing Requirements",
      "Roadside Inspections",
      "Vehicle Maintenance Files",
      "Drug & Alcohol, Driver Handbook, and Policy Review/Rewrite",
      "Pre & Post Trip Inspection",
      "Hours of Service",
    ],
  },
  {
    title: "Fleet Safety Managed Services Program",
    description:
      "Our managed services program provides you with actionable advice and resources developed by experts in safety and compliance. Ongoing support helps you address safety issues specific to your operation and gives you the insights and tools you need to deal with complex and ever-changing regulatory requirements.",
    points: [
      "Dedicated Account Management",
      "Document and Registration Services",
      "Access to Expert Resources",
      "Hours of Service Auditing",
      "Driver Qualification File Maintenance",
      "Drug and Alcohol Program Oversight",
      "Maintenance File Reviews",
      "Roadside Inspection & Accident Reviews",
      "Online Driver Management Tools",
    ],
  },
  {
    title: "Enhanced Consultative Services Program",
    description:
      "Everything provided in our managed services program, with added consultative support and resources for businesses with urgent compliance needs.",
    points: [
      "Companies who need extra consultative support",
      "Companies that need to raise safety ratings fast",
      "Companies dealing with urgent safety issues",
      "Companies looking to overhaul their existing compliance stature",
      "Companies wanting on-site implementation",
      "Companies who aren’t in the trucking business but, need trucks to do their business",
    ],
  },
  {
    title: "DOT Audit Management, Fine Negotiation, and Ratings Upgrades",
    description:
      "The staff of CSS can review your FMCSA / DOT audit prior to a rating being issued to ensure that only valid violations are recorded. Our staff is also available to manage your FMCSA / DOT audit and interface with the FMCSA investigators during the auditing process to help mitigate the negative impact of an FMCSA / DOT compliance review.",
    points: [
      "Companies currently under compliance review",
      "Companies who need to develop a safety management plan and increase their safety rating",
      "Companies that have been fined",
    ],
  },
];

const HomeServices = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-5 text-white overflow-hidden">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[32px] sm:text-[40px] md:text-5xl font-medium tracking-wider text-center mb-10 md:mb-14"
      >
        Our Services
      </motion.h2>

      {/* Services */}
      <div className="space-y-8 md:space-y-16 mx-auto">
        
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-stretch gap-5 md:gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            
            {/* LEFT BOX */}
            <div className="md:w-[70%] w-full bg-transparent rounded-2xl border border-white/30 p-5 sm:p-6 md:p-7 flex flex-col md:flex-row">
              
              {/* Description */}
              <div className="md:w-1/2 w-full md:pr-6">
                <p className="text-[13px] sm:text-[14px] md:text-base leading-relaxed md:leading-8 text-white/90">
                  {service.description}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-white/30 mx-2"></div>

              {/* Mobile Divider */}
              <div className="block md:hidden w-full h-px bg-white/20 my-6"></div>

              {/* Points */}
              <div className="md:w-1/2 w-full md:pl-6 flex flex-col justify-center">
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13px] sm:text-[14px] md:text-base leading-relaxed text-white/90"
                    >
                      <span className="mt-[7px] w-2 h-2 rounded-full bg-white shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT BOX */}
            <div className="md:w-[30%] w-full bg-transparent rounded-2xl border border-white/30 p-5 sm:p-6 md:p-7 flex flex-col justify-between min-h-[220px] md:min-h-auto">
              
              {/* Top Line */}
              <div className="w-full h-px bg-white/30 mt-2 md:mt-10"></div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[20px] md:text-xl font-medium font-serif text-center uppercase leading-snug tracking-wide py-8 md:py-0">
                {service.title}
              </h3>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;