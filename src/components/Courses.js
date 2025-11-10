import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import bgImage from "../assets/bg/paralelcourse.jpg"; // ensure correct path

const coursesData = [
  {
    id: 1,
    title: "வீணை பாடம்",
    desc: "அடிப்படை முதல் மேம்பட்ட நிலை வரை வீணை இசை பயிற்சி.",
  },
  {
    id: 2,
    title: "மிருதங்கம் பாடம்",
    desc: "தாளம், குரல் இணைப்பு மற்றும் நேர்த்தியான மிருதங்கம் பயிற்சி.",
  },
  {
    id: 3,
    title: "சங்கீதம் பாடம்",
    desc: "கர்நாடக இசை, குரல் பயிற்சி மற்றும் பாடத்திட்டங்கள்.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  hover: {
    y: -6,
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export default function Courses() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", padding: "5rem 1rem" }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "top center",
          y: backgroundY,
          scale: 1.1,
        }}
      />

      {/* Light overlay (to make text readable but image visible) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          படிப்புகள்
        </motion.h2>

        {/* 3 Glass-style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {coursesData.map((course, i) => (
            <motion.article
              key={course.id}
              className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
              <p className="text-sm text-gray-100 mb-5 leading-relaxed">
                {course.desc}
              </p>
              <div className="text-right">
                <button className="px-4 py-2 bg-blue-600/90 rounded-lg text-white hover:bg-blue-700 transition">
                  மேலும் அறிக
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
