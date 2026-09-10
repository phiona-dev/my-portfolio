// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

const FOOTER_DATA = {
  brandName: "Phiona Beatrice Ndemaru",
  role: "Full-Stack Software Developer",
  copyrightYear: new Date().getFullYear(),
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      name: "Email",
      url: "mailto:phionabeatrice@gmail.com",
    },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#FAF7F5] border-t border-stone-200/80 px-6 py-12">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand Info */}
          <div>
            <a
              href="#top"
              className="text-lg font-bold tracking-tight text-stone-900 transition-colors hover:text-rose-600"
            >
              {FOOTER_DATA.brandName}
            </a>
            <p className="mt-1 text-xs font-medium text-stone-500">
              {FOOTER_DATA.role}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-semibold text-stone-600">
            {FOOTER_DATA.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-rose-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Action */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 self-start rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-700 shadow-xs transition-colors hover:border-stone-300 hover:bg-stone-50 md:self-auto"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 text-rose-500" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200/60 pt-8 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-stone-500">
            <span>© {FOOTER_DATA.copyrightYear} {FOOTER_DATA.brandName}. Built with</span>
            <Code2 className="h-3.5 w-3.5 text-stone-700" />
            <span>&</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
          </p>

          <div className="flex items-center gap-5 text-xs font-medium text-stone-500">
            {FOOTER_DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-900"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}