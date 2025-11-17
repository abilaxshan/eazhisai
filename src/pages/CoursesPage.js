import React from "react";
import { useTranslation } from "react-i18next";
import Courses from "../components/Courses";

export default function CoursesPage() {
  const { t } = useTranslation();

  return (
    <div className="section-stack container mx-auto px-4">
      <h1 className="text-3xl font-extrabold mb-4">
        {t("coursesSection.heading")}
      </h1>
      <Courses />
    </div>
  );
}
