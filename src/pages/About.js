import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import musicNotes from "../assets/music-notes.json";
import veenaShow from "../assets/events/veenashow.png";

export default function About() {
  const { t } = useTranslation();
  const highlights = t("aboutSection.highlights", { returnObjects: true }) || [];
  const stats = t("aboutSection.stats", { returnObjects: true }) || [];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-12 px-4 md:py-20 md:px-8">
      {/* Background overlays and Lottie */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-slate-950 opacity-90" />
        <div className="absolute inset-x-0 top-0 h-48 md:h-72 bg-gradient-to-b from-primary/30 to-transparent blur-3xl" />
        <Lottie
          animationData={musicNotes}
          loop
          className="absolute -left-16 md:-left-24 top-1/2 -translate-y-1/2 w-48 md:w-72 opacity-30 pointer-events-none"
        />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Top section: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/10 text-xs md:text-sm uppercase tracking-wide">
              {t("aboutSection.title")}
            </span>

            {/* Big, highlighted ஏழிசை */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-snug">
              <span className="text-6xl md:text-8xl text-emerald-400">ஏழிசை</span>{" "}
              {t("aboutSection.description").replace("ஈழிசை", "")}
            </h1>

            <div className="space-y-4 text-slate-200">
              <h3 className="text-xl md:text-2xl font-semibold">{t("aboutSection.storyTitle")}</h3>
              <p className="text-sm md:text-base">{t("aboutSection.story")}</p>
            </div>

            <div className="space-y-4 text-slate-200">
              <h3 className="text-xl md:text-2xl font-semibold">{t("aboutSection.missionTitle")}</h3>
              <p className="text-sm md:text-base">{t("aboutSection.mission")}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel text-center py-4 md:py-6 px-3 md:px-4 bg-white/10 border-white/15 rounded-2xl"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs md:text-sm text-slate-200 mt-1 md:mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="glass-panel bg-white/5 border-white/10 p-2 md:p-3 rounded-2xl">
              <img
                src={veenaShow}
                alt="Carnatic ensemble"
                className="rounded-xl md:rounded-[20px] object-cover w-full h-60 md:h-full"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-xs md:max-w-sm glass-panel bg-slate-900/80 px-4 md:px-6 py-3 md:py-5 border-white/10 rounded-xl">
              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                {t("aboutSection.missionTitle")}
              </h4>
              <p className="text-xs md:text-sm text-slate-200">{t("aboutSection.mission")}</p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel bg-white/5 border-white/10 p-4 md:p-6 rounded-2xl"
            >
              <p className="text-3xl md:text-4xl mb-2 md:mb-4">{["🎵", "🎼", "🥁"][idx] || "🎶"}</p>
              <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{card.title}</h4>
              <p className="text-sm md:text-base text-slate-200">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
