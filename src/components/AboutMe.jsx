import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="aboutsection"
      className="w-full bg-black text-white py-20 flex flex-col items-center px-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold mb-12 text-center"
      >
        About Me
      </motion.h2>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-start justify-center"
      >
        {/* Left Column - About Text */}
        <div className="flex-1 text-zinc-400 text-lg leading-relaxed text-center md:text-left">
          <p>
            I’m <span className="text-pink-400 font-medium">William Sephton</span>, an AI & Software Engineer passionate about building intelligent systems that bridge people and technology.  
            My focus spans from <span className="text-white">Natural Language Processing</span> and <span className="text-white">Computer Vision</span> to Android development and full-stack AI integration.
          </p>

          <p className="mt-4">
            I’m currently researching and developing solutions that enhance human–AI interaction and document comprehension through large-scale neural models.  
            I love creating tools that are not only functional, but elegant, scalable, and human-centred.
          </p>
        </div>

        {/* Right Column - Education */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-inner max-w-lg mx-auto md:mx-0"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center text-white">
            Education
          </h3>

          <ul className="space-y-4 text-zinc-400 text-base">
            <li>
              🎓 <span className="text-white font-medium">MSc Computer Science with Artificial Intelligence</span>  
              <br />
              <span className="text-pink-400">University of Nottingham</span>
            </li>

            <li>
              🎓 <span className="text-white font-medium">BSc (Hons) Software Engineering — First Class</span>  
              <br />
              <span className="text-pink-400">Solent University</span>
            </li>

            <li>
              ⚙️ <span className="text-white font-medium">BTEC in Electrical & Electronic Engineering</span>  
              <br />
              <span className="text-pink-400">Uxbridge College</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Download CV Button */}
      <motion.a
        href="/William_Sephton_CV.pdf" // Ensure your CV is in /public
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-12 px-8 py-3 border border-pink-500 rounded-full text-pink-400 font-medium 
                   hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-pink-500/40"
      >
        Download CV
      </motion.a>
    </section>
  );
}
