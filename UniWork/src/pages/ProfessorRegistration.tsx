import React, { FormEvent } from "react";
import { motion } from "motion/react";
import { School, BookOpen } from "lucide-react";
import { TranslationDictionary } from "../types";

interface ProfessorRegistrationProps {
  t: TranslationDictionary;
  professorForm: {
    name: string;
    cpf: string;
    expertise: string;
    phone: string;
    email: string;
  };
  onProfessorFormChange: (key: string, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function ProfessorRegistration({
  t,
  professorForm,
  onProfessorFormChange,
  onSubmit,
}: ProfessorRegistrationProps) {
  return (
    <motion.div
      key="prof-reg"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded font-mono text-[10px] uppercase font-bold tracking-widest leading-none">
              FACULTY CONCESS
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-brand-primary tracking-tight leading-tight">
              {t.joinAcademicTitle}
            </h1>
            <p className="text-xs md:text-sm text-brand-on-surface-variant leading-relaxed">
              {t.joinAcademicSub}
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden h-[240px] shadow-xs border border-brand-outline-variant/60 group">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Grand academic lecture theater desks layout"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUOhOZKKpHtFJeOIKmf3YMI1pzWoQ2GaGMZ1sNWc8N5pbt1i-KnQOOWREpZeud5eR_hjorhNmSClR7qSKK_4pkSZsq-Ty_6aeyHdexx6xDspFVmxl_TSUISpRPche3yqX26FY2NfoE026lSYgDgrN-XzAtAvn5B0P1tzHpNXzM6gZcAye7Ft755V5mOEab9VwljI6jov8pKmXb3-LowZfbt6Z3gfleKzHuegpBxzFFWX9b90Ki-8m7omw8yxTe-jtKUA_oMfvv1F8x"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent flex items-end p-6">
              <span className="text-white text-[10px] font-bold tracking-wider uppercase bg-brand-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                Institutional Portal {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-brand-surface rounded-xl border border-brand-outline-variant/60 shadow-xxs">
              <School className="h-5 w-5 text-brand-primary mb-2" />
              <h3 className="font-bold text-xs text-brand-on-surface">{t.curriculumToolsTitle}</h3>
              <p className="text-[10px] text-brand-on-surface-variant leading-relaxed mt-1">
                {t.curriculumToolsSub}
              </p>
            </div>
            <div className="p-4 bg-brand-surface rounded-xl border border-brand-outline-variant/60 shadow-xxs">
              <BookOpen className="h-5 w-5 text-brand-primary mb-2" />
              <h3 className="font-bold text-xs text-brand-on-surface">{t.studentPortalTitle}</h3>
              <p className="text-[10px] text-brand-on-surface-variant leading-relaxed mt-1">
                {t.studentPortalSub}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex items-start order-1 lg:order-2">
          <div className="w-full bg-white rounded-xl border border-brand-outline-variant/60 shadow-sm p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-black text-brand-on-surface">
                {t.profRegTitle}
              </h2>
              <p className="text-xs text-brand-on-surface-variant font-medium mt-1">
                {t.profRegSub}
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                  {t.fullNameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={professorForm.name}
                  onChange={(e) => onProfessorFormChange("name", e.target.value)}
                  placeholder="Prof. Dr. Nome Sobrenome"
                  className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs academic-ring"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                    {t.cpfLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={professorForm.cpf}
                    onChange={(e) => onProfessorFormChange("cpf", e.target.value)}
                    placeholder="000.000.000-00"
                    className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs font-mono academic-ring"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                    {t.expertiseLabel}
                  </label>
                  <select
                    required
                    value={professorForm.expertise}
                    onChange={(e) => onProfessorFormChange("expertise", e.target.value)}
                    className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs cursor-pointer focus:ring-2 focus:ring-brand-primary"
                  >
                    <option value="" disabled>Selecione uma área</option>
                    <option value="Ciência da Computação">Ciência da Computação</option>
                    <option value="Matemática">Matemática</option>
                    <option value="Ciências Biológicas">Ciências Biológicas</option>
                    <option value="Administração e Negócios">Administração e Negócios</option>
                    <option value="Humanas e Direito">Humanas e Direito</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={professorForm.phone}
                    onChange={(e) => onProfessorFormChange("phone", e.target.value)}
                    placeholder="+55 (00) 00000-0000"
                    className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs font-mono academic-ring"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={professorForm.email}
                    onChange={(e) => onProfessorFormChange("email", e.target.value)}
                    placeholder="professor@excellence.edu.br"
                    className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs font-mono academic-ring"
                  />
                </div>
              </div>

              <div className="pt-4">
                {(() => {
                  const isFormIncomplete =
                    !professorForm.name.trim() ||
                    professorForm.cpf.replace(/\D/g, "").length !== 11 ||
                    !professorForm.expertise ||
                    professorForm.phone.replace(/\D/g, "").length < 10 ||
                    !professorForm.email.trim();

                  return (
                    <button
                      type="submit"
                      disabled={isFormIncomplete}
                      className="w-full bg-brand-primary text-white py-4 px-6 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-brand-primary-container transition-all active:opacity-90 shadow-md outline-none disabled:bg-slate-300 disabled:text-slate-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer"
                    >
                      {isFormIncomplete ? "Preencha Todos os Campos Corretamente" : "Cadastrar Professor"}
                    </button>
                  );
                })()}
                <p className="text-[10px] text-brand-on-surface-variant text-center mt-3 font-medium">
                  {t.registeringDisclaimer}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
