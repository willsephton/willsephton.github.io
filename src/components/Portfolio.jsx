import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "ML Document Comprehension",
    subtitle: "AI-driven system for extracting structured information from documents.",
    link: "https://github.com/willsephton/Masters-Dissertation-Prototype",
    image: "/images/doc-comprehension.png",
  },
  {
    name: "PathProtector Android Application",
    subtitle: "GPS safety tracking app with live route monitoring.",
    link: "https://play.google.com/store/apps/details?id=app.willsephton.pathprotector",
    image: "/images/pathprotector.png",
  },
  {
    name: "PathProtector API and Dashboard",
    subtitle: "Web dashboard and REST API backend for PathProtector app.",
    link: "https://github.com/willsephton/PathProtectorAPI",
    image: "/images/pathprotector-api.png",
  },
  {
    name: "Stock Prediction",
    subtitle: "Streamlit app predicting stock trends using ML models.",
    link: "https://stockprediction-2025-willsephton.streamlit.app/",
    image: "/images/stock-prediction.png",
  },
  {
    name: "AI Restaurant Chatbot",
    subtitle: "Natural Language chatbot for restaurant ordering and reservations.",
    link: "https://pastalavistabot.streamlit.app/",
    image: "/images/restaurant-chatbot.png",
  },
  {
    name: "Task Manager built with Ruby",
    subtitle: "Created to learn and experiment with Ruby on Rails and PostgreSQL",
    link: "https://ruby-on-rails-taskmanager-production.up.railway.app/",
    image: "/images/rubyonrails.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="bg-black text-white flex flex-col items-center px-6 py-20"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Recent Projects
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          A selection of my latest AI, Android, and web applications — blending
          intelligent systems, real-time data, and modern design.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden 
              shadow-lg hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between h-44">
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {proj.name}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">
                  {proj.subtitle}
                </p>
              </div>
              <span className="mt-3 text-sm text-pink-500 group-hover:text-pink-400 transition-colors duration-300">
                View project →
              </span>
            </div>

            {/* Glow Border on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 
              transition-opacity duration-500 bg-gradient-to-r 
              from-pink-500 via-purple-500 to-blue-500 blur-xl rounded-2xl pointer-events-none">
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-8 mt-10 text-zinc-500 text-sm border-t border-zinc-800">
        © {new Date().getFullYear()} William Sephton
      </footer>
    </section>
  );
}
