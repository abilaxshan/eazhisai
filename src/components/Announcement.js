import React from "react";
import { useTranslation } from "react-i18next";

export default function Announcement() {
  const { t } = useTranslation();

  const socials = [
    { label: t("announcement.social.facebook"), href: "#" },
    { label: t("announcement.social.x"), href: "#" },
    { label: t("announcement.social.instagram"), href: "#" },
    { label: t("announcement.social.linkedin"), href: "#" },
  ];

  return (
    // fixed on md+; flows in document on small screens
    <div className="md:fixed top-0 left-0 w-full z-50 bg-gray-900 text-gray-100 text-xs sm:text-sm backdrop-blur-sm">
      <div className="container mx-auto px-3 sm:px-4 py-2 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left gap-1 md:gap-0">
        {/* Left group: contact info - allow wrapping and truncation on tiny screens */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-6 w-full md:w-auto">
          <div className="flex items-center gap-2 max-w-[160px] sm:max-w-[260px] truncate">
            <svg className="w-4 h-4 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zM2 8h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
            </svg>
            <span className="truncate">{t("announcement.email")}</span>
          </div>

          <div className="flex items-center gap-2 max-w-[140px] sm:max-w-[220px] truncate">
            <svg className="w-4 h-4 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            </svg>
            <span className="truncate">{t("announcement.phone")}</span>
          </div>

          {/* address is non-critical on small screens */}
          <div className="hidden md:flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 016 6v1h-2V8a4 4 0 10-8 0v1H4V8a6 6 0 016-6z" />
            </svg>
            <span>{t("announcement.address")}</span>
          </div>
        </div>

        {/* Right group: social links - compact and wrap on mobile */}
        <div className="flex items-center gap-2 mt-2 md:mt-0 justify-center md:justify-end w-full md:w-auto flex-wrap">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="text-gray-300 hover:text-white px-2 py-0.5 rounded-md">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
