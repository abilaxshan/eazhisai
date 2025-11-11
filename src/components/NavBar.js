import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "முகப்புப் பக்கம்" },
  { path: "/about", label: "பற்றி" },
  { path: "/courses", label: "படிப்புகள்" },
  { path: "/events", label: "நிகழ்வுகள்" },
  { path: "/contact", label: "தொடர்பு" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-[40px] md:top-[48px] left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-200"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-extrabold text-gray-800 select-none"
          animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          ஏழிசை
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={link.path}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <Link
            to="/events"
            className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            நிகழ்வுகள்
          </Link>

          <Link
            to="/contact"
            className="bg-gradient-to-r from-primary to-teal-500 text-white px-4 py-2 rounded-md hover:shadow-lg transition-all duration-300"
          >
            இப்போது விண்ணப்பிக்கவும்
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white/90 backdrop-blur-md border-t shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center py-3 space-y-3 text-gray-800 text-base">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="block w-full text-center py-2 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="w-4/5 border-t border-gray-200 my-2"></div>

              <Link
                to="/events"
                onClick={() => setOpen(false)}
                className="block w-4/5 text-center border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-all duration-200"
              >
                நிகழ்வுகள்
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-4/5 text-center bg-gradient-to-r from-primary to-teal-500 text-white px-4 py-2 rounded-md hover:shadow-lg transition-all duration-200"
              >
                இப்போது விண்ணப்பிக்கவும்
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
