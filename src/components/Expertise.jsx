import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaAndroid, FaCode, FaDatabase, FaRobot, FaChartLine } from "react-icons/fa";

const skills = [
  { icon: <FaBrain className="text-pink-400 text-3xl" />, title: "Machine Learning", desc: "Deep learning, NLP, and computer vision model development." },
  { icon: <FaAndroid className="text-green-400 text-3xl" />, title: "Android Development", desc: "Building intuitive and intelligent mobile applications in Kotlin." },
  { icon: <FaCode className="text-blue-400 text-3xl" />, title: "Full-Stack Development", desc: "Integrating APIs, React front-ends, and Python back-ends." },
  { icon: <FaDatabase className="text-purple-400 text-3xl" />, title: "Data Engineering", desc: "Designing efficient data pipelines and handling structured data." },
  { icon: <FaRobot className="text-yellow-400 text-3xl" />, title: "AI Systems", desc: "Developing intelligent agents and dialogue-based systems." },
  { icon: <FaChartLine className="text-emerald-400 text-3xl" />, title: "Data Visualization", desc: "Creating visual analytics and interpretability dashboards." },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="w-full bg-black text-white py-20 flex flex-col items-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          My Expertise
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          A blend of engineering, AI research, and product design — focusing on creating intelligent, scalable, and user-focused solutions.
        </p>
      </motion.div>

      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
          >
            {skill.icon}
            <h3 className="mt-4 text-xl font-semibold">{skill.title}</h3>
            <p className="text-zinc-400 text-sm mt-2">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
