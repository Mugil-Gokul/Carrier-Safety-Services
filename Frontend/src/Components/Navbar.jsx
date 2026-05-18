import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/CSS.webp";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 px-4 md:px-5 pt-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        
        {/* ================= NAVBAR ================= */}
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl h-[78px] px-5 md:px-8 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          
          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center shrink-0">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={logo}
              alt="Logo"
              className="w-[150px] md:w-[200px] object-contain"
            />
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-white text-[15px] font-medium transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className="relative group">
                      {link.name}

                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </div>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* ================= DESKTOP BUTTON ================= */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:flex"
          >
            <Link
              to="/contact"
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-3 rounded-full text-sm font-medium items-center justify-center"
            >
              Send Request
            </Link>
          </motion.div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            <AnimatePresence mode="wait">
              {mobileMenu ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden mt-3"
            >
              <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 flex flex-col gap-5">
                
                {/* Mobile Links */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.3,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileMenu(false)}
                      className={({ isActive }) =>
                        `block text-white text-base font-medium transition-all duration-300 ${
                          isActive ? "opacity-100" : "opacity-80"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.3,
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenu(false)}
                    className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-3 rounded-full text-sm font-medium text-center mt-2 block"
                  >
                    Send Request
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;