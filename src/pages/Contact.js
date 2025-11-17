import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import musicNotes from "../assets/music-notes.json";

export default function Contact() {
  const { t } = useTranslation();
  const channels = t("contactSection.channels", { returnObjects: true }) || [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white py-12 px-4 md:py-20 md:px-8">
      {/* Lottie background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Lottie
          animationData={musicNotes}
          loop
          className="w-48 md:w-80 absolute top-12 right-4 md:right-12"
        />
      </div>

      <div className="section-stack relative z-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10">
          {/* Left text and channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/10 text-xs md:text-sm uppercase tracking-wide">
              {t("contactSection.title")}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-2 md:mt-4">
              {t("contactSection.subtitle")}
            </h1>

            <div className="mt-6 space-y-4">
              {channels.map((channel, index) => (
                <div
                  key={channel.label}
                  className="glass-panel bg-white/5 border-white/10 p-4 md:p-5 flex items-start gap-3 md:gap-4 rounded-2xl"
                >
                  <div className="text-xl md:text-2xl">
                    {["✉️", "📞", "📍"][index] || "🎶"}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-wide text-slate-300">{channel.label}</p>
                    {channel.link ? (
                      <a
                        href={channel.link}
                        className="text-lg md:text-xl font-semibold text-white hover:text-primary transition"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="text-lg md:text-xl font-semibold text-white">{channel.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-slate-300">{t("contactSection.visitNote")}</p>
          </motion.div>

          {/* Right visit card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel bg-white/10 border-white/15 p-6 md:p-8 space-y-4 md:space-y-6 rounded-2xl mt-8 lg:mt-0"
          >
            <h3 className="text-xl md:text-2xl font-semibold">{t("contactSection.visitCta")}</h3>
            <p className="text-sm md:text-base text-slate-200">{t("contactSection.address")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base text-slate-200">
              <div className="p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs md:text-sm uppercase tracking-wide text-slate-400">{t("contactSection.emailLabel")}</p>
                <p className="mt-1 md:mt-2 font-semibold text-white">eazhisai@gmail.com</p>
              </div>
              <div className="p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs md:text-sm uppercase tracking-wide text-slate-400">{t("contactSection.phoneLabel")}</p>
                <p className="mt-1 md:mt-2 font-semibold text-white">+94 70 573 8946</p>
              </div>
            </div>

            <button className="btn-primary w-full justify-center text-sm md:text-base py-2 md:py-3">
              {t("contactSection.visitCta")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
