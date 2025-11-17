import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const switchLang = () => {
    const nextLanguage = i18n.language === "TA" ? "EN" : "TA";
    i18n.changeLanguage(nextLanguage);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", nextLanguage);
    }
  };

  const navLinks = [
    { path: "/", label: t('home') },
    { path: "/about", label: t('about') },
    { path: "/courses", label: t('courses') },
    { path: "/events", label: t('events') },
    { path: "/contact", label: t('contact') },
  ];

  return (
    <motion.nav className="fixed top-[40px] md:top-[48px] left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-200"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div className="text-2xl font-extrabold text-gray-800 select-none"
          animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          {t('logo')}
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
          {navLinks.map((link) => (
            <motion.div key={link.path} whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link to={link.path} className="hover:text-primary transition-colors duration-200">
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Apply button */}
          <Link to="/apply" className="btn-primary text-sm px-5 py-2">
            {t("apply")}
          </Link>

          {/* Sliding Language Toggle */}
          <div className="ml-4 flex items-center">
            <motion.div className="w-16 h-8 bg-gray-200 rounded-full p-1 cursor-pointer flex items-center"
              onClick={switchLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="w-6 h-6 bg-primary rounded-full shadow-md"
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ x: i18n.language === 'EN' ? 32 : 0 }}
              />
            </motion.div>
            <span className="ml-2 font-semibold text-gray-700">
              {i18n.language}
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div className="md:hidden bg-white/90 backdrop-blur-md border-t shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center py-3 space-y-3 text-gray-800 text-base">
              {navLinks.map((link) => (
                <motion.div key={link.path} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}>
                  <Link to={link.path} onClick={() => setOpen(false)}
                    className="block w-full text-center py-2 hover:text-primary transition-colors duration-200">{link.label}</Link>
                </motion.div>
              ))}

              <div className="w-4/5 border-t border-gray-200 my-2"></div>

              <div className="w-4/5">
                <Link
                  to="/apply"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  {t("apply")}
                </Link>
              </div>

              {/* Mobile Sliding Language Toggle */}
              <div className="flex items-center mt-3">
                <motion.div className="w-16 h-8 bg-gray-200 rounded-full p-1 cursor-pointer flex items-center"
                  onClick={switchLang} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <motion.div className="w-6 h-6 bg-primary rounded-full shadow-md"
                    layout transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ x: i18n.language === 'EN' ? 32 : 0 }} />
                </motion.div>
                <span className="ml-2 font-semibold text-gray-700">
                  {i18n.language}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
