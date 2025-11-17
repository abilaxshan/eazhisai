import React from "react";
import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="section-stack container mx-auto px-4">
      <h1 className="text-3xl font-extrabold mb-4">
        {t("blogSection.title")}
      </h1>
      <p className="text-gray-700">{t("blogSection.description")}</p>
    </div>
  );
}
