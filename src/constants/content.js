import React from "react";
import {
  Stethoscope,
  FileText,
  ClipboardList,
  MonitorSmartphone,
  Pill,
  Activity,
  TestTube,
  CreditCard,
  ShieldCheck,
  Syringe,
  Store,
  Calculator,
  UploadCloud,
} from "lucide-react";

export const COMPANY_INFO = {
  name: "MedSky Healthcare",
  shortDesc:
    "Simplifying Healthcare Solutions For Hospitals, Clinics, Pharmacies, and Laboratories.",
  heroTitle: "HEALTHCARE AT YOUR DESK!!",
  email: "support@medsky.in",
  phone: "+91 7418 8844 18 / +91 7418 8844 19",
  address: "Medsky Healthcare",
  socials: {
    facebook: "https://www.facebook.com/bbmhealthcare",
    twitter: "https://x.com/bbm_healthcare",
    linkedin: "https://www.linkedin.com/in/boomingbiomedicals/",
    instagram: "#",
  },
};

export const ABOUT_CONTENT = {
  subtitle: "Who We Are",
  title: "Transforming Clinics With Digital Power",
  description:
    "MedSky Healthcare brings a million-dollar SaaS experience to your clinic. We streamline patient management, billing, and pharmacy operations into one ultra-fast, intelligent system. Designed specifically for modern healthcare providers who value speed, accuracy, and patient satisfaction.",
  benefits: [
    "Paperless workflows",
    "Lightning-fast performance",
    "Enterprise-grade security",
    "Intuitive for all staff",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
};

export const FEATURES = [
  {
    id: "opd",
    title: "OPD",
    description: "Streamlined out-patient workflow for modern hospitals.",
    icon: Stethoscope,
  },
  {
    id: "appointment",
    title: "Appointment",
    description: "Smart scheduling with automated gentle reminders.",
    icon: ClipboardList,
  },
  {
    id: "eprescription",
    title: "E-Prescription",
    description: "Quick, legible, and error-free digital prescriptions.",
    icon: FileText,
  },
  {
    id: "token",
    title: "Token Display",
    description: "Real-time visual queue management for waiting areas.",
    icon: MonitorSmartphone,
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description: "Comprehensive inventory and automated dispensing.",
    icon: Pill,
  },
  {
    id: "ipd",
    title: "IPD",
    description: "In-patient department tracking and ward management.",
    icon: Activity,
  },
  {
    id: "lab",
    title: "Lab",
    description: "Integrated laboratory reporting and diagnostics.",
    icon: TestTube,
  },
  {
    id: "billing",
    title: "Billing",
    description: "Transparent, rapid, and accurate financial processing.",
    icon: CreditCard,
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Seamless claim processing and insurance verification.",
    icon: ShieldCheck,
  },
  {
    id: "surgery",
    title: "Surgery",
    description: "Operation theater scheduling and post-op tracking.",
    icon: FileText,
  },
  {
    id: "immunization",
    title: "Immunization",
    description: "Automated vaccination schedules and digital alerts.",
    icon: Syringe,
  },
  {
    id: "store",
    title: "Store",
    description: "Centralized medical supply and equipment tracking.",
    icon: Store,
  },
  {
    id: "accounts",
    title: "Accounts",
    description: "End-to-end accounting tailored for healthcare.",
    icon: Calculator,
  },
  {
    id: "cloud",
    title: "Cloud Backup",
    description: "Bank-level encryption and automated data backups.",
    icon: UploadCloud,
  },
];

export const STATS = [
  { id: 1, value: 500, suffix: "+", label: "Clinics Served" },
  { id: 2, value: 2, suffix: "M+", label: "Patients Managed" },
  { id: 3, value: 99.9, suffix: "%", label: "Accuracy Rate" },
  { id: 4, value: 24, suffix: "/7", label: "Support" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Automation",
    desc: "Reduce administrative work by 70% with smart workflows.",
  },
  {
    title: "Accuracy",
    desc: "Eliminate human errors in billing and prescriptions.",
  },
  {
    title: "Faster Workflows",
    desc: "Serve more patients without compromising on quality.",
  },
  {
    title: "Paperless System",
    desc: "Go green with fully digitized records and reports.",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What makes MedSky different from other healthcare platforms?",
    answer:
      "MedSky combines hospital, clinic and pharmacy workflows into one intelligent dashboard with premium automation, secure data, and a beautiful experience designed for faster day-to-day operations.",
  },
  {
    id: "faq-2",
    question: "Can MedSky scale as my clinic grows?",
    answer:
      "Yes. MedSky is built to grow with your practice — it supports multi-specialty clinics, pharmacies, laboratories, and hospital departments without adding complexity.",
  },
  {
    id: "faq-3",
    question: "How quickly can we start using it?",
    answer:
      "Implementation is designed to be fast. Your team can start using core modules within a few days, with guided onboarding and seamless data migration support.",
  },
  {
    id: "faq-4",
    question: "What does support look like after onboarding?",
    answer:
      "You get ongoing support, regular updates, and a dedicated team to help keep your workflows optimized and your staff confident in the system.",
  },
];
