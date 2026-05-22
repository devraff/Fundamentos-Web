import React, { useState } from "react";
import { X, Calendar, CheckSquare, Clock, Globe, Briefcase, BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { TranslationDictionary, Course, categoryTranslations } from "../types";
import { academyHistory } from "../data";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationDictionary;
}

// -------------------------------------------------------------
// 1. MODAL DE REQUISITOS DE INGRESSO/ADMISSÃO
// -------------------------------------------------------------
export function RequirementsModal({ isOpen, onClose, t }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-brand-outline-variant animate-in zoom-in-95 duration-200">
        <div className="bg-brand-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-brand-on-primary-container" />
            <h2 className="text-lg font-bold font-sans tracking-tight">{t.requirementsTitle}</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full outline-none">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-sm text-brand-on-surface-variant leading-relaxed mb-4">
            {t.requirementsSub}
          </p>

          <div className="space-y-3.5">
            {t.requirementsList.map((req, idx) => (
              <div key={idx} className="flex gap-3 items-start p-2.5 bg-brand-surface rounded-lg border border-brand-outline-variant/30">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold leading-relaxed text-brand-on-surface">{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase rounded text-white bg-brand-primary hover:bg-brand-primary-container transition-all"
          >
            {t.closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. MODAL DA LINHA DO TEMPO E HISTÓRICO
// -------------------------------------------------------------
export function HistoryModal({ isOpen, onClose, t }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden shadow-2xl border border-brand-outline-variant animate-in zoom-in-95 duration-200">
        <div className="bg-brand-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-brand-on-primary-container" />
            <h2 className="text-lg font-bold font-sans tracking-tight">
              Centenário Patrimônio Acadêmico
            </h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full outline-none">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 max-h-[450px] overflow-y-auto space-y-6">
          <div className="relative border-l-2 border-brand-primary/20 ml-6 pl-8 space-y-8">
            {academyHistory.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[40px] top-1.5 h-4 w-4 bg-white border-4 border-brand-primary rounded-full shadow-sm" />
                <div className="text-left">
                  <span className="inline-block bg-brand-primary text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md mb-1.5">
                    {item.year}
                  </span>
                  <h3 className="font-bold text-sm text-slate-800">
                    {item.titlePt}
                  </h3>
                  <p className="text-xs text-brand-on-surface-variant leading-relaxed mt-1.5 font-sans">
                    {item.descPt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase rounded text-white bg-brand-primary hover:bg-brand-primary-container transition-all"
          >
            {t.closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. MODAL DE LISTA E DETALHES DE GRADE CURRICULAR (SYLLABUS)
// -------------------------------------------------------------
interface SyllabusModalProps extends ModalProps {
  course: Course | null;
}

export function SyllabusModal({ isOpen, onClose, t, course }: SyllabusModalProps) {
  const [activeQuarter, setActiveQuarter] = useState<number>(1);

  if (!isOpen || !course) return null;

  // Grade modular bilíngue das disciplinas fictícias dos cursos
  const quartersData: Record<number, { titleEn: string; titlePt: string; subEn: string[]; subPt: string[] }> = {
    1: {
      titleEn: "Quarter 1: Academic Fundamentals",
      titlePt: "Módulo 1: Fundamentos da Disciplina",
      subEn: [`Core Principles of ${course.category}`, "Analytical Laboratory Protocols I", "Introduction to Qualitative Systems"],
      subPt: [`Princípios Essenciais de ${categoryTranslations[course.category] || course.category}`, "Sistemas de Análise e Métodos Clínicos", "Introdução a Métodos Qualitativos"]
    },
    2: {
      titleEn: "Quarter 2: Analytical Scaling",
      titlePt: "Módulo 2: Modelagem e Algoritmos",
      subEn: [`Advanced Research in ${course.category}`, "Quantitative Methodology & Software", "Applied Ethical Boundaries"],
      subPt: [`Estudos Teóricos em ${categoryTranslations[course.category] || course.category}`, "Laboratório Computadorizado Avançado", "Ética Aplicada à Inovação"]
    },
    3: {
      titleEn: "Quarter 3: Directed Specialization",
      titlePt: "Módulo 3: Prática Laboratorial",
      subEn: [`Directed Case Studies in ${course.category}`, "Interactive Interface Design", "Integrative Project Seminar"],
      subPt: [`Estudo de Caso Prático em ${categoryTranslations[course.category] || course.category}`, "Projetos de Interfaces de Alta Fidelidade", "Seminários Integrados de Pesquisa"]
    },
    4: {
      titleEn: "Quarter 4: Senior Practicum & Fieldwork",
      titlePt: "Módulo 4: Estágio Supervisionado",
      subEn: ["Graduate Thesis Defense", "Corporate Partnership Practicum & Work", "Global Innovation Showcase Review"],
      subPt: ["Defesa de Monografia de Graduação", "Prática Supervisionada em Organização Parceira", "Exposição de Extensão Científica Nacional"]
    }
  };

  return (
    <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden shadow-2xl border border-brand-outline-variant animate-in zoom-in-95 duration-200">
        <div className="bg-brand-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-brand-on-primary-container" />
            <div className="text-left">
              <h2 className="text-base font-bold font-sans tracking-tight">
                {course.titlePt}
              </h2>
              <p className="text-[10px] text-brand-on-primary-container/80 tracking-wide font-mono uppercase">
                Currículo de {categoryTranslations[course.category] || course.category}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full outline-none">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="p-4 bg-brand-surface rounded-lg border border-brand-outline-variant/30 text-xs text-left">
            <p className="font-semibold text-brand-primary mb-1">
              Descrição do Curso
            </p>
            <p className="text-brand-on-surface-variant leading-relaxed">
              {course.descriptionPt}
            </p>
          </div>

          <div className="flex border-b border-brand-outline-variant/40">
            {[1, 2, 3, 4].map((q) => (
              <button
                key={q}
                onClick={() => setActiveQuarter(q)}
                className={`flex-1 pb-2.5 text-center text-xs font-bold tracking-wider uppercase border-b-2 transition-all ${
                  activeQuarter === q
                    ? "border-brand-primary text-brand-primary font-bold"
                    : "border-transparent text-gray-400 hover:text-brand-primary"
                }`}
              >
                {`M${q}`}
              </button>
            ))}
          </div>

          <div className="space-y-3.5 min-h-[140px] animate-in fade-in duration-200">
            <h4 className="text-xs font-bold text-slate-800">
              {quartersData[activeQuarter].titlePt}
            </h4>
            <div className="space-y-2 text-left">
              {quartersData[activeQuarter].subPt.map((subj, index) => (
                <div key={index} className="flex items-center gap-3 p-2.5 bg-slate-50 rounded border border-slate-100">
                  <div className="h-5 w-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-[10px] font-bold shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-xs text-brand-on-surface-variant font-medium">{subj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase rounded text-white bg-brand-primary hover:bg-brand-primary-container transition-all"
          >
            {t.closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. MODAL DE AGENDAMENTO DE CHAMADAS COM ORIENTADOR
// -------------------------------------------------------------
export function BookingModal({ isOpen, onClose, t }: ModalProps) {
  const [selectedAdvisor, setSelectedAdvisor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [queryText, setQueryText] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const advisors = [
    { id: "vance", name: "Dra. Helena Vance", role: "IA & Ciência de Dados" },
    { id: "thorne", name: "Prof. Julian Thorne", role: "Programas de MBA" },
    { id: "chen", name: "Dra. Sarah Chen", role: "Área Biomédica" }
  ];

  const dateSlots = ["2026-05-25", "2026-05-26", "2026-05-27", "2026-05-28"];
  const timeSlots = ["09:00", "11:00", "14:00", "16:00"];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAdvisor || !selectedDate || !selectedTimeSlot) {
      alert("Por favor preencha todas as opções!");
      return;
    }
    setIsBooked(true);
  };

  const handleReset = () => {
    setSelectedAdvisor("");
    setSelectedDate("");
    setSelectedTimeSlot("");
    setQueryText("");
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl border border-brand-outline-variant animate-in zoom-in-95 duration-200">
        <div className="bg-brand-primary p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-brand-on-primary-container" />
            <h2 className="text-lg font-bold font-sans tracking-tight">
              Agendar Orientação Acadêmica
            </h2>
          </div>
          <button onClick={handleReset} className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full outline-none">
            <X className="h-5 w-5" />
          </button>
        </div>

        {isBooked ? (
          <div className="p-8 text-center space-y-4 animate-in fade-in duration-200">
            <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <CheckSquare className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Orientação Confirmada!
            </h3>
            <p className="text-xs text-brand-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Você agendou uma chamada individual em {selectedDate} às {selectedTimeSlot} com {
                advisors.find((a) => a.id === selectedAdvisor)?.name
              }. O link de acesso foi encaminhado para o seu e-mail.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-brand-primary text-white text-xs font-bold rounded-lg hover:bg-brand-primary-container transition-all"
              >
                {t.closeLabel}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                Selecione o Orientador
              </label>
              <div className="grid grid-cols-1 gap-2">
                {advisors.map((advisor) => (
                  <button
                    key={advisor.id}
                    type="button"
                    onClick={() => setSelectedAdvisor(advisor.id)}
                    className={`p-3 text-left border rounded-lg transition-all ${
                      selectedAdvisor === advisor.id
                        ? "border-brand-primary bg-brand-surface-low"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <p className="text-xs font-bold text-slate-800">{advisor.name}</p>
                    <p className="text-[10px] text-brand-on-surface-variant">{advisor.role}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                Selecione a Data
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {dateSlots.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`py-1.5 px-1 text-center text-[10px] font-bold border rounded-lg transition-all ${
                      selectedDate === d
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    {d.slice(5)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                Selecione o Horário
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTimeSlot(time)}
                    className={`py-1.5 text-center text-[10px] font-bold border rounded-lg transition-all ${
                      selectedTimeSlot === time
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">
                Descreva suas principais dúvidas (opcional)
              </label>
              <textarea
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                placeholder="Explique brevemente seu interesse..."
                rows={2}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-brand-primary focus:bg-white outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold text-xs mt-4 hover:bg-brand-primary-container transition-all"
            >
              Confirmar Agendamento
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
