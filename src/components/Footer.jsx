import React from "react";
import { COMPANY_INFO } from "../constants/content";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const socialIcons = [
    {
      name: "Facebook",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      link: COMPANY_INFO.socials.facebook,
    },
    {
      name: "Twitter",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      link: COMPANY_INFO.socials.twitter,
    },
    {
      name: "LinkedIn",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      link: COMPANY_INFO.socials.linkedin,
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative overflow-hidden transition-colors">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-3 mb-6 group inline-flex"
            >
              <img
                src={
                  theme === "dark" ? "/medsky_logo4.png" : "/medsky_logo5.png"
                }
                alt="MedSky Logo"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900 dark:text-white transition-colors">
                MedSky
                <span className="text-teal-500 dark:text-teal-400 transition-colors">
                  .
                </span>
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-lg pr-4 lg:pr-20 mb-6 font-light transition-colors">
              Empowering healthcare facilities with modern, high-speed, and
              secure management solutions for the digital age.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6 transition-colors">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Features", "Pricing", "FAQ", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6 transition-colors">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <p className="text-gray-500 text-sm transition-colors">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-teal-500/20 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/30 transition-all"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
