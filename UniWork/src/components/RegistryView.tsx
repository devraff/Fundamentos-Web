import React, { useState } from "react";
import { Search, Trash2, ShieldAlert, GraduationCap, Users, Bookmark, FileSpreadsheet, PlusCircle } from "lucide-react";
import { Student, Professor, Course, TranslationDictionary } from "../types";

interface RegistryViewProps {
  students: Student[];
  onDeleteStudent: (id: string) => void;
  professors: Professor[];
  onDeleteProfessor: (id: string) => void;
  courses: Course[];
  t: TranslationDictionary;
}

export default function RegistryView({
  students,
  onDeleteStudent,
  professors,
  onDeleteProfessor,
  courses,
  t,
}: RegistryViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<"students" | "professors">("students");
  const [searchQuery, setSearchQuery] = useState("");

  const getCourseTitle = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return "N/A";
    return course.titlePt;
  };

  // Lógica de filtragem dos dados com base na pesquisa ativa
  const filteredStudents = students.filter((s) => {
    const query = searchQuery.toLowerCase();
    const courseTitle = getCourseTitle(s.courseId).toLowerCase();
    return (
      s.name.toLowerCase().includes(query) ||
      s.cpf.includes(query) ||
      s.rg.includes(query) ||
      courseTitle.includes(query)
    );
  });

  const filteredProfessors = professors.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.cpf.includes(query) ||
      p.expertise.toLowerCase().includes(query) ||
      p.email.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full bg-white rounded-xl border border-brand-outline-variant shadow-sm overflow-hidden animate-in fade-in duration-300">
      
      <div className="bg-brand-primary p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-brand-primary-container text-brand-on-primary-container rounded-lg">
            <FileSpreadsheet className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-sans tracking-tight">
              Central de Registros do Portal
            </h1>
            <p className="text-xs text-brand-on-primary-container/90 mt-1 leading-relaxed">
              Base de registros atualizada que armazena matrículas eletrônicas e concessões docentes.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-center px-4 py-2 bg-brand-primary-container/40 rounded-lg">
            <div className="text-xl font-bold">{students.length}</div>
            <div className="text-[10px] uppercase font-mono tracking-wider opacity-85">
              Alunos
            </div>
          </div>
          <div className="text-center px-4 py-2 bg-brand-primary-container/40 rounded-lg">
            <div className="text-xl font-bold">{professors.length}</div>
            <div className="text-[10px] uppercase font-mono tracking-wider opacity-85">
              Docentes
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/55">
        <div className="flex gap-2 p-1 bg-slate-100 rounded-lg w-full sm:w-auto">
          <button
            onClick={() => {
              setActiveSubTab("students");
              setSearchQuery("");
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-all uppercase tracking-wider ${
              activeSubTab === "students"
                ? "bg-white text-brand-primary shadow-xs"
                : "text-slate-500 hover:text-brand-primary"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Corpo Discente</span>
          </button>
          <button
            onClick={() => {
              setActiveSubTab("professors");
              setSearchQuery("");
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-all uppercase tracking-wider ${
              activeSubTab === "professors"
                ? "bg-white text-brand-primary shadow-xs"
                : "text-slate-500 hover:text-brand-primary"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Corpo Docente</span>
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeSubTab === "students"
                ? "Buscar por aluno..."
                : "Buscar por docente..."
            }
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all font-mono"
          />
        </div>
      </div>

      <div className="p-6 overflow-x-auto min-h-[300px]">
        {activeSubTab === "students" ? (
          filteredStudents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400">
              <ShieldAlert className="h-10 w-10 text-slate-300 mb-2" />
              <p className="text-xs font-bold">Nenhum estudante corresponde à pesquisa.</p>
              <p className="text-[10px] mt-1">Inicie inscrições no menu superior de matrículas.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[650px] text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4 font-bold">ID Matrícula</th>
                  <th className="py-3 px-4 font-bold">{t.fullNameLabel}</th>
                  <th className="py-3 px-4 font-bold">{t.cpfLabel} / {t.rgLabel}</th>
                  <th className="py-3 px-4 font-bold">{t.courseSelectionLabel}</th>
                  <th className="py-3 px-4 font-bold">Contato</th>
                  <th className="py-3 px-4 text-right font-bold">Excluir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-4 font-mono text-slate-500 font-medium">
                      #{student.id}
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-bold text-slate-800">{student.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Admitido em: 
                        {student.registeredAt.slice(0, 10)}
                      </p>
                    </td>
                    <td className="py-4 px-4 font-mono">
                      <p className="text-slate-700">CPF: {student.cpf}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">RG: {student.rg}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block bg-brand-surface-low text-brand-primary px-2.5 py-1 rounded text-[10px] font-bold">
                        {getCourseTitle(student.courseId)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-medium text-slate-700">{student.phone}</p>
                      <p className="text-[10px] text-slate-400 leading-relaxed truncate max-w-xs" title={student.address}>
                        {student.address}
                      </p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => {
                          if (confirm(`Tem certeza que deseja rescindir a matrícula de ${student.name}?`)) {
                            onDeleteStudent(student.id);
                          }
                        }}
                        className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Delete registration"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        ) : filteredProfessors.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <ShieldAlert className="h-10 w-10 text-slate-300 mb-2" />
            <p className="text-xs font-bold">Nenhum professor corresponde à pesquisa.</p>
            <p className="text-[10px] mt-1">Consulte a seleção de áreas de atuação acima.</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse min-w-[650px] text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4 font-bold">Ref Docente</th>
                <th className="py-3 px-4 font-bold">{t.fullNameLabel} / {t.cpfLabel}</th>
                <th className="py-3 px-4 font-bold">{t.expertiseLabel}</th>
                <th className="py-3 px-4 font-bold">Canais de Comunicação</th>
                <th className="py-3 px-4 text-right font-bold">Excluir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProfessors.map((prof) => (
                <tr key={prof.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-4 font-mono text-slate-500 font-medium">
                    #{prof.id}
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-bold text-slate-800">{prof.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">CPF: {prof.cpf}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      {prof.expertise}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-slate-700">{prof.email}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{prof.phone}</p>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => {
                        if (confirm(`Deseja descredenciar Dr. ${prof.name} do portal?`)) {
                          onDeleteProfessor(prof.id);
                        }
                      }}
                      className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded transition-colors"
                      title="Remove record"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
