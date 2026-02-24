import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaIdCard } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

export default function Header() {
  const [typedName, setTypedName] = useState("");
  const [showCursor, setShowCursor] = useState(true); // 👈 cursor visibility
  const fullName = "William Sephton";

  useEffect(() => {
    let index = 0;

    const typeNextLetter = () => {
      if (index < fullName.length) {
        setTypedName(fullName.slice(0, index + 1));
        index++;
        setTimeout(typeNextLetter, 120);
      } else {
        // Stop showing the cursor once typing completes
        setTimeout(() => setShowCursor(false), 400);
      }
    };

    const startDelay = setTimeout(typeNextLetter, 500);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section id="about">
      <header className="flex flex-col items-center justify-center text-center bg-black text-white pt-16 pb-8 px-6">
        {/* Profile Image with Gradient Ring + Hover Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-4 group"
        >
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 group-hover:animate-glow">
            <img
              src="/images/profile-photo.jpg"
              alt="William Sephton"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-black shadow-md transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition duration-500 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500"
          />
        </motion.div>

        {/* Typing Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-1 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
            {typedName}
            {/* 👇 Only show cursor while typing */}
            {showCursor && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-1 h-5 md:h-6 bg-white ml-1 align-middle"
              ></motion.span>
            )}
          </h1>
          <p className="text-sm md:text-base text-zinc-400 mt-2">
            AI & Software Engineer
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-5 mt-6"
        >
          <a
            href="https://github.com/willsephton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-pink-400 transition"
          >
            <FaGithub className="text-base" />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="https://play.google.com/store/apps/developer?id=William+Sephton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition"
          >
            <SiGoogleplay className="text-base" />
            <span className="text-sm">Play Store</span>
          </a>

          <a
            href="https://www.linkedin.com/in/williamsephton/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-base" />
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="mailto:willsephton@gmail.com"
            className="flex items-center gap-2 text-zinc-400 hover:text-pink-400 transition"
          >
            <FaIdCard className="text-base" />
            <span className="text-sm">Contact</span>
          </a>
        </motion.div>
      </header>
    </section>
  );
}
