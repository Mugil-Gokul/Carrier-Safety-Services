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

const Footer = () => {
  return (
    <footer className="w-full py-10 px-5 overflow-hidden">
      {/* Main White Container */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto bg-[#efefef] rounded-[28px] p-5 md:p-8 shadow-xl"
      >
        {/* Top Blue Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#2f6faa] rounded-2xl px-8 py-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Office Hours */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-5">
                Office Hours
              </h3>

              <p className="text-white/95 text-sm leading-7 font-medium">
                600 Matheson Blvd W Unit 5,
                <br />
                Mississauga, ON, L5R 4C1
              </p>

              <p className="text-white font-semibold mt-6 text-sm">
                Monday - Friday: 9:00 - 5:00
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {["Home", "About", "Services", "Contact"].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 8 }}
                    className="text-white text-sm tracking-wide cursor-pointer transition-all duration-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-5">
                Contact Us
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white text-sm">
                  <FaEnvelope className="text-[13px]" />
                  <span>info@carriersafetyservices.com</span>
                </div>

                <div className="flex items-center gap-3 text-white text-sm">
                  <FaPhoneAlt className="text-[13px]" />
                  <span>+1-647-237-0799</span>
                </div>

                <div className="flex items-center gap-3 text-white text-sm">
                  <FaPhoneAlt className="text-[13px]" />
                  <span>+1-647-483-0155</span>
                </div>

                <div className="flex items-center gap-3 text-white text-sm">
                  <FaFax className="text-[13px]" />
                  <span>+1-647-483-0156</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center my-10 leading-none"
        >
          {/* Carrier */}
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-black text-[#ff3131] tracking-wider uppercase">
            Carrier
          </h2>

          {/* Safety Services */}
          <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2rem] font-black uppercase tracking-[0.35em] text-black -mt-4 sm:-mt-5 md:-mt-6">
            Safety Services
          </h3>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black/40"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-6">
          {/* Copyright */}
          <p className="text-sm md:text-base text-gray-700 font-medium text-center md:text-left">
            © 2026 Carrier Safety Services. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              FaFacebookF,
              FaInstagram,
              FaLinkedinIn,
              FaTwitter,
            ].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#2f6faa] flex items-center justify-center text-white cursor-pointer shadow-md"
              >
                <Icon size={16} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;