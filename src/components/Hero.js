import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import heroImg from "../assets/team/arun-prakash-I9Q57EFcSAA-unsplash (1).jpg";
import myLogo from "../assets/logo/logo.png";

export default function HeroWithAnnouncement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">

  {/* Announcement is rendered at the app layout (App.js) to avoid duplicates */}

      {/* Hero Section */}
  {/* On small screens announcement is in-flow so we don't need extra top padding; keep padding for md+ where announcement is fixed */}
  <motion.section className="relative overflow-hidden min-h-screen md:pt-16 lg:pt-20">
        {/* Hero background */}
        <motion.div className="absolute inset-0">
          <img src={heroImg} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-4">
          <motion.img src={myLogo} alt="Logo" className="w-24 mb-6" />
          <motion.h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-wide">
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              லயரிதம்
            </motion.span>
          </motion.h1>
          <motion.p className="text-lg md:text-2xl mb-8 max-w-2xl">
            இசையின் உலகில் உங்கள் பயணத்தை தொடங்குங்கள். அனுபவமிக்க ஆசிரியர்களுடன் உங்கள் திறமைகளை வளர்த்தெடுக்கலாம்.
          </motion.p>
          <motion.a href="#" className="inline-block bg-[#00bfa5] hover:bg-[#009e8b] text-white text-xl px-10 py-4 rounded-full font-semibold shadow-lg">
            இப்போது விண்ணப்பிக்கவும்
          </motion.a>
        </div>

        {/* Floating musical icons */}
        {!shouldReduceMotion && (
          <>
            <motion.div className="absolute bottom-16 left-20 text-white/40 text-4xl" animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>♪</motion.div>
            <motion.div className="absolute top-24 right-24 text-white/40 text-4xl" animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>♫</motion.div>
          </>
        )}
      </motion.section>
    </div>
  );
}
