import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Core-Apps Associations.json"; // Your Lottie JSON file

// Import your images
import mirudangamImg from "../assets/events/kacheri.jpeg";
import veenaImg from "../assets/events/veenashow.png";
import sangeethamImg from "../assets/events/sethupathishow.png";

const events = [
  {
    id: 1,
    title: "கச்சேரி",
    description: "அற்புதமான இசை நிகழ்ச்சி.",
    bgImage: mirudangamImg,
  },
  {
    id: 2,
    title: "வீணைக் கச்சேரி",
    description: "சங்கீத விருப்பங்களுக்கான வீணைக் கச்சேரி.",
    bgImage: veenaImg,
  },
  {
    id: 3,
    title: "சேதுபதி இசை நிகழ்ச்சி",
    description: "நிகழ்ச்சியின் அழகான இசை நிகழ்ச்சி.",
    bgImage: sangeethamImg,
  },
];

export default function Events() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header with Animation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
          <motion.div
            className="w-56 h-56 lg:w-72 lg:h-72 flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "100%", width: "100%" }}
              renderer="svg"
              rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
            />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-center leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            நிகழ்வுகள்
            <span className="text-2xl block text-blue-600 mt-2"></span>
          </motion.h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg"
              style={{
                minHeight: "250px",
                backgroundImage: `url(${event.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-35 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl"></div>

              {/* Card Content */}
              <motion.div className="relative z-10 h-full flex flex-col justify-end p-6">
                <motion.h3
                  className="text-2xl font-bold mb-2 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
                >
                  {event.title}
                </motion.h3>
                <motion.p
                  className="text-white text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                >
                  {event.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
