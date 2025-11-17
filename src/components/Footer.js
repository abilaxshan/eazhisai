import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "/about", label: t("footer.quickLinks.about") },
    { href: "/events", label: t("footer.quickLinks.events") },
    { href: "/contact", label: t("footer.quickLinks.contact") },
  ];

  const socials = [
    {
      label: "Facebook",
      path: "#",
      icon: "M18.77,7.46H14.5V5.9c0-.86.72-1.58,1.58-1.58h2.7V0H14.5C11.13,0,8.38,2.75,8.38,6.12v1.34H4.11v4.76h4.27V24h6.12V12.22h4.27l0-4.76Z",
    },
    {
      label: "Twitter",
      path: "#",
      icon: "M23.954 4.569c-.885.389-1.83.654-2.825.775-.668-.713-1.62-1.149-2.704-1.149-2.086 0-3.773 1.687-3.773 3.773 0 .295.033.58.097.857C9.091 8.144 4.816 5.425 2.024 1.76c-.324.556-.508 1.2-.508 1.888 0 1.302.662 2.453 1.667 3.127-.615-.02-1.194-.188-1.7-.468v.047c0 1.819 1.293 3.338 3.007 3.682-.314.085-.646.13-.988.13-.241 0-.478-.023-.707-.067.478 1.494 1.86 2.582 3.504 2.614-1.282 1.005-2.896 1.605-4.647 1.605-.302 0-.6-.018-.893-.052 1.656 1.063 3.63 1.684 5.749 1.684 6.897 0 10.67-5.713 10.67-10.67 0-.162-.004-.324-.011-.485.734-.53 1.372-1.193 1.874-1.95z",
    },
    {
      label: "Instagram",
      path: "#",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.163.46.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.153 1.77 4.92 4.92 0 0 1-1.77 1.153c-.46.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.153 4.92 4.92 0 0 1-1.153-1.77c-.163-.46-.347-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.153-1.77 4.92 4.92 0 0 1 1.77-1.153c.46-.163 1.26-.347 2.43-.403C8.416 2.175 8.796 2.163 12 2.163",
    },
    {
      label: "LinkedIn",
      path: "#",
      icon: "M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 19H5.337V9.75h3.002V19zM6.838 8.544c-.96 0-1.739-.783-1.739-1.744 0-.961.779-1.744 1.739-1.744.961 0 1.739.783 1.739 1.744 0 .961-.778 1.744-1.739 1.744zM19 19h-3.002v-4.664c0-1.112-.02-2.543-1.55-2.543-1.552 0-1.791 1.213-1.791 2.465V19h-3.002V9.75h2.881v1.268h.04c.402-.762 1.386-1.564 2.852-1.564 3.049 0 3.61 2.008 3.61 4.621V19z",
    },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("logo")}</h2>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              {t("footer.about")}
            </p>
            <div className="mt-6 flex gap-4 flex-wrap text-sm text-slate-300 uppercase tracking-wide">
              <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5">
                🎻 {t("eventsSection.heading")}
              </span>
              <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5">
                🎼 {t("coursesSection.heading")}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              {t("footer.quickLinksTitle")}
            </h3>
            <ul className="space-y-3 text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="footer-link">
                    <span className="text-sm">↗</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              {t("footer.followTitle")}
            </h3>
            <div className="flex items-center gap-5">
              {socials.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{
                    scale: 1.15,
                    color: "#fff",
                    rotate: 4,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-slate-400 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>
            {t("footer.rightsPrefix", { year: new Date().getFullYear() })}
            <a
              href="https://neirahtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-sm"
            >
              {t("footer.company")}
            </a>
            {t("footer.rightsSuffix")}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="footer-link text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
