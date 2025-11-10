import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import heroImg from "../assets/team/arun-prakash-I9Q57EFcSAA-unsplash (1).jpg";
import myLogo from "../assets/logo/logo.png";

export default function HeroWithAnnouncement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">

      {/* Announcement Bar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-gray-100 text-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zM2 8h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"/>
              </svg>
              <span>eazhisai@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              </svg>
              <span>+94 70 5738946</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 016 6v1h-2V8a4 4 0 10-8 0v1H4V8a6 6 0 016-6z"/>
              </svg>
              <span>மலைமகள் வீதி, கல்முனை, உப்புவெளி</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">x</a>
            <a href="#" className="text-gray-300 hover:text-white">instagram</a>
            <a href="#" className="text-gray-300 hover:text-white">linkedin</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section className="relative overflow-hidden min-h-screen pt-12 sm:pt-16 md:pt-20">
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
