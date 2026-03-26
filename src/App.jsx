import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

// Global styles have been imported in main.jsx
export default function App() {
  const [loading, setLoading] = useState(true);

  // Initial loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#020617] min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background glow for loader */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="flex flex-col items-center z-10">
          <motion.div 
            className="w-20 h-20 rounded-full border-t-4 border-l-4 border-teal-400 relative mb-8"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border-b-4 border-r-4 border-cyan-500 opacity-50"></div>
          </motion.div>
          <motion.h1 
            className="text-2xl font-bold text-white tracking-widest uppercase flex items-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Loading MedSky<span className="text-teal-400 animate-ping">.</span>
          </motion.h1>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="font-sans text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Features />
          <WhyChoose />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
