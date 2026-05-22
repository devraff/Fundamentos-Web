import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Arquivos para guardar os cadastros em formato JSON de verdade!
  const STUDENTS_FILE = path.join(process.cwd(), "students_db.json");
  const PROFESSORS_FILE = path.join(process.cwd(), "professors_db.json");
  const CONTACTS_FILE = path.join(process.cwd(), "contacts_db.json");

  // Dados iniciais em Português do Brasil
  const initialStudents = [
    {
      id: "std-1",
      name: "Gabriela Mendes Silva",
      cpf: "123.456.789-01",
      rg: "12.345.678-9",
      phone: "(11) 98765-4321",
      courseId: "biotech",
      address: "Rua das Flores, 456, Moema, São Paulo - SP",
      registeredAt: "2026-05-18T10:30:00Z"
    },
    {
      id: "std-2",
      name: "Arthur de Oliveira",
      cpf: "987.654.321-00",
      rg: "98.765.432-1",
      phone: "(21) 99888-7766",
      courseId: "ai",
      address: "Av. Atlântica, 1020, Copacabana, Rio de Janeiro - RJ",
      registeredAt: "2026-05-20T14:45:00Z"
    },
    {
      id: "std-3",
      name: "Sophia Vance Alvarez",
      cpf: "455.667.112-99",
      rg: "44.555.666-7",
      phone: "(31) 97711-2233",
      courseId: "medical",
      address: "Rua Paraíba, 789, Savassi, Belo Horizonte - MG",
      registeredAt: "2026-05-21T09:15:00Z"
    }
  ];

  const initialProfessors = [
    {
      id: "prof-1",
      name: "Dr. Helena Vance",
      cpf: "111.222.333-44",
      expertise: "Ciência da Computação (IA)",
      phone: "+55 (11) 96111-2222",
      email: "helena.vance@university.edu",
      registeredAt: "2024-02-15T08:00:00Z"
    },
    {
      id: "prof-2",
      name: "Prof. Julian Thorne",
      cpf: "555.666.777-88",
      expertise: "Administração de Negócios (Liderança)",
      phone: "+55 (11) 96555-6666",
      email: "julian.thorne@university.edu",
      registeredAt: "2024-03-10T11:20:00Z"
    },
    {
      id: "prof-3",
      name: "Dr. Sarah Chen",
      cpf: "999.888.777-66",
      expertise: "Ciências Biológicas (Biotecnologia)",
      phone: "+55 (21) 99999-8888",
      email: "sarah.chen@university.edu",
      registeredAt: "2023-11-05T09:00:00Z"
    }
  ];

  // Métodos utilitários de acesso a disco
  const getStudents = () => {
    if (!fs.existsSync(STUDENTS_FILE)) {
      fs.writeFileSync(STUDENTS_FILE, JSON.stringify(initialStudents, null, 2), "utf8");
    }
    try {
      return JSON.parse(fs.readFileSync(STUDENTS_FILE, "utf8"));
    } catch {
      return initialStudents;
    }
  };

  const saveStudents = (data: any) => {
    fs.writeFileSync(STUDENTS_FILE, JSON.stringify(data, null, 2), "utf8");
  };

  const getProfessors = () => {
    if (!fs.existsSync(PROFESSORS_FILE)) {
      fs.writeFileSync(PROFESSORS_FILE, JSON.stringify(initialProfessors, null, 2), "utf8");
    }
    try {
      return JSON.parse(fs.readFileSync(PROFESSORS_FILE, "utf8"));
    } catch {
      return initialProfessors;
    }
  };

  const saveProfessors = (data: any) => {
    fs.writeFileSync(PROFESSORS_FILE, JSON.stringify(data, null, 2), "utf8");
  };

  // Rotas de API - Estudantes
  app.get("/api/students", (req, res) => {
    res.json(getStudents());
  });

  app.post("/api/students", (req, res) => {
    const { name, cpf, rg, phone, courseId, address } = req.body;
    if (!name || !cpf || !rg || !phone || !courseId || !address) {
      return res.status(400).json({ error: "Todos os campos de matrícula são obrigatórios!" });
    }
    
    // Validação complementar simples de formato
    const list = getStudents();
    const newStudent = {
      id: `std-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name,
      cpf,
      rg,
      phone,
      courseId,
      address,
      registeredAt: new Date().toISOString()
    };
    list.unshift(newStudent);
    saveStudents(list);
    res.status(201).json(newStudent);
  });

  app.delete("/api/students/:id", (req, res) => {
    const id = req.params.id;
    let list = getStudents();
    list = list.filter((s: any) => s.id !== id);
    saveStudents(list);
    res.json({ success: true });
  });

  // Rotas de API - Professores
  app.get("/api/professors", (req, res) => {
    res.json(getProfessors());
  });

  app.post("/api/professors", (req, res) => {
    const { name, cpf, expertise, phone, email } = req.body;
    if (!name || !cpf || !expertise || !phone || !email) {
      return res.status(400).json({ error: "Todos os campos cadastrais são obrigatórios!" });
    }
    const list = getProfessors();
    const newProf = {
      id: `prof-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name,
      cpf,
      expertise,
      phone,
      email,
      registeredAt: new Date().toISOString()
    };
    list.unshift(newProf);
    saveProfessors(list);
    res.status(201).json(newProf);
  });

  app.delete("/api/professors/:id", (req, res) => {
    const id = req.params.id;
    let list = getProfessors();
    list = list.filter((p: any) => p.id !== id);
    saveProfessors(list);
    res.json({ success: true });
  });

  // Rota de API - Contato/Ouvidoria (salva em banco JSON real)
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Todos os campos do formulário de contato são obrigatórios!" });
    }

    let contacts = [];
    if (fs.existsSync(CONTACTS_FILE)) {
      try {
        contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, "utf8"));
      } catch {
        contacts = [];
      }
    }

    const newContact = {
      id: `contact-${Date.now()}`,
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString()
    };

    contacts.unshift(newContact);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), "utf8");
    res.status(201).json({ success: true, contact: newContact });
  });

  // Inicialização do Vite ou de arquivos estáticos de produção
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server rodando com API funcional na porta ${PORT}`);
  });
}

startServer();
