import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  Clock, 
  GraduationCap 
} from "lucide-react";
import { TranslationDictionary, Course, categoryTranslations } from "../types";
import { coursesData } from "../data";

interface CoursesProps {
  t: TranslationDictionary;
  setSyllabusCourse: (course: Course | null) => void;
  setIsBookingOpen: (open: boolean) => void;
  startApplicationForCourse: (courseId: string) => void;
}

export default function Courses({
  t,
  setSyllabusCourse,
  setIsBookingOpen,
  startApplicationForCourse,
}: CoursesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortByDuration, setSortByDuration] = useState<boolean>(false);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);

  // Filtra os cursos ofertados com base nas pesquisas do usuário
  const filteredCourses = coursesData.filter((course) => {
    const titleMatch = course.titlePt
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const descMatch = course.descriptionPt
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    
    const categoryMatch = selectedCategory === "All" || course.category === selectedCategory;
    return (titleMatch || descMatch) && categoryMatch;
  });

  // Lógica de ordenação opcional por duração
  if (sortByDuration) {
    filteredCourses.sort((a, b) => {
      const durA = parseInt(a.durationEn) || 0;
      const durB = parseInt(b.durationEn) || 0;
      return durA - durB;
    });
  }

  return (
    <motion.div
      key="courses"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 text-left space-y-12"
    >
      <section className="space-y-4">
        <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded font-mono text-[10px] uppercase font-bold tracking-widest leading-none">
          GRADE CURRICULAR
        </span>
        <h1 className="text-3xl font-black text-brand-primary tracking-tight leading-tight">
          {t.coursesTitle}
        </h1>
        <p className="text-xs md:text-sm text-brand-on-surface-variant leading-relaxed max-w-2xl font-medium">
          {t.coursesSub}
        </p>
      </section>

      <section className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-brand-outline-variant/40 pb-6">
        <div className="flex flex-wrap gap-3 items-center w-full sm:w-auto">
          <div className="relative">
            <button
              onClick={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-brand-surface-container rounded-lg font-bold text-xs text-brand-on-surface-variant hover:text-brand-primary transition-all outline-none cursor-pointer"
            >
              <Filter className="h-4 w-4 shrink-0" />
              <span>{selectedCategory === "All" ? t.allCategories : categoryTranslations[selectedCategory] || selectedCategory}</span>
            </button>
            {isCategoryFilterOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-brand-outline-variant shadow-lg py-1.5 rounded-lg z-50 animate-in fade-in zoom-in-95 duration-100">
                {["All", "Science", "Engineering", "Business", "Medicine", "Law"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsCategoryFilterOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-xs text-left hover:bg-slate-50 transition-colors cursor-pointer ${
                      selectedCategory === cat ? "text-brand-primary font-bold bg-brand-surface-low" : "text-slate-600"
                    }`}
                  >
                    {cat === "All" ? t.allCategories : categoryTranslations[cat] || cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setSortByDuration(!sortByDuration)}
            className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg font-bold text-xs transition-all outline-none cursor-pointer ${
              sortByDuration
                ? "border-brand-primary bg-brand-surface-low text-brand-primary"
                : "border-slate-200 bg-transparent text-slate-500 hover:bg-slate-50"
            }`}
          >
            <SlidersHorizontal className="h-4 w-4 shrink-0" />
            <span>{t.durationFilter} ({sortByDuration ? "Mais Curtos" : "Sem Ordenação"})</span>
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 outline-none rounded-lg text-xs font-mono academic-ring"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {filteredCourses.length === 0 ? (
          <div className="col-span-12 py-12 text-center text-slate-400 font-medium">
            Nenhum curso corresponde à pesquisa!
          </div>
        ) : (
          filteredCourses.map((course) => {
            if (course.featured) {
              return (
                <div 
                  key={course.id} 
                  className="lg:col-span-8 bg-white border border-brand-outline-variant/60 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col md:flex-row h-full animate-in fade-in duration-300"
                >
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      alt="Biologist researcher scientist at lab workspace tools"
                      src={course.bannerImage}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-primary text-white font-mono font-bold tracking-widest text-[9px] uppercase px-3 py-1.5 rounded-full border border-brand-on-primary-container/20">
                        {t.featuredProgramTag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-8 flex flex-col justify-between text-left space-y-6">
                    <div>
                      <span className="inline-block bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        {categoryTranslations[course.category] || course.category}
                      </span>
                      <h2 className="text-xl font-bold text-slate-800 tracking-tight leading-snug mt-3">
                        {course.titlePt}
                      </h2>
                      
                      <div className="flex items-center gap-4 mt-3 text-slate-400 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{course.durationPt}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5" />
                          <span>{course.levelPt}</span>
                        </span>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mt-4 text-xs">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          {t.prerequisitesLabel}
                        </h4>
                        <p className="text-brand-on-surface-variant font-medium">
                          {course.prerequisitesPt}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center -space-x-2 select-none">
                        <img 
                          className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmZ_8QvRk0DVasUn_cJznSIBJLxYpuM3Lb8ZVztBhSdcen_ECjlsLLXqn35RK9-hHcaaeOF0vSGcRdYgJnLoV0BWWk0WT9gkLV-Y2FpasAns7OP11umldgsZ3TQuiZJVTFLKEuZX72UqOeN-2ClES_CQDEngSlRuuh8CiPKJ-Agumhwb6f5LzB6Em0TjhIU2lkBHe-6zg3x5vBiZiLExxs4SJS3Q3A-KLjTxP2a0dySVhZ0CneIqM7cDet30nMJ38zg0pd2VPcR-vA" 
                          alt="Professor facial avatar" 
                        />
                        <img 
                          className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSbwYospGBORv3_LYOO8Mk7ZB-yCH7VkQd6EtwPCG95SYU1BbOKv9FmAgn9v4ytU4nOPkoWt0VpQY6nqqD2Yz6xuMrq5u7_oEM7soZGHRvD0SGx6XcfqY_FztQT2Pgo8gk6OTKTOrUi3XF6gA8xff9ilcyij3KriX42UJRihwdbsLUkEZQPF1AKNX0RIjFl64WxX8L5ghZWyjzqOcormwufzBuD_Q3TQyOaQJ9770zrNcwzmgXJJELQCVvc5wfc5tFQS5S5tAscZr4" 
                          alt="Professor facial avatar" 
                        />
                        <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-500 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                          +2
                        </div>
                      </div>
                      <button 
                        onClick={() => setSyllabusCourse(course)}
                        className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-primary-container transition-all shadow-xs shrink-0 cursor-pointer outline-none"
                      >
                        {t.btnViewCurriculum}
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div 
                  key={course.id} 
                  className="lg:col-span-4 bg-white border border-brand-outline-variant/60 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between h-full animate-in fade-in duration-300"
                >
                  <div className="p-6 text-left space-y-4 flex-grow">
                    <span className="inline-block bg-slate-50 border border-slate-100 text-brand-primary text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {categoryTranslations[course.category] || course.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                      {course.titlePt}
                    </h3>
                    
                    <div className="flex gap-4 text-[10px] text-slate-400 font-semibold font-mono uppercase tracking-wide py-1">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.durationPt}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-3 w-3" />
                        <span>{course.levelPt}</span>
                      </span>
                    </div>

                    <p className="text-xs text-brand-on-surface-variant leading-relaxed line-clamp-3">
                      {course.descriptionPt}
                    </p>

                    <div className="pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                        {t.keySubjectsLabel}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.skills.slice(0, 3).map((sk) => (
                          <span key={sk} className="bg-brand-surface py-1 px-2.5 rounded text-[10px] font-bold text-brand-primary">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => startApplicationForCourse(course.id)}
                      className="w-full border border-brand-primary text-brand-primary py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-brand-primary/5 transition-all outline-none cursor-pointer"
                    >
                      {t.btnApplyNow}
                    </button>
                  </div>
                </div>
              );
            }
          })
        )}

        <div className="col-span-12 mt-8 bg-brand-primary-container rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-white gap-6">
          <div className="text-left max-w-xl space-y-2">
            <h2 className="text-xl md:text-2xl font-black">{t.cantFindTitle}</h2>
            <p className="text-xs md:text-sm text-brand-surface-container/90 leading-relaxed font-light">
              {t.cantFindSub}
            </p>
          </div>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="px-8 py-4 bg-white text-brand-primary rounded-full font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-brand-surface-low transition-all shrink-0 outline-none cursor-pointer"
          >
            {t.btnScheduleCall}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
