import React from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const collectionList =
    t("privacy.collectionList", {
      returnObjects: true,
    }) || [];

  return (
    <div className="section-stack container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">{t("privacy.title")}</h1>
      <div className="prose prose-lg max-w-3xl">
        <p className="mb-4">{t("privacy.intro")}</p>
        <h2 className="text-xl font-semibold mt-6 mb-3">
          {t("privacy.collectionTitle")}
        </h2>
        <p className="mb-4">{t("privacy.collectionIntro")}</p>
        <ul className="list-disc pl-6 mb-4">
          {collectionList?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
