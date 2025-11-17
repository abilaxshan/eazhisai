import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import TeamCard from "./TeamCard";
import teacher1 from "../assets/team/whitekalyan.jpeg";
import teacher2 from "../assets/team/teacher playing violin.png";
import teacher3 from "../assets/team/singsong.jpeg";

const teamImages = [teacher1, teacher2, teacher3];

export default function Team() {
  const { t } = useTranslation();
  const teamMembers =
    t("team.members", { returnObjects: true })?.map((member, index) => ({
      image: teamImages[index] || teacher1,
      ...member,
    })) || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Roboto Slab', serif" }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {t("team.heading")}
          </motion.h1>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t("team.description")}
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
