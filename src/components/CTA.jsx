import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-white dark:bg-[#020617] relative transition-colors">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden glass-card p-1 text-center"
        >
          {/* Animated Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 rounded-3xl opacity-50 blur-[2px] z-0 animate-pulse-glow"></div>

          <div className="relative bg-gray-50 dark:bg-[#050b1a] transition-colors rounded-[22px] p-12 md:p-20 z-10 border border-gray-200 dark:border-teal-500/20 backdrop-blur-xl">
            {/* Background elements inside CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>

            <motion.h2
              className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight relative z-20 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Transform Your{" "}
              <span className="text-teal-600 dark:text-teal-400 transition-colors">
                Hospital
              </span>{" "}
              <br className="hidden md:block" /> Today
            </motion.h2>

            <motion.p
              className="text-gray-600 dark:text-gray-300 text-xl font-light max-w-2xl mx-auto mb-10 relative z-20 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Join hundreds of top-tier medical facilities elevating their
              patient experience.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {/* <a 
                href="#contact" 
                className="glow-button w-full sm:w-auto bg-teal-500 hover:bg-teal-600 dark:hover:bg-teal-400 text-white dark:text-[#020617] px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.5)]"
              >
                Book Free Demo
              </a> */}
              <a
                href="#contact"
                className="w-full sm:w-auto glass border-teal-500/30 hover:bg-teal-50 dark:hover:bg-teal-500/10 text-teal-600 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Contact Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
