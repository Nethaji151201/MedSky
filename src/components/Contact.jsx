import React, { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { TextField, Button, ThemeProvider, createTheme } from "@mui/material";
import emailjs from "@emailjs/browser";
import { COMPANY_INFO } from "../constants/content";
import { Mail, Phone, MapPin, Section } from "lucide-react";
import SnackbarAlert from "./SnackbarAlert";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const formRef = useRef();
  const { theme } = useTheme();

  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === "dark" ? "dark" : "light",
          primary: {
            main: "#14b8a6", // Teal 500
          },
          text: {
            primary: theme === "dark" ? "#ffffff" : "#111827",
          },
        },
        typography: {
          fontFamily: '"Inter", "Poppins", sans-serif',
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.03)"
                      : "rgba(0, 0, 0, 0.02)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "& fieldset": {
                    borderColor:
                      theme === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.15)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(20, 184, 166, 0.5)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#14b8a6",
                    borderWidth: "2px",
                    boxShadow:
                      theme === "dark"
                        ? "0 0 10px rgba(20, 184, 166, 0.3)"
                        : "0 0 10px rgba(20, 184, 166, 0.1)",
                  },
                },
              },
            },
          },
        },
      }),
    [theme],
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setSnackbar({
        open: true,
        message: "Please fill out all fields.",
        severity: "error",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          toEmail: COMPANY_INFO.email,
        },
        emailjsPublicKey,
      )
      .then(() => {
        setSnackbar({
          open: true,
          message: "Message sent — we'll get back shortly.",
          severity: "success",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error", err);
        setSnackbar({
          open: true,
          message: "Failed to send — please try again.",
          severity: "error",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-[#050b1a] relative transition-colors"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-teal-600 dark:text-teal-400 font-semibold tracking-widest uppercase mb-4 block text-sm transition-colors">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Ready To Modernize?
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 bg-white dark:bg-white/5 p-8 md:p-12 rounded-[32px] border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-xl max-w-6xl mx-auto transition-colors">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left - Map */}
            <motion.div
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden glass-card p-0 border border-teal-500/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.731628635873!2d80.22021857359059!3d13.052747013097015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f23a31b543%3A0x4345a0704cf96af6!2sMedsky%20Healthcare!5e0!3m2!1sen!2sin!4v1774508006116!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden glass-card p-0 border border-teal-500/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1779192144030!5m2!1sen!2sin!6m8!1m7!1sncpB9siYG6k3qd-aKAImzg!2m2!1d11.67392104557454!2d78.23757011183469!3f344.0226418477816!4f23.81882558452243!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-light leading-relaxed transition-colors">
                Reach out to our dedicated team. We respond rapidly because your
                time is valuable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center flex-shrink-0 text-teal-600 dark:text-teal-400 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium mb-1 transition-colors">
                      Office Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center flex-shrink-0 text-teal-600 dark:text-teal-400 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium mb-1 transition-colors">
                      Phone Number
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line transition-colors">
                      {COMPANY_INFO.phone.replace(" / ", "\n")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center flex-shrink-0 text-teal-600 dark:text-teal-400 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium mb-1 transition-colors">
                      Email Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <section id="demo">
            {/* Bottom - Form */}
            <motion.div
              className="w-full border-t border-gray-200 dark:border-white/10 pt-10 mt-4 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors">
                Send Us a Message
              </h3>
              <ThemeProvider theme={muiTheme}>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      label="How can we help?"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      sx={{
                        px: 8,
                        py: 1.5,
                        borderRadius: "50px",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        textTransform: "none",
                        boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)",
                        "&:hover": {
                          backgroundColor: "#0f766e",
                          boxShadow: "0 0 30px rgba(20, 184, 166, 0.6)",
                        },
                        "&:disabled": {
                          backgroundColor: "rgba(20, 184, 166, 0.5)",
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </ThemeProvider>
            </motion.div>
          </section>
        </div>
      </div>

      <SnackbarAlert
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </section>
  );
}
