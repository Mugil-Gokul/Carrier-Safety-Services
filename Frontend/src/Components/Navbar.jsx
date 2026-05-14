import React, { useState, useEffect } from "react";
import logo from "../assets/CSS.webp";

const Navbar = () => {

  return (
    <div className="sticky top-0 left-0 w-full p-5 z-50">
      <div className="max-w-7xl mx-auto bg-white/25 h-[80px] rounded-xl border border-white/40 flex items-center justify-between px-8">
        <img src={logo} alt="Logo" className="w-[200px]" />

        <div className="flex gap-10 text-white">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        <button className="bg-red-500 text-white px-6 py-3 rounded-full">
          Send Request
        </button>
      </div>
    </div>
  );
};

export default Navbar;
