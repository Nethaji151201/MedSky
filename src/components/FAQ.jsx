import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "../constants/content";

export default function FAQ() {
  const [activeId, setActiveId] = useState(FAQ_ITEMS[0]?.id || null);

  return (
    <section
      id="faq"
      className="py-24 bg-slate-50 dark:bg-[#040c1d] transition-colors"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center justify-center rounded-full bg-teal-100/70 dark:bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 tracking-[0.25em] uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Answers that simplify your MedSky decision.
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-8">
            Explore key concerns with elegant clarity and premium motion, built
            for modern healthcare buyers.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-1">
          {FAQ_ITEMS.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="overflow-hidden rounded-[28px] border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-950/85 shadow-[0_35px_80px_-45px_rgba(16,185,129,0.5)] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left align-items-center"
                >
                  <div>
                    <h3 className="text-lg md:text-lg font-semibold text-slate-950 dark:text-white">
                      {item.question}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 dark:bg-teal-400/10 dark:text-teal-300 cursor-pointer"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="border-t border-slate-200/80 dark:border-white/10 px-6 pb-6"
                    >
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
