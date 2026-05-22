import React from "react";
import { Link } from "react-router-dom";
import { Mail, Share2, MapPin, Phone, GraduationCap } from "lucide-react";
import { TranslationDictionary } from "../types";

interface FooterProps {
  t: TranslationDictionary;
}

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: "Academia Excellence",
        text: t.footerDesc,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Método alternativo se o navegador não suportar compartilhamento nativo
      alert("Link do aplicativo copiado!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <footer className="bg-brand-surface-container border-t border-brand-outline-variant/60 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-brand-on-surface">
        
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2 font-bold text-brand-primary">
            <div className="p-1.5 bg-brand-primary text-white rounded-md">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold font-sans tracking-tight">
              {t.brandName}
            </span>
          </div>
          <p className="text-body-sm text-brand-on-surface-variant max-w-sm leading-relaxed">
            {t.footerDesc}
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleShare}
              title="Compartilhar Portal"
              className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 outline-none cursor-pointer"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <a
              href="mailto:secretaria@excellence.edu.br"
              title="Enviar e-mail para Secretaria"
              className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 outline-none"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-left">
          <div className="font-label-md text-label-md font-bold text-brand-primary uppercase tracking-wider">
            {t.quickLinks}
          </div>
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              className="text-left text-brand-on-surface-variant font-label-sm text-sm hover:underline hover:text-brand-primary transition-colors focus:outline-none"
            >
              {t.navHome}
            </Link>
            <Link
              to="/student-reg"
              className="text-left text-brand-on-surface-variant font-label-sm text-sm hover:underline hover:text-brand-primary transition-colors focus:outline-none"
            >
              {t.navStudentReg}
            </Link>
            <Link
              to="/prof-reg"
              className="text-left text-brand-on-surface-variant font-label-sm text-sm hover:underline hover:text-brand-primary transition-colors focus:outline-none"
            >
              {t.navProfReg}
            </Link>
            <Link
              to="/courses"
              className="text-left text-brand-on-surface-variant font-label-sm text-sm hover:underline hover:text-brand-primary transition-colors focus:outline-none"
            >
              {t.navCourses}
            </Link>
            <Link
              to="/contact"
              className="text-left text-brand-on-surface-variant font-label-sm text-sm hover:underline hover:text-brand-primary transition-colors focus:outline-none"
            >
              {t.navContact}
            </Link>
          </nav>
        </div>

        <div className="space-y-6 text-left">
          <div className="font-label-md text-label-md font-bold text-brand-primary uppercase tracking-wider">
            {t.contactInfo}
          </div>
          <div className="flex flex-col gap-4 text-sm mt-2">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
              <span className="text-brand-on-surface-variant leading-relaxed">
                {t.addressValue}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-primary shrink-0" />
              <span className="text-brand-on-surface-variant">
                {t.phoneValue}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 border-t border-brand-outline-variant/30 text-center">
        <p className="text-xs text-brand-on-surface-variant">
          &copy; {currentYear} {t.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}
