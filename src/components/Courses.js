import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg/paralelcourse.jpg"; // ensure correct path

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
  const { t } = useTranslation();
  const coursesData =
    t("coursesSection.items", { returnObjects: true })?.map(
      (item, index) => ({
        id: index + 1,
        ...item,
      })
    ) || [];

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
          {t("coursesSection.heading")}
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
                <Link
                  to="/apply"
                  className="btn-primary text-sm px-6 py-2 justify-center"
                >
                  {t("apply")}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
