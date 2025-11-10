import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      staggerChildren: 0.1
    }
  }
};

const linkVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function NavBar(){
  const [open, setOpen] = useState(false);

  return (
    <motion.nav 
      className="bg-white shadow-sm"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: 'spring', stiffness: 200, damping: 20 }} 
            className="text-2xl font-extrabold"
          >
            <motion.span 
              animate={{ y: [0, -4, 0] }} 
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: 'easeInOut', 
                delay: 0.8 
              }}
            >
              ஏழிசை
            </motion.span>
          </motion.div>

          <motion.div className="hidden md:flex items-center space-x-4 text-gray-700">
            {['/', '/about', '/courses', '/events', '/contact'].map((path, index) => (
              <motion.div
                key={path}
                variants={linkVariants}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={path} 
                  className="hover:text-primary transition-colors duration-200"
                >
                  {path === '/' ? 'முகப்புப் பக்கம்' :
                   path === '/about' ? 'பற்றி' :
                   path === '/courses' ? 'படிப்புகள்' :
                   path === '/events' ? 'நிகழ்வுகள்' : 'தொடர்பு'}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center space-x-3">
          <Link to="/events" className="hidden md:inline-block px-4 py-2 border border-primary text-primary rounded">நிகழ்வுகள்</Link>
          <Link to="/contact" className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded">இப்போது விண்ணப்பிக்கவும்</Link>

          {/* mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-4 py-3 space-y-2"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.07 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                { path: "/", text: "முகப்புப் பக்கம்" },
                { path: "/about", text: "பற்றி" },
                { path: "/courses", text: "படிப்புகள்" },
                { path: "/events", text: "நிகழ்வுகள்" },
                { path: "/contact", text: "தொடர்பு" }
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                  }}
                >
                  <Link 
                    to={item.path} 
                    onClick={() => setOpen(false)} 
                    className="block transition-colors duration-200 hover:text-primary"
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="pt-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact" 
                    onClick={() => setOpen(false)} 
                    className="block mb-2 bg-primary text-white text-center px-4 py-2 rounded transition-transform duration-200"
                  >
                    இப்போது விண்ணப்பிக்கவும்
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/events" 
                    onClick={() => setOpen(false)} 
                    className="block text-center border border-primary text-primary px-4 py-2 rounded transition-transform duration-200"
                  >
                    நிகழ்வுகள்
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
