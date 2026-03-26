import React, { useState, useEffect } from "react";
import { COMPANY_INFO } from "../constants/content";
import { motion } from "framer-motion";
import { Stethoscope, FileText, Pill, Activity, Download } from "lucide-react";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["CLINIC", "HOSPITAL", "PHARMACY", "LABORATORTY"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-moving-gradient transition-colors"
    >
      {/* Background Image overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053")',
        }}
      ></div>

      {/* Dark/Light Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/90 via-white/80 to-white dark:from-[#020617]/90 dark:via-[#020617]/80 dark:to-[#020617] transition-colors"></div>

      {/* Floating Elements (Parallax effect simulated with Framer Motion) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <FloatingIcon icon={Stethoscope} top="20%" left="10%" delay={0} />
        <FloatingIcon icon={FileText} top="60%" left="15%" delay={1} />
        <FloatingIcon icon={Pill} top="30%" left="80%" delay={2} />
        <FloatingIcon icon={Activity} top="70%" left="85%" delay={1.5} />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-6"
        >
          <span className="text-teal-300 font-medium tracking-wide text-sm uppercase flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            {COMPANY_INFO.name} v2.0 Live
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black heading-primary mb-6 text-gray-900 dark:text-white leading-tight transition-colors"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {COMPANY_INFO.heroTitle.replace("!!", "")}{" "}
          <br className="hidden md:block" />
          <span className="text-gradient drop-shadow-lg">
            YOUR{" "}
            <span className="inline-block min-w-[280px] text-left">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block absolute text-teal-400 glow-text"
              >
                {words[currentWordIndex]}
              </motion.span>
              <span className="invisible text-teal-400">{words[0]}</span>{" "}
              {/* Layout placeholder */}
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-light tracking-wide transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {COMPANY_INFO.shortDesc}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="glow-button bg-teal-500 hover:bg-teal-600 text-white dark:text-[#020617] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 animate-pulse-glow"
          >
            Make an Appointment
          </a>
          <a
            href="https://medsky.in/downloads/medsky-brochure-2022.pdf"
            target="_blank"
            className="glass hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 group border border-teal-500/20 dark:border-white/20 hover:border-teal-500"
          >
            <Download
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
            Download E-Brochure
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest font-semibold font-mono transition-colors">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gray-300 dark:bg-gray-600 overflow-hidden transition-colors">
          <motion.div
            className="w-full bg-teal-400"
            initial={{ height: 0, y: 0 }}
            animate={{ height: "100%", y: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div> */}
    </section>
  );
}

function FloatingIcon({ icon: Icon, top, left, delay }) {
  return (
    <motion.div
      className="absolute text-teal-500/20"
      style={{ top, left }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        delay,
        ease: "easeInOut",
      }}
    >
      <Icon size={48} strokeWidth={1} />
    </motion.div>
  );
}
