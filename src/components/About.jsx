import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../constants/content';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src={ABOUT_CONTENT.imageUrl} 
                alt="Clinic Management" 
                className="rounded-xl w-full h-[500px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl backdrop-blur-xl border-teal-500/30 z-20 shadow-2xl flex items-center gap-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <span className="text-teal-400 font-bold text-2xl">#1</span>
                </div>
                <div>
                  <p className="text-white font-bold leading-tight">Top Rated</p>
                  <p className="text-gray-400 text-sm">Healthcare SaaS</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-teal-400 font-semibold tracking-wider uppercase mb-2 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-teal-400"></span>
              {ABOUT_CONTENT.subtitle}
            </h4>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {ABOUT_CONTENT.title}
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
              {ABOUT_CONTENT.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {ABOUT_CONTENT.benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-teal-400" />
                  </div>
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="glow-button self-start glass border-teal-500/30 hover:bg-teal-500/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover How It Works
              <span className="group-hover:translate-x-1 group-hover:text-teal-400 transition-all">→</span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
