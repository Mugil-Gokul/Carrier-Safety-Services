import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFax,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 sm:py-10 px-4 sm:px-5 overflow-hidden">
      
      {/* Main White Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto bg-[#efefef] rounded-[22px] md:rounded-[28px] p-4 sm:p-5 md:p-8 shadow-xl"
      >
        
        {/* ================= TOP BLUE CONTAINER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#2f6faa] rounded-2xl px-5 sm:px-6 md:px-8 py-8 sm:py-10"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            
            {/* ================= OFFICE HOURS ================= */}
            <div className="text-center md:text-left">
              
              <h3 className="text-white text-xl font-serif font-medium tracking-wider mb-5">
                Office Hours
              </h3>

              <p className="text-white/95 text-sm sm:text-[15px] leading-7 font-medium">
                600 Matheson Blvd W Unit 5,
                <br />
                Mississauga, ON, L5R 4C1
              </p>

              <p className="text-white font-semibold mt-6 text-sm sm:text-[15px]">
                Monday - Friday: 9:00 - 5:00
              </p>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div className="text-center md:text-left">
              
              <h3 className="text-white text-xl font-serif font-medium tracking-wider mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Contact", path: "/contact" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 8 }}
                    className="transition-all duration-300"
                  >
                    <Link
                      to={item.path}
                      className="text-white text-sm sm:text-[15px] tracking-wide hover:text-white/80"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="text-center md:text-left">
              
              <h3 className="text-white text-xl font-serif font-medium tracking-wider mb-5">
                Contact Us
              </h3>

              <div className="space-y-4">
                
                <div className="flex items-center justify-center md:justify-start gap-3 text-white text-sm sm:text-[15px]">
                  <FaEnvelope className="text-[13px] shrink-0" />
                  <span className="break-all">
                    info@carriersafetyservices.com
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-white text-sm sm:text-[15px]">
                  <FaPhoneAlt className="text-[13px] shrink-0" />
                  <span>+1-647-237-0799</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-white text-sm sm:text-[15px]">
                  <FaPhoneAlt className="text-[13px] shrink-0" />
                  <span>+1-647-483-0155</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 text-white text-sm sm:text-[15px]">
                  <FaFax className="text-[13px] shrink-0" />
                  <span>+1-647-483-0156</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= COMPANY NAME ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center my-8 sm:my-10 leading-none"
        >
          
          {/* Carrier */}
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-black text-[#ff3131] tracking-wide md:tracking-wider uppercase">
            Carrier
          </h2>

          {/* Safety Services */}
          <h3 className="text-[1rem] sm:text-[1.5rem] md:text-[2rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] text-black -mt-2 sm:-mt-4 md:-mt-6">
            Safety Services
          </h3>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/40"></div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-6">
          
          {/* Copyright */}
          <p className="text-sm md:text-base text-gray-700 font-medium text-center md:text-left">
            © 2026 Carrier Safety Services. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {[
              {
                icon: FaFacebookF,
                link: "https://facebook.com",
              },
              {
                icon: FaInstagram,
                link: "https://instagram.com",
              },
              {
                icon: FaLinkedinIn,
                link: "https://linkedin.com",
              },
              {
                icon: FaTwitter,
                link: "https://twitter.com",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-[#2f6faa] flex items-center justify-center text-white cursor-pointer shadow-md"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;