import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroImg from "../assets/team/arun-prakash-I9Q57EFcSAA-unsplash (1).jpg";
import myLogo from "../assets/logo/logo.png";

export default function HeroWithAnnouncement() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation();

  const title = t("hero.title"); // Full title from translations
  const specialWord = "லயரிதம்"; // Word to make bigger

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.section className="relative overflow-hidden min-h-screen md:pt-16 lg:pt-20">
        {/* Hero background */}
        <motion.div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-4">
          <motion.img src={myLogo} alt="Logo" className="w-24 mb-6" />

          <motion.h1 className="hero-display font-extrabold mb-6 tracking-wide text-center">
            {title.split(specialWord).map((part, index, arr) => (
              <React.Fragment key={index}>
                {part}
                {index < arr.length - 1 && (
                  <motion.span
                    className="text-6xl md:text-8xl font-extrabold inline-block"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    {specialWord}
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p className="text-lg md:text-2xl mb-8 max-w-2xl">
            {t("hero.subtitle")}
          </motion.p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/apply" className="btn-primary text-lg px-10 justify-center">
              {t("hero.cta")}
            </Link>
          </motion.div>
        </div>

        {/* Floating musical icons */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute bottom-16 left-20 text-white/40 text-4xl"
              animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute top-24 right-24 text-white/40 text-4xl"
              animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              ♫
            </motion.div>
          </>
        )}
      </motion.section>
    </div>
  );
}
