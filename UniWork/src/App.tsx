import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle } from "lucide-react";

import { Student, Professor, Course } from "./types";
import { translations, coursesData } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RequirementsModal, HistoryModal, SyllabusModal, BookingModal } from "./components/Modals";

// Componentes de Página
import Home from "./pages/Home";
import StudentRegistration from "./pages/StudentRegistration";
import ProfessorRegistration from "./pages/ProfessorRegistration";
import Courses from "./pages/Courses";
import Registry from "./pages/Registry";
import Contact from "./pages/Contact";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Estado real do banco de dados (alimentados dinamicamente via API funcional)
  const [students, setStudents] = useState<Student[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Estados de dados dos formulários de inscrição
  const [studentForm, setStudentForm] = useState({
    name: "",
    cpf: "",
    rg: "",
    phone: "",
    courseId: "",
    address: ""
  });

  const [professorForm, setProfessorForm] = useState({
    name: "",
    cpf: "",
    expertise: "",
    phone: "",
    email: ""
  });

  // Gatilhos de visibilidade dos modais secundários
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isRequirementsOpen, setIsRequirementsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [syllabusCourse, setSyllabusCourse] = useState<Course | null>(null);

  // Estado que gerencia mensagens de Toast flutuantes
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // O aplicativo é estritamente e totalmente em Português do Brasil!
  const t = translations["pt"];

  // Efeito para buscar os dados de maneira real na API funcional Express
  const fetchApiData = async () => {
    try {
      const [resStudents, resProfs] = await Promise.all([
        fetch("/api/students"),
        fetch("/api/professors")
      ]);
      if (resStudents.ok) {
        const sData = await resStudents.json();
        setStudents(sData);
      }
      if (resProfs.ok) {
        const pData = await resProfs.json();
        setProfessors(pData);
      }
    } catch (err) {
      console.error("Erro ao obter dados cadastrais da API Express:", err);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  // Auto-fechamento do banner de feedback Toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Rola suavemente a tela ao topo na mudança de rotas
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Função de máscara padronizada para CPF brasileiro: 000.000.000-00
  const formatCPF = (val: string) => {
    let clean = val.replace(/\D/g, "");
    if (clean.length > 11) clean = clean.slice(0, 11);
    if (clean.length > 9) {
      return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6, 9)}-${clean.slice(9)}`;
    } else if (clean.length > 6) {
      return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6)}`;
    } else if (clean.length > 3) {
      return `${clean.slice(0, 3)}.${clean.slice(3)}`;
    }
    return clean;
  };

  // Função de máscara padronizada para RG paulista/geral tradicional: XX.XXX.XXX-X
  // O RG no formato oficial tradicional possui 9 caracteres no total: composto de 8 números e 1 dígito (que pode ser número ou X/x).
  const formatRG = (val: string) => {
    let clean = val.replace(/[^0-9Xx]/g, "");
    if (clean.length > 9) clean = clean.slice(0, 9);
    
    // Filtro para garantir o dígito verificador 'X'/'x' apenas na última posição
    if (clean.length > 1) {
      const body = clean.slice(0, -1).replace(/[Xx]/g, "");
      const last = clean.slice(-1);
      clean = body + last;
    }

    if (clean.length > 8) {
      return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5, 8)}-${clean.slice(8).toUpperCase()}`;
    } else if (clean.length > 5) {
      return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5)}`;
    } else if (clean.length > 2) {
      return `${clean.slice(0, 2)}.${clean.slice(2)}`;
    }
    return clean;
  };

  // Função de máscara flexível para telefones brasileiros: (00) 00000-0000 ou fixos
  const formatPhone = (val: string) => {
    let clean = val.replace(/\D/g, "");
    if (clean.length > 11) clean = clean.slice(0, 11);
    if (clean.length > 10) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7)}`;
    } else if (clean.length > 6) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
    } else if (clean.length > 2) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    } else if (clean.length > 0) {
      return `(${clean}`;
    }
    return clean;
  };

  const handleStudentFormChange = (key: string, value: string) => {
    let formatted = value;
    if (key === "cpf") formatted = formatCPF(value);
    if (key === "rg") formatted = formatRG(value);
    if (key === "phone") formatted = formatPhone(value);
    
    setStudentForm((prev) => ({ ...prev, [key]: formatted }));
  };

  const handleProfessorFormChange = (key: string, value: string) => {
    let formatted = value;
    if (key === "cpf") formatted = formatCPF(value);
    if (key === "phone") formatted = formatPhone(value);
    
    setProfessorForm((prev) => ({ ...prev, [key]: formatted }));
  };

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentForm.name || !studentForm.cpf || !studentForm.rg || !studentForm.phone || !studentForm.courseId || !studentForm.address) {
      alert("Todos os campos de matrícula são obrigatórios!");
      return;
    }

    // Validação estrita do CPF (11 dígitos numéricos)
    const rawCpf = studentForm.cpf.replace(/\D/g, "");
    if (rawCpf.length !== 11) {
      alert("O CPF informado está incompleto ou inválido. O formato deve conter exatamente 11 dígitos numéricos (ex: 123.456.789-01).");
      return;
    }

    // Validação estrita do RG (precisa conter 9 caracteres no total, compostos por 8 números e um dígito verificador no final)
    const rawRg = studentForm.rg.replace(/[^0-9Xx]/g, "");
    if (rawRg.length !== 9) {
      alert("O RG informado está incompleto ou inválido. O formato tradicional deve possuir exatamente 9 números/caracteres (ex: 12.345.678-9 ou 12.345.678-X).");
      return;
    }

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: studentForm.name,
          cpf: studentForm.cpf,
          rg: studentForm.rg,
          phone: studentForm.phone,
          courseId: studentForm.courseId,
          address: studentForm.address
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao criar estudante na API");
      }

      const savedStudent = await response.json();
      setStudents((prev) => [savedStudent, ...prev]);
      setToastMessage(t.toastSuccessStudent);
      
      // Reseta todos os inputs de formulário discente
      setStudentForm({
        name: "",
        cpf: "",
        rg: "",
        phone: "",
        courseId: "",
        address: ""
      });

      // Redireciona o usuário para a Página Inicial pós-matrícula acadêmica bem sucedida
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      alert("Ocorreu um erro ao registrar a matrícula na API do servidor.");
    }
  };

  const handleProfessorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!professorForm.name || !professorForm.cpf || !professorForm.expertise || !professorForm.phone || !professorForm.email) {
      alert("Todos os campos cadastrais são obrigatórios!");
      return;
    }

    // Validação estrita do CPF (11 dígitos numéricos)
    const rawCpf = professorForm.cpf.replace(/\D/g, "");
    if (rawCpf.length !== 11) {
      alert("O CPF informado está incompleto ou inválido. O formato deve conter exatamente 11 dígitos numéricos (ex: 123.456.789-01).");
      return;
    }

    try {
      const response = await fetch("/api/professors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: professorForm.name,
          cpf: professorForm.cpf,
          expertise: professorForm.expertise,
          phone: professorForm.phone,
          email: professorForm.email
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar professor na API");
      }

      const savedProf = await response.json();
      setProfessors((prev) => [savedProf, ...prev]);
      setToastMessage(t.toastSuccessProf);

      setProfessorForm({
        name: "",
        cpf: "",
        expertise: "",
        phone: "",
        email: ""
      });

      // Envia o usuário à página inicial do portal após cadastro com sucesso
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      alert("Ocorreu um erro ao cadastrar o perfil docente na API do servidor.");
    }
  };

  const handleDeleteStudent = async (id: string) => {
    try {
      const response = await fetch(`/api/students/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setStudents((prev) => prev.filter((s) => s.id !== id));
      } else {
        alert("Erro de comunicação com o servidor para excluir matrícula.");
      }
    } catch (err) {
      console.error("Erro ao deletar matrícula:", err);
    }
  };

  const handleDeleteProfessor = async (id: string) => {
    try {
      const response = await fetch(`/api/professors/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setProfessors((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert("Erro de comunicação com o servidor para descredenciar docente.");
      }
    } catch (err) {
      console.error("Erro ao remover professor:", err);
    }
  };

  const startApplicationForCourse = (courseId: string) => {
    setStudentForm((prev) => ({ ...prev, courseId }));
    navigate("/student-reg");
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-on-surface">
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-md w-full px-4"
          >
            <div className="bg-emerald-600 text-white p-4 rounded-lg shadow-xl flex items-start gap-3 border border-emerald-500">
              <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold font-mono tracking-wide uppercase">
                  Ação de Registro
                </p>
                <p className="text-xs mt-0.5 font-medium leading-relaxed">{toastMessage}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header 
        t={t}
      />

      <main className="flex-grow pt-16">
        {isLoadingData ? (
          <div className="flex flex-col items-center justify-center min-h-[450px] p-6 text-center gap-4">
            <div className="h-10 w-10 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
            <div>
              <p className="text-sm font-bold text-brand-primary">Conectando ao Banco de Dados...</p>
              <p className="text-xs text-brand-on-surface-variant mt-1">Carregando informações da API funcional.</p>
            </div>
          </div>
        ) : (
          <Routes>
            <Route 
              path="/" 
              element={<Home t={t} setIsRequirementsOpen={setIsRequirementsOpen} />} 
            />
            <Route 
              path="/student-reg" 
              element={
                <StudentRegistration 
                  t={t} 
                  studentForm={studentForm} 
                  onStudentFormChange={handleStudentFormChange} 
                  onSubmit={handleStudentSubmit} 
                  courses={coursesData} 
                />
              } 
            />
            <Route 
              path="/prof-reg" 
              element={
                <ProfessorRegistration 
                  t={t} 
                  professorForm={professorForm} 
                  onProfessorFormChange={handleProfessorFormChange} 
                  onSubmit={handleProfessorSubmit} 
                />
              } 
            />
            <Route 
              path="/courses" 
              element={
                <Courses 
                  t={t} 
                  setSyllabusCourse={setSyllabusCourse} 
                  setIsBookingOpen={setIsBookingOpen} 
                  startApplicationForCourse={startApplicationForCourse} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={<Contact t={t} />} 
            />
            <Route 
              path="/registry" 
              element={
                <Registry 
                  students={students}
                  onDeleteStudent={handleDeleteStudent}
                  professors={professors}
                  onDeleteProfessor={handleDeleteProfessor}
                  courses={coursesData}
                  t={t}
                />
              } 
            />
          </Routes>
        )}
      </main>

      <Footer 
        t={t} 
      />

      <HistoryModal 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
        t={t} 
      />

      <RequirementsModal 
        isOpen={isRequirementsOpen} 
        onClose={() => setIsRequirementsOpen(false)} 
        t={t} 
      />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        t={t} 
      />

      <SyllabusModal 
        isOpen={syllabusCourse !== null} 
        onClose={() => setSyllabusCourse(null)} 
        t={t} 
        course={syllabusCourse} 
      />
    </div>
  );
}
