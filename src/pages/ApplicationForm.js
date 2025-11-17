import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";

import musicNotes from "../assets/music-notes.json";
import heroImage from "../assets/team/arun-prakash-I9Q57EFcSAA-unsplash (1).jpg";

export default function ApplicationForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const courses =
    t("coursesSection.items", { returnObjects: true })?.map((course) => course.title) ||
    [];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden py-12 px-4 md:py-20 md:px-8">
      {/* Background image & overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Musician performing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/70 to-slate-900/90" />
        <div className="absolute inset-x-0 top-0 h-48 md:h-64 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl" />
      </div>

      {/* Floating Lottie */}
      <div className="absolute -left-8 md:left-10 top-1/2 -translate-y-1/2 w-48 md:w-80 opacity-40 pointer-events-none">
        <Lottie animationData={musicNotes} loop />
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-6 md:p-10 flex flex-col justify-between"
        >
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-100 text-xs md:text-sm font-semibold tracking-wide uppercase">
              {t("application.badge")}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight">
              {t("application.title")}
            </h1>
            <p className="mt-4 text-sm md:text-lg text-slate-200">{t("application.subtitle")}</p>
          </div>

          <div className="mt-6 md:mt-10 space-y-4 text-slate-200">
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <span className="inline-flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-2xl bg-white/20 text-xl md:text-2xl">
                🎼
              </span>
              <p className="text-sm md:text-base">
                {t("coursesSection.heading")} •{" "}
                <span className="font-semibold text-emerald-200">{courses.length}+ programs</span>
              </p>
            </div>
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <span className="inline-flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-2xl bg-white/20 text-xl md:text-2xl">
                🎙️
              </span>
              <p className="text-sm md:text-base">{t("team.description")}</p>
            </div>
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <span className="inline-flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-2xl bg-white/20 text-xl md:text-2xl">
                ✉️
              </span>
              <p className="text-sm md:text-base">{t("application.helperText")}</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/15 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl p-6 md:p-10 space-y-4 md:space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Field
              id="app-name"
              label={t("application.fields.name")}
              type="text"
              placeholder="அருண் / Arun"
              required
            />
            <Field
              id="app-email"
              label={t("application.fields.email")}
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Field
              id="app-phone"
              label={t("application.fields.phone")}
              type="tel"
              placeholder="+94 70 123 4567"
              required
            />
            <div>
              <label htmlFor="app-course" className="block text-sm md:text-base font-semibold text-slate-100 mb-2">
                {t("application.fields.course")}
              </label>
              <div className="relative">
                <select
                  id="app-course"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 transition"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="bg-slate-900 text-slate-200">
                    {t("application.fields.coursePlaceholder")}
                  </option>
                  {courses.map((course) => (
                    <option
                      key={course}
                      value={course}
                      className="bg-slate-900 text-slate-100"
                    >
                      {course}
                    </option>
                  ))}
                </select>
                <span className="absolute right-4 top-3 text-slate-200 pointer-events-none">⌄</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="app-message" className="block text-sm md:text-base font-semibold text-slate-100 mb-2">
              {t("application.fields.message")}
            </label>
            <textarea
              id="app-message"
              rows="4"
              placeholder={t("application.fields.messagePlaceholder")}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-primary w-full justify-center text-base md:text-lg"
          >
            {t("application.fields.submit")}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-emerald-200 font-medium text-sm md:text-base"
            >
              ✅ {t("application.success")}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm md:text-base font-semibold text-slate-100 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 transition text-sm md:text-base"
      />
    </div>
  );
}
