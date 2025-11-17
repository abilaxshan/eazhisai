import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import FeatureCard from "./FeatureCard";
import musicNotes from "../assets/music-notes.json";
import voicemail from "../assets/Voicemail.json";
import bgImage from "../assets/bg/music-bg.png"; // 🎵 Background image
import "@fontsource/space-grotesk/700.css"; // Bold weight

export default function Features() {
  const { t } = useTranslation();
  const featureContent = t("features.items", { returnObjects: true }) || [];
  const featureIcons = ["🎓", "🎛️"];
  const features = featureContent.map((item, idx) => ({
    icon: featureIcons[idx] || "🎵",
    ...item,
  }));

  return (
    <section
      className="relative overflow-hidden py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Background floating animation */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-40 w-72 md:w-96 pointer-events-none">
        <Lottie animationData={musicNotes} loop={true} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* Animated Gradient Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-5xl md:text-6xl font-extrabold mb-4 md:mb-0 text-center drop-shadow-xl font-space-grotesk
                       bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500
                       bg-clip-text text-transparent animate-gradient-x"
          >
            {t("features.heading")}
          </motion.h2>

          {/* Right-side Lottie Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="w-20 md:w-28 lg:w-32"
          >
            <Lottie animationData={voicemail} loop={true} />
          </motion.div>
        </motion.div>

        {/* Feature Cards Section */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <FeatureCard icon={item.icon} title={item.title}>
                {item.text}
              </FeatureCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
