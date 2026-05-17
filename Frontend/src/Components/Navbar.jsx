import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl h-[78px] px-5 md:px-8 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="w-[150px] md:w-[200px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-white text-[15px] font-medium transition-all duration-300 hover:text-white ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="relative group">
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}
          <Link
            to="/contact"
            className="hidden lg:flex bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-3 rounded-full text-sm font-medium items-center justify-center"
          >
            Send Request
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu
              ? "max-h-[400px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 flex flex-col gap-5">
            
            {/* Mobile Links */}
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `text-white text-base font-medium transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Button */}
            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-3 rounded-full text-sm font-medium text-center mt-2"
            >
              Send Request
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;