import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants/content';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="features" className="py-24 relative bg-white dark:bg-[#050b1a] overflow-hidden transition-colors">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-[300px] h-[300px] bg-teal-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-teal-400 font-semibold tracking-widest uppercase mb-4 block text-sm">
            Core Modules
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Everything Your Clinic Needs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
            Experience an all-in-one ecosystem designed for rapid workflows and patient-first care.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 hover:border-teal-400/50"
              >
                {/* Internal Glow Effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-20 blur-md rounded-xl transition-all"></div>
                  <Icon size={28} className="text-teal-400" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>
                
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-teal-600 dark:text-teal-400 text-sm font-medium flex items-center gap-1 group/btn transition-colors">
                    Details 
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
