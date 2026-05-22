import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  ChevronRight, 
  Star, 
  School, 
  BookOpen
} from "lucide-react";
import { TranslationDictionary } from "../types";

interface HomeProps {
  t: TranslationDictionary;
  setIsRequirementsOpen: (open: boolean) => void;
}

export default function Home({ t, setIsRequirementsOpen }: HomeProps) {
  return (
    <div className="space-y-0">
      <section className="relative h-[650px] md:h-[720px] flex items-center overflow-hidden bg-brand-primary-container">
        <div className="absolute inset-0 z-0 border-0">
          <img 
            className="w-full h-full object-cover opacity-60 filter saturate-[1.1] scale-105"
            alt="Prestigious stone university campus stone arches landscape"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxfIpbvdopcG2Qi5R9OECsEDSvGxaLgVONGAsMXWLbJnJVnfXbuKEo5Y4YyYEgVzrEnrPy5UfWKMteb1NWgrZ8hzILrTsEXpJcdKraiYJFHsaYscuMtKzDE_OnJcoSTCte7rS2B66yYyA2ZU3gyB1wSkXhX3DWQWc2EsrO7o5ZYVS9hgTBbAUuEG0zd5DP7DybWq8P-hbGVQLUk9h4PXx1d2Op3yZEfRkOTv9Ptw42-XCw34kXyjghT6UEJQrppUWUaKzEEnzyo3yN"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-container via-brand-primary-container/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 w-full text-white">
          <div className="max-w-2xl text-left space-y-6">
            <span className="inline-block bg-brand-primary/40 backdrop-blur-md text-brand-on-primary-container px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase border border-brand-on-primary-container/20">
              {t.welcomeTag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-brand-surface-container leading-relaxed font-light">
              {t.heroSub}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/courses"
                className="bg-white text-brand-primary px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide shadow-lg hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all outline-none inline-flex items-center"
              >
                {t.btnExplore}
              </Link>
              <Link 
                to="/student-reg"
                className="border border-white/60 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide bg-white/5 hover:bg-white/15 hover:border-white transition-all outline-none inline-flex items-center"
              >
                {t.btnApply}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-brand-outline-variant/40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-brand-primary font-black text-3xl md:text-4xl group-hover:scale-105 transition-transform duration-200">15k+</div>
            <div className="text-brand-on-surface-variant font-bold text-[10px] tracking-widest uppercase mt-1">
              Alunos Ativos
            </div>
          </div>
          <div className="text-center group">
            <div className="text-brand-primary font-black text-3xl md:text-4xl group-hover:scale-105 transition-transform duration-200">120+</div>
            <div className="text-brand-on-surface-variant font-bold text-[10px] tracking-widest uppercase mt-1">
              Professores PhD
            </div>
          </div>
          <div className="text-center group">
            <div className="text-brand-primary font-black text-3xl md:text-4xl group-hover:scale-105 transition-transform duration-200">98%</div>
            <div className="text-brand-on-surface-variant font-bold text-[10px] tracking-widest uppercase mt-1">
              Sucesso Profissional
            </div>
          </div>
          <div className="text-center group">
            <div className="text-brand-primary font-black text-3xl md:text-4xl group-hover:scale-105 transition-transform duration-200">100%</div>
            <div className="text-brand-on-surface-variant font-bold text-[10px] tracking-widest uppercase mt-1">
              Credenciado MEC
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">{t.aboutRigorTitle}</h3>
            <p className="text-xs text-brand-on-surface-variant leading-relaxed font-sans">
              {t.aboutRigorSub}
            </p>
          </div>

          <div className="space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="h-12 w-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center">
              <School className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">{t.aboutVisionTitle}</h3>
            <p className="text-xs text-brand-on-surface-variant leading-relaxed font-sans">
              {t.aboutVisionSub}
            </p>
          </div>

          <div className="space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">{t.aboutCommunityTitle}</h3>
            <p className="text-xs text-brand-on-surface-variant leading-relaxed font-sans">
              {t.aboutCommunitySub}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50/50 border-t border-b border-brand-outline-variant/30 text-left">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-xl space-y-3">
            <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded font-mono text-[10px] uppercase font-bold tracking-widest leading-none">
              Destaques Acadêmicos
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">
              Pilares de Liderança Tecnológica
            </h2>
            <p className="text-xs text-brand-on-surface-variant leading-relaxed">
              Explore nossos departamentos de ponta projetados para impulsionar sua carreira em direção à inovação prática e excelência profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-brand-outline-variant/60 shadow-xxs overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Students coding together in visual computing deep lab layout"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNhCnc1glMrJv5p3prPz1jeKwy90tCm5DnqNAgBGt531DFnJrQiMbXFCql0aPRP3s-il_Q2dZ7qZ1hboB__5IK4HWXdH9-VVomFh9Pd00pe2b7uqmmWCBwba_23YRoxSCmam4BCSmuKs-ioZ1JFfQK3vCq64oGgJDU7lLHE1MkGXjG8RTwL2JP3mf9tC3OR8KA_uCSg8fLsMVjl73uBX8mi0ZpX3l5XVzSV55SwWlnYQ6GxSF82kIdolH-CYR4lF_5bukjeTFuFhLH"
                />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                  Engenharia
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex text-amber-500 gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 tracking-tight leading-tight mb-2 group-hover:text-brand-primary transition-colors">
                    Inteligência Artificial e Análise de Dados
                  </h3>
                  <p className="text-xs text-brand-on-surface-variant leading-relaxed line-clamp-3">
                    Domine o futuro das tecnologias cognitivas com nosso curso avançado, abrangendo redes neurais.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                  <span className="text-xs font-semibold text-slate-700">Dr. Sarah Chen</span>
                  <Link 
                    to="/courses"
                    className="p-1.5 hover:bg-slate-50 text-brand-primary rounded-full transition-colors outline-none inline-flex items-center"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-brand-outline-variant/60 shadow-xxs overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Modern corporate workspace discussion with diagrams on charts"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7dx0T7JDbLEmCiV2ojLT6PH2fjUI8vPiWhMdpPjJcXHgfIhdRhMKDfj1-PGv_I6fWwnbf9OmIF38mOK0i7kXqT2cW7CvnKr4eJ68S4N9esND7S3ipAPMgmTwUXJhHVSG6FumMz1d8ldv0LDChGaqFvhUc3eTudkFE9Kr9O7y7NUvvmvxm2URi14KJ86hhJiJxkYgH_3ijTTWv4vYpveaFFA5gmNWj9XLhUZ-E0oRrvqXARn9JTvt9l6VabrNWjFAFPmaMeW9CPOAe"
                />
                <span className="absolute top-3 left-3 bg-purple-600 text-white font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                  Negócios
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex text-amber-500 gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 tracking-tight leading-tight mb-2 group-hover:text-brand-primary transition-colors">
                    Liderança Estratégica & MBA Executivo
                  </h3>
                  <p className="text-xs text-brand-on-surface-variant leading-relaxed line-clamp-3">
                    Capacitando a nova geração de executivos e corporativos com visão global estratégica estruturada.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                  <span className="text-xs font-semibold text-slate-700">Prof. Marcus Sterling</span>
                  <Link 
                    to="/courses"
                    className="p-1.5 hover:bg-slate-50 text-brand-primary rounded-full transition-colors outline-none inline-flex items-center"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-brand-outline-variant/60 shadow-xxs overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Scientist handling micro samples behind heavy research goggles setup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW6Rxrp_6Dt0rW2Yg3Wgge46RzvIIpQ9KSLxRWNsSwJ71xyRzYIADDr9yTlFN_70oB5rohgByJv-amfl0gqEicpX3h9WcK8hr5dcmEwpGpBU2U6NN-pPqWr9qUL9qWv8f91iEc2WFNIEEwIDUV03Zmq1pu510yqOeixs509nSeROre_tkIHskbaZgT_rfYgiZ10MoZ5XBAIN4dExnOPIPxoXI0ogb1GcCEyEbTLdCfPnEcTahcUBQ7wTAGna9vxAIwEesFidTLSfJ2"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                  Medicina
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex text-amber-500 gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 tracking-tight leading-tight mb-2 group-hover:text-brand-primary transition-colors">
                    Pesquisa em Ciências Biomédicas
                  </h3>
                  <p className="text-xs text-brand-on-surface-variant leading-relaxed line-clamp-3">
                    Liderando descobertas na saúde humana por meio de intensivos estudos laboratoriais aplicados.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                  <span className="text-xs font-semibold text-slate-700">Dr. Sarah Chen</span>
                  <Link 
                    to="/courses"
                    className="p-1.5 hover:bg-slate-50 text-brand-primary rounded-full transition-colors outline-none inline-flex items-center"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "42px 42px" }}></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {t.journeyTitle}
          </h2>
          <p className="text-sm md:text-base text-brand-on-primary-container leading-relaxed max-w-xl mx-auto font-light">
            {t.journeySub}
          </p>
          <div className="flex justify-center flex-wrap gap-4 pt-4">
            <Link 
              to="/student-reg"
              className="bg-white text-brand-primary px-8 py-3 rounded-lg font-bold text-xs tracking-wider uppercase hover:shadow-2xl hover:-translate-y-0.5 transition-all outline-none inline-flex items-center"
            >
              {t.btnGetStarted}
            </Link>
            <button 
              onClick={() => setIsRequirementsOpen(true)}
              className="border border-white text-white px-8 py-3 rounded-lg font-bold text-xs tracking-wider uppercase bg-white/5 hover:bg-white/10 transition-all outline-none cursor-pointer"
            >
              {t.btnViewReq}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
