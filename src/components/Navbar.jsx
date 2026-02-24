import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)",
        transition: { duration: 0.3 },
      }}
      className={`fixed top-5 right-5 z-50 backdrop-blur-md rounded-full border border-white/10 shadow-sm 
        transition-all duration-500 ${
          scrolled ? "bg-white/10" : "bg-transparent"
        }`}
    >
      <div className="flex gap-6 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-500">
        {["about", "expertise", "projects"].map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section)}
            className="text-sm md:text-base text-zinc-300 hover:text-white transition-all duration-300 uppercase tracking-wide"
          >
            {section}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
