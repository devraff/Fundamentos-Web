import React, { FormEvent } from "react";
import { motion } from "motion/react";
import { GraduationCap, Lock, MessageSquare } from "lucide-react";
import { TranslationDictionary, Course } from "../types";

interface StudentRegistrationProps {
  t: TranslationDictionary;
  studentForm: {
    name: string;
    cpf: string;
    rg: string;
    phone: string;
    courseId: string;
    address: string;
  };
  onStudentFormChange: (key: string, value: string) => void;
  onSubmit: (e: FormEvent) => void;
  courses: Course[];
}

export default function StudentRegistration({
  t,
  studentForm,
  onStudentFormChange,
  onSubmit,
  courses,
}: StudentRegistrationProps) {
  return (
    <motion.div
      key="student-reg"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-xl border border-brand-outline-variant/60 shadow-xs overflow-hidden">
        <div className="lg:col-span-4 bg-brand-primary-container p-8 md:p-10 flex flex-col justify-between text-white relative min-h-[420px] lg:min-h-auto">
          <div className="space-y-6">
            <span className="inline-block bg-white/10 text-brand-on-primary-container px-3 py-1 rounded font-mono text-[10px] uppercase font-bold tracking-widest leading-none">
              OFFICIAL ENROLLMENT
            </span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              {t.startJourney}
            </h2>
            <p className="text-xs text-brand-surface-container leading-relaxed opacity-90 font-light">
              {t.startJourneySub}
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded">
                <GraduationCap className="h-4 w-4 text-brand-on-primary-container" />
              </div>
              <span className="text-xs font-semibold">{t.benefitAccredited}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded">
                <Lock className="h-4 w-4 text-brand-on-primary-container" />
              </div>
              <span className="text-xs font-semibold">{t.benefitSecure}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded">
                <MessageSquare className="h-4 w-4 text-brand-on-primary-container" />
              </div>
              <span className="text-xs font-semibold">{t.benefitSupport}</span>
            </div>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden h-28 relative">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter saturate-50"
              alt="Student community studying together workspace library"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeS0yxGiIKkku_tAwIRrV9oG3O1mOsD_HFyv0HjoZMJs_4_QWbEb916ehQ7sBlwQRn23pe7Y14Nyc4lf08kA9GhQHaUHmPqYfqsWSJCtpdpRUTbAknoiQ2zcf6jfrd66-Y6ujn5I33A8bYVidIvZsJu_X8kfCj7F_T6dVpb6QtUSjX9gyYcBCzrxQqPZs-vHTaNDodpTEDBj5Li1dFGwJDvQ7zYsH067pU_U1cxRByv7ZpBlzNjKlrFyRoxQh196wAblNWLjlrKtDY"
            />
          </div>
        </div>

        <div className="lg:col-span-8 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-black text-brand-primary tracking-tight">
              {t.studentRegTitle}
            </h1>
            <p className="text-xs text-brand-on-surface-variant font-medium mt-1">
              {t.studentRegSub}
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
                value={studentForm.name}
                onChange={(e) => onStudentFormChange("name", e.target.value)}
                placeholder="Nome Sobrenome"
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
                  value={studentForm.cpf}
                  onChange={(e) => onStudentFormChange("cpf", e.target.value)}
                  placeholder="000.000.000-00"
                  className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs font-mono academic-ring"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                  {t.rgLabel}
                </label>
                <input 
                  type="text"
                  required
                  value={studentForm.rg}
                  onChange={(e) => onStudentFormChange("rg", e.target.value)}
                  placeholder="00.000.000-0"
                  className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs font-mono academic-ring"
                />
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
                  value={studentForm.phone}
                  onChange={(e) => onStudentFormChange("phone", e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs font-mono academic-ring"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                  {t.courseSelectionLabel}
                </label>
                <select
                  required
                  value={studentForm.courseId}
                  onChange={(e) => onStudentFormChange("courseId", e.target.value)}
                  className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs cursor-pointer focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="" disabled>Selecione seu curso</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.titlePt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                {t.addressLabel}
              </label>
              <textarea
                required
                value={studentForm.address}
                onChange={(e) => onStudentFormChange("address", e.target.value)}
                placeholder="Rua, número, bairro, cidade, estado"
                rows={2}
                className="bg-brand-surface border border-slate-200 outline-none rounded-lg p-3 text-xs resize-none academic-ring"
              />
            </div>

            <div className="pt-4">
              {(() => {
                const isFormIncomplete =
                  !studentForm.name.trim() ||
                  studentForm.cpf.replace(/\D/g, "").length !== 11 ||
                  studentForm.rg.replace(/[^0-9Xx]/g, "").length !== 9 ||
                  studentForm.phone.replace(/\D/g, "").length < 10 ||
                  !studentForm.courseId ||
                  !studentForm.address.trim();

                return (
                  <button
                    type="submit"
                    disabled={isFormIncomplete}
                    className="w-full bg-brand-primary text-white py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-brand-primary-container transition-all active:opacity-90 shadow-md outline-none disabled:bg-slate-300 disabled:text-slate-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer"
                  >
                    {isFormIncomplete ? "Preencha Todos os Campos Corretamente" : t.registerButton}
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
    </motion.div>
  );
}
