import React, { useState } from "react";
import { motion } from "framer-motion";
import { FEATURES } from "../constants/content";
import { ChevronsRight } from "lucide-react";

export default function Features() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.28, ease: "easeOut" },
    },
  };

  const pointsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
  };

  const pointItem = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" },
    },
  };

  return (
    <section
      id="features"
      className="py-24 relative bg-white dark:bg-[#050b1a] overflow-hidden transition-colors"
    >
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
            Everything Your Hospitals Needs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
            Experience an all-in-one ecosystem designed for rapid workflows and
            patient-first care.
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
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-20 blur-md rounded-xl transition-all"></div>
                    <Icon size={28} className="text-teal-400" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span
                    className="text-teal-600 dark:text-teal-400 text-sm font-medium flex items-center gap-1 group/btn transition-colors"
                    onClick={() => {
                      setSelectedFeature(feature);
                      setIsOpen(true);
                    }}
                  >
                    Details
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal */}
        {isOpen && selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-2xl mx-4 md:mx-0 bg-white dark:bg-[#071027] rounded-3xl p-6 md:p-8 shadow-2xl border border-teal-200/10 z-10 overflow-hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 cursor-pointer"
                aria-label="Close details"
              >
                ✕
              </button>

              <div className="pb-4 border-b border-gray-100 dark:border-gray-800 mb-4">
                <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                  {/* Left Side - Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400/10 to-transparent flex items-center justify-center">
                    {React.createElement(selectedFeature.icon, {
                      size: 36,
                      className: "text-teal-500",
                    })}
                  </div>

                  {/* Right Side - Title & Subtitle */}
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                      {selectedFeature.title}
                    </h3>

                    {selectedFeature.subtitle && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {selectedFeature.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="prose prose-sm max-w-none dark:prose-invert text-gray-700 dark:text-gray-300 mb-6">
                {(() => {
                  const raw = selectedFeature.description || "";
                  const points = raw
                    .split("|")
                    .map((s) => s.trim())
                    .filter(Boolean);
                  if (points.length > 0) {
                    return (
                      <motion.ul
                        variants={pointsContainer}
                        initial="hidden"
                        animate="visible"
                        className="list-none space-y-3 max-h-100 overflow-y-auto pr-2"
                      >
                        {points.map((p, i) => (
                          <motion.li
                            key={i}
                            variants={pointItem}
                            className="flex items-start gap-3"
                          >
                            <ChevronsRight
                              size={18}
                              className="text-teal-400 flex-shrink-0 mt-1"
                            />
                            <span className="text-left break-words text-sm">
                              {p}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    );
                  }
                  return <p>{raw}</p>;
                })()}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    const el = document.getElementById("demo");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  Book Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
