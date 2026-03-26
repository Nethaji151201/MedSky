import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS, WHY_CHOOSE_US } from '../constants/content';

function AnimatedCounter({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(value);
      const isDecimal = value.toString().includes('.');
      const timer = setInterval(() => {
        start += end / (duration * 20); // 20 frames per second logic
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-24 relative bg-[#020617] border-y border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Stats Section with Glassmorphism floating effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24 relative z-10 -mt-36">
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="glass p-6 md:p-8 rounded-2xl border-teal-500/20 shadow-2xl bg-[#0f172a]/90 backdrop-blur-xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 text-gradient drop-shadow-lg">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose split */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-teal-400 font-semibold tracking-widest uppercase mb-4 block text-sm">
              Why MedSky
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Premium Experience For Premium Clinics
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
              We aren't just another software. We provide a competitive edge. Speed up your workflow, reduce overhead, and give your patients a modern experience they will love.
            </p>
            
            <motion.button 
              className="glow-button group relative px-8 py-4 bg-transparent border border-teal-500 text-white font-bold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-teal-500 w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-[#020617] transition-colors">See the Difference</span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-teal-500/10 hover:border-teal-500/30 transition-all cursor-default"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 mb-4 flex items-center justify-center text-[#020617] font-black glow-box">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
