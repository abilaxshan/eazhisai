import React from "react";
import { useTranslation } from "react-i18next";
import Events from "../components/Events";

export default function EventsPage() {
  const { t } = useTranslation();

  return (
    <div className="section-stack container mx-auto px-4">
      <h1 className="text-3xl font-extrabold mb-4">
        {t("eventsSection.heading")}
      </h1>
      <Events />
    </div>
  );
}
