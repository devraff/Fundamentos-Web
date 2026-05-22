import { TranslationDictionary, Course, Student, Professor } from "./types";

// Todos os textos de tradução em Português do Brasil
const portugueseTranslations: TranslationDictionary = {
  brandName: "Academia Excellence",
  portalTitle: "Portal Academia",
  navHome: "Início",
  navStudentReg: "Matrícula de Estudante",
  navProfReg: "Cadastro de Professor",
  navCourses: "Cursos Intellectus",
  navContact: "Contato",
  navRegistry: "Registros de Licença",
  
  welcomeTag: "BEM-VINDO À ACADEMIA EXCELLENCE",
  heroTitle: "Empoderando Mentes, Formando os Líderes Globais de Amanhã",
  heroSub: "Acesse um ecossistema acadêmico de classe mundial projetado para alta performance. Gerencie seus cursos perfeitamente, conecte-se com docentes distintos e acompanhe seu progresso.",
  btnExplore: "Explorar Cursos",
  btnApply: "Inscreva-se Já",
  
  successRate: "Taxa de Sucesso",
  activeStudents: "Alunos Ativos",
  degreePrograms: "Programas Acadêmicos",
  globalPartners: "Parceiros Globais",
  
  aboutTitle: "Sobre Nossa Instituição",
  aboutSub: "Fundada sob os princípios de integridade e inovação, a Academia Excellence serve como farol de crescimento intelectual e desenvolvimento profissional.",
  aboutLearnMore: "Saiba mais sobre nossa história",
  aboutVisionTitle: "Nossa Visão para 2030",
  aboutVisionSub: "Pioneirismo na transformação digital da educação superior para conectar todos os cantos do globo.",
  aboutRigorTitle: "Rigor Acadêmico",
  aboutRigorSub: "Currículos elaborados por especialistas da indústria e educadores veteranos.",
  aboutCommunityTitle: "Comunidade Global",
  aboutCommunitySub: "Conecte-se a uma rede de mais de 100.000 ex-alunos em todo o mundo.",
  
  featuredDisciplines: "Disciplinas de Destaque",
  
  journeyTitle: "Pronto para Começar sua Jornada?",
  journeySub: "Junte-se a uma comunidade de acadêmicos dedicados a fazer a diferença no mundo. Matrículas abertas para o próximo semestre.",
  btnGetStarted: "Começar Agora",
  btnViewReq: "Ver Requisitos",
  requirementsTitle: "Requisitos de Admissão",
  requirementsSub: "Analise a lista abaixo para preparar sua pasta de inscrição para a Academia Excellence.",
  requirementsList: [
    "Histórico escolar oficial do ensino médio ou equivalente com médias excelentes (Média >= 7.5)",
    "Documentação nacional legível: RG válido (tradicional com 9 dígitos) e CPF ativo",
    "Carta de Intenção de 500 palavras destacando conquistas acadêmicas e planos futuros",
    "Duas cartas de recomendação acadêmica assinadas por docentes ou orientadores anteriores",
    "Exame de proficiência linguística para candidatos internacionais"
  ],
  
  studentRegTitle: "Matrícula de Estudante",
  studentRegSub: "Preencha os detalhes oficiais para criar seu registro acadêmico e matrícula eletrônica.",
  startJourney: "Inicie Sua Jornada",
  startJourneySub: "Integre-se à nossa comunidade acadêmica e acesse recursos de alta pontuação, professores especialistas e uma vida estudantil vibrante.",
  benefitAccredited: "Programas Credenciados pelo MEC",
  benefitSecure: "Matrícula Direta e Segura",
  benefitSupport: "Suporte Acadêmico 24/7",
  
  profRegTitle: "Cadastro de Professor",
  profRegSub: "Preencha os detalhes oficiais para criar seu perfil docente acadêmico no sistema.",
  joinAcademicTitle: "Faça Parte de Nossa Excelência Acadêmica",
  joinAcademicSub: "Registre-se como docente para acessar ferramentas de gestão de disciplinas, interagir com estudantes e compartilhar seu conhecimento em nossa rede.",
  curriculumToolsTitle: "Gestão Curricular Dinâmica",
  curriculumToolsSub: "Gerenciamento avançado de seus materiais pedagógicos e planos de aula.",
  studentPortalTitle: "Portal do Docente",
  studentPortalSub: "Comunicação contínua e feedback com todas as suas turmas matriculadas.",
  
  coursesTitle: "Nossos Cursos Oferecidos",
  coursesSub: "Descubra nossa gama de programas acadêmicos projetados para capacitar a próxima geração de líderes e inventores.",
  allCategories: "Categorias",
  durationFilter: "Duração do Curso",
  showingCourses: "Mostrando cursos ativos",
  searchPlaceholder: "Pesquisar cursos...",
  featuredProgramTag: "Programa de Alto Escopo",
  prerequisitesLabel: "Pré-requisitos",
  keySubjectsLabel: "Principais Matérias",
  btnViewCurriculum: "Ver Grade Curricular",
  btnApplyNow: "Inscrever-se no Curso",
  cantFindTitle: "Não encontrou o que estava procurando?",
  cantFindSub: "Nossos consultores acadêmicos estão disponíveis para orientação individual para encontrar o melhor programa para suas metas profissionais.",
  btnScheduleCall: "Agendar Orientação Individual",
  
  fullNameLabel: "Nome Completo",
  cpfLabel: "CPF (Cadastro de Pessoas Físicas)",
  rgLabel: "RG (Registro Geral)",
  phoneLabel: "Número de Telefone",
  courseSelectionLabel: "Opção de Curso",
  addressLabel: "Endereço Residencial Completo",
  expertiseLabel: "Área de Atuação Pedagógica",
  emailLabel: "Endereço de E-mail Institucional",
  registerButton: "Confirmar Cadastro",
  registeringDisclaimer: "Ao se registrar, você concorda com nossos Termos de Serviço e Política de Privacidade e Tratamento de Dados (LGPD).",
  
  footerDesc: "Uma instituição de destaque consagrada à excelência acadêmica e ao progresso integral dos discentes por mais de um século.",
  quickLinks: "Acesso Rápido",
  contactInfo: "Informações de Contato",
  addressValue: "Av. Universitária, 123 - Cidade Acadêmica, São Paulo - SP",
  phoneValue: "+55 (11) 4004-ACAD",
  allRightsReserved: "Portal Institucional da Faculdade de Excelência Acadêmica. Todos os direitos reservados.",
  
  toastSuccessStudent: "Estudante matriculado com sucesso no banco de dados! Bem-vindo ao corpo discente.",
  toastSuccessProf: "Professor credenciado com sucesso no banco de dados! Perfil pedagógico registrado.",
  alertTitle: "Mensagem Institucional",
  closeLabel: "Fechar"
};

// Ambas as rotas usam português para descantar qualquer texto corporativo em inglês
export const translations: Record<"en" | "pt", TranslationDictionary> = {
  en: portugueseTranslations,
  pt: portugueseTranslations
};

export const coursesData: Course[] = [
  {
    id: "biotech",
    titleEn: "Bacharelado em Biotecnologia Avançada",
    titlePt: "Bacharelado em Biotecnologia Avançada",
    category: "Science",
    durationEn: "4 Anos",
    durationPt: "4 Anos",
    levelEn: "Bacharelado",
    levelPt: "Bacharelado",
    descriptionEn: "Um mergulho profundo na manipulação celular, edição ética de genes, desenvolvimento de bioprocessos e inovações farmacêuticas para formar bioquímicos de ponta.",
    descriptionPt: "Um mergulho profundo na manipulação celular, edição ética de genes, desenvolvimento de bioprocessos e inovações farmacêuticas para formar bioquímicos de ponta.",
    profName: "Dra. Sarah Chen & Equipe",
    profImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW6Rxrp_6Dt0rW2Yg3Wgge46RzvIIpQ9KSLxRWNsSwJ71xyRzYIADDr9yTlFN_70oB5rohgByJv-amfl0gqEicpX3h9WcK8hr5dcmEwpGpBU2U6NN-pPqWr9qUL9qWv8f91iEc2WFNIEEwIDUV03Zmq1pu510yqOeixs509nSeROre_tkIHskbaZgT_rfYgiZ10MoZ5XBAIN4dExnOPIPxoXI0ogb1GcCEyEbTLdCfPnEcTahcUBQ7wTAGna9vxAIwEesFidTLSfJ2",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD81QKSosoYShKLxsBxuJj9eLvHI6hXoheHv_L6lyFy9LwwirwP_isLzPi8K0E9EsEBUuzxr2GmdRkFl2f_33anstSR14ASH346pUU2UM6NfKGIB5QTXaCs-vNz_UGH7hd9dTGTBQ1Qs0PLkYmx__SufM3WBCZAXi887ZvBdvLrQIWXHIyPCFB9qkCw9PPlbPe2H8fqfZgY8Xg2h6QZ1jOyCa2cku3lWppXvbnefUPXDo_NMwvEHTzGzZjftvGvCRU0clKgCmsjE254",
    prerequisitesEn: "Química Avançada, Fundamentos Biológicos, Cálculo I.",
    prerequisitesPt: "Química Avançada, Fundamentos Biológicos, Cálculo I.",
    skills: ["Genética", "CRISPR", "Bioreatores", "Farmacologia", "Síntese Celular"],
    featured: true
  },
  {
    id: "ai",
    titleEn: "Inteligência Artificial e Análise de Dados",
    titlePt: "Inteligência Artificial e Análise de Dados",
    category: "Engineering",
    durationEn: "4 Anos",
    durationPt: "4 Anos",
    levelEn: "Sistemas & Tecnologias",
    levelPt: "Sistemas & Tecnologias",
    descriptionEn: "Domine o futuro das tecnologias cognitivas com nosso curso avançado, abrangendo redes neurais, aprendizado profundo e sistemas inteligentes de tomada de decisão.",
    descriptionPt: "Domine o futuro das tecnologias cognitivas com nosso curso avançado, abrangendo redes neurais, aprendizado profundo e sistemas inteligentes de tomada de decisão.",
    profName: "Dra. Helena Vance",
    profImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNhCnc1glMrJv5p3prPz1jeKwy90tCm5DnqNAgBGt531DFnJrQiMbXFCql0aPRP3s-il_Q2dZ7qZ1hboB__5IK4HWXdH9-VVomFh9Pd00pe2b7uqmmWCBwba_23YRoxSCmam4BCSmuKs-ioZ1JFfQK3vCq64oGgJDU7lLHE1MkGXjG8RTwL2JP3mf9tC3OR8KA_uCSg8fLsMVjl73uBX8mi0ZpX3l5XVzSV55SwWlnYQ6GxSF82kIdolH-CYR4lF_5bukjeTFuFhLH",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNhCnc1glMrJv5p3prPz1jeKwy90tCm5DnqNAgBGt531DFnJrQiMbXFCql0aPRP3s-il_Q2dZ7qZ1hboB__5IK4HWXdH9-VVomFh9Pd00pe2b7uqmmWCBwba_23YRoxSCmam4BCSmuKs-ioZ1JFfQK3vCq64oGgJDU7lLHE1MkGXjG8RTwL2JP3mf9tC3OR8KA_uCSg8fLsMVjl73uBX8mi0ZpX3l5XVzSV55SwWlnYQ6GxSF82kIdolH-CYR4lF_5bukjeTFuFhLH",
    prerequisitesEn: "Álgebra Linear, Lógica de Programação, Probabilidade e Estatística.",
    prerequisitesPt: "Álgebra Linear, Lógica de Programação, Probabilidade e Estatística.",
    skills: ["Aprendizado Profundo", "TensorFlow", "Big Data", "Mineração de Dados", "Visão Computacional"],
    featured: false
  },
  {
    id: "mba",
    titleEn: "Liderança Estratégica & MBA Executivo",
    titlePt: "Liderança Estratégica & MBA Executivo",
    category: "Business",
    durationEn: "2 Anos",
    durationPt: "2 Anos",
    levelEn: "Pós-Graduação",
    levelPt: "Pós-Graduação",
    descriptionEn: "Capacitando a nova geração de executivos e corporativos com visão global estratégica, finanças avançadas e gestão de talentos de alto escalão.",
    descriptionPt: "Capacitando a nova geração de executivos e corporativos com visão global estratégica, finanças avançadas e gestão de talentos de alto escalão.",
    profName: "Prof. Julian Thorne",
    profImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7dx0T7JDbLEmCiV2ojLT6PH2fjUI8vPiWhMdpPjJcXHgfIhdRhMKDfj1-PGv_I6fWwnbf9OmIF38mOK0i7kXqT2cW7CvnKr4eJ68S4N9esND7S3ipAPMgmTwUXJhHVSG6FumMz1d8ldv0LDChGaqFvhUc3eTudkFE9Kr9O7y7NUvvmvxm2URi14KJ86hhJiJxkYgH_3ijTTWv4vYpveaFFA5gmNWj9XLhUZ-E0oRrvqXARn9JTvt9l6VabrNWjFAFPmaMeW9CPOAe",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7dx0T7JDbLEmCiV2ojLT6PH2fjUI8vPiWhMdpPjJcXHgfIhdRhMKDfj1-PGv_I6fWwnbf9OmIF38mOK0i7kXqT2cW7CvnKr4eJ68S4N9esND7S3ipAPMgmTwUXJhHVSG6FumMz1d8ldv0LDChGaqFvhUc3eTudkFE9Kr9O7y7NUvvmvxm2URi14KJ86hhJiJxkYgH_3ijTTWv4vYpveaFFA5gmNWj9XLhUZ-E0oRrvqXARn9JTvt9l6VabrNWjFAFPmaMeW9CPOAe",
    prerequisitesEn: "Experiência de 3+ anos em gestão, Graduação em qualquer área jurídica ou afim.",
    prerequisitesPt: "Experiência de 3+ anos em gestão, Graduação em qualquer área.",
    skills: ["Economia Global", "Estratégia de M&A", "Capital Humano", "Valuation", "Escalonamento Ágil"],
    featured: false
  },
  {
    id: "medical",
    titleEn: "Pesquisa em Ciências Biomédicas",
    titlePt: "Pesquisa em Ciências Biomédicas",
    category: "Medicine",
    durationEn: "5 Anos",
    durationPt: "5 Anos",
    levelEn: "Graduação Integrada",
    levelPt: "Graduação Integrada",
    descriptionEn: "Liderando descobertas na saúde humana por meio de intensivos estudos laboratoriais, fisiologia médica e análises clínicas avançadas repletas de práticas de bancada.",
    descriptionPt: "Liderando descobertas na saúde humana por meio de intensivos estudos laboratoriais, fisiologia médica e análises clínicas avançadas repletas de práticas de bancada.",
    profName: "Dr. Sarah Chen",
    profImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW6Rxrp_6Dt0rW2Yg3Wgge46RzvIIpQ9KSLxRWNsSwJ71xyRzYIADDr9yTlFN_70oB5rohgByJv-amfl0gqEicpX3h9WcK8hr5dcmEwpGpBU2U6NN-pPqWr9qUL9qWv8f91iEc2WFNIEEwIDUV03Zmq1pu510yqOeixs509nSeROre_tkIHskbaZgT_rfYgiZ10MoZ5XBAIN4dExnOPIPxoXI0ogb1GcCEyEbTLdCfPnEcTahcUBQ7wTAGna9vxAIwEesFidTLSfJ2",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW6Rxrp_6Dt0rW2Yg3Wgge46RzvIIpQ9KSLxRWNsSwJ71xyRzYIADDr9yTlFN_70oB5rohgByJv-amfl0gqEicpX3h9WcK8hr5dcmEwpGpBU2U6NN-pPqWr9qUL9qWv8f91iEc2WFNIEEwIDUV03Zmq1pu510yqOeixs509nSeROre_tkIHskbaZgT_rfYgiZ10MoZ5XBAIN4dExnOPIPxoXI0ogb1GcCEyEbTLdCfPnEcTahcUBQ7wTAGna9vxAIwEesFidTLSfJ2",
    prerequisitesEn: "Aprovação em vestibular ou exame clínico internacional.",
    prerequisitesPt: "Aprovação em vestibular ou vestibular internacional com ênfase em biologia.",
    skills: ["Neurologia", "Ensaios Clínicos", "Patologia", "Imunologia", "Cultivo de Tecidos"],
    featured: false
  },
  {
    id: "cognitive",
    titleEn: "Mestrado de Ciência Cognitiva",
    titlePt: "Mestrado de Ciência Cognitiva",
    category: "Science",
    durationEn: "2 Anos",
    durationPt: "2 Anos",
    levelEn: "Mestrado Acadêmico",
    levelPt: "Mestrado Acadêmico",
    descriptionEn: "Mapeamento das confluências entre modelos de inteligência computacional, psicologia computacional, filosofia da mente e neurociência cognitiva modernos.",
    descriptionPt: "Mapeamento das confluências entre modelos de inteligência computacional, psicologia computacional, filosofia da mente e neurociência cognitiva modernos.",
    profName: "Prof. Jordan S.",
    profImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOQ_vaKItzqHESngWHxCi0Pm7jGIrDNBHb6k4llwv7BGivIlGJ6vGHu4S3qfzsyfif8hGckarTL98UHI7FTFjRbNzgzse48sM_2gdo7oTMrXOUsRVB93i2202Ak3Pg-SoHC48aH1ZoynY2SWy177ja1tPpc6CU8fzCFizkV2mf9rTjs1JT9j9MeJyThnctYcAGHPwbegozl9RT4K1EbfMrHBlP-FB5e2gQvbH9D099Zr4oxNjw5ApHvFelALxjeNxmH-mKnKbd9N2E",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyA9ejTL2rUOvTqbThnv0Ke69laW5kdyfVgAJvHYlREOSipJ8b56gOLHSLBp3_NuSofs7uEunsduDWysTG1TcaYFY0-HV6hw99oT2bxZbCq-iUeZALDiF-cXJ2CAycmGxn9Gm0Z6vEg3OD1z3wjcVzfA4Ubt81Xu_oOKW8V7QB8rXCnmjpbqfRmCBCUZcf_x8WTAtve5B9EpiiiaDYw5PWmx4kQvIcVFgnbAVYWOJSQZY6OTZcJZnJWXdpZx7qgi-w9W1sJVAMK-Co",
    prerequisitesEn: "Forte formação anterior em ramos de psicologia, computação ou matemática.",
    prerequisitesPt: "Forte formação anterior em ramos de psicologia, computação ou matemática.",
    skills: ["Redes Neurais", "Ética em Sistemas IA", "Filosofia Cognitiva", "Modelagem Mental", "Linguística"],
    featured: false
  },
  {
    id: "juris",
    titleEn: "Direito Internacional Público",
    titlePt: "Direito Internacional Público",
    category: "Law",
    durationEn: "5 Anos",
    durationPt: "5 Anos",
    levelEn: "Bacharelado em Direito",
    levelPt: "Bacharelado em Direito",
    descriptionEn: "Análise profunda de pactos geopolíticos, tribunais de direitos humanos, acordos multilaterais e mecanismos internacionais de conciliação diplomática geopolíticos.",
    descriptionPt: "Análise profunda de pactos geopolíticos, tribunais de direitos humanos, acordos multilaterais e mecanismos internacionais de conciliação diplomática geopolíticos.",
    profName: "Dra. Elena Rodriguez",
    profImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoWqGR41qPF-xY3Qvw5WxU-T6yKR63Co-YQKIJ5rKoF8FX8vCC-91X0RfSTK84sBs5eXvwGWVKNBkoPB-nJ-ubmleJiLGUT7L0cWpPrVRFMjIku1fl2GOArnEXXJYKPmRG1jhCLZDK_IRDhiDujziftYUbPPUjdYeQ3A2e9weuW2qccS5tEvCRSRFvHJEw9mF2mbtaNtHM67SFEJOcWF0udKbItxHq_I1SN0ibiJhp71BGUi-1eOPeg2c1kLIFCfhgfUWxcxADtRoP",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA3ceqyAGvLBJQGjO04ST2leryE7av0D2alko1XfhfQtSNA9nS0oxELFzSNIHB-1ClSCq2L8YMq4r390loSRWhNpricdujGWFewtsQcXKU2Lc2nxgvkTot6xdzenrzEsszsj5V3goIJLM5Vv9BJDervWr0Hpczahipkg9AjoxO71xTOO9-qGz7q9kFwbZekdGDCZ1OdBmWWEI0o78FiyL5X6DdXD2uM_-p3bLfPwycjKYIkrOcEjESuAD_f51CDSY4m3J2GCIcZmyg",
    prerequisitesEn: "Aptidão em retórica jurídica avançada, proficiência gramatical.",
    prerequisitesPt: "Fórmula de oratória, proficiência em língua culta e redação.",
    skills: ["Redação de Tratados", "Direitos Humanos", "Protocolos da ONU", "Arbítrio Comercial", "Conciliação"],
    featured: false
  },
  {
    id: "architecture",
    titleEn: "Arquitetura Sustentável",
    titlePt: "Arquitetura Sustentável",
    category: "Science",
    durationEn: "4 Anos",
    durationPt: "4 Anos",
    levelEn: "Bacharelado em Urbanismo",
    levelPt: "Bacharelado em Urbanismo",
    descriptionEn: "Planejamento voltado para edifícios inteligentes, balanço de carbono neutro, eficiência de recursos hídricos, ventilação passiva e inclusão de alto nível.",
    descriptionPt: "Planejamento voltado para edifícios inteligentes, balanço de carbono neutro, eficiência de recursos hídricos, ventilação passiva e inclusão de alto nível.",
    profName: "Prof. Jordan S.",
    profImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOQ_vaKItzqHESngWHxCi0Pm7jGIrDNBHb6k4llwv7BGivIlGJ6vGHu4S3qfzsyfif8hGckarTL98UHI7FTFjRbNzgzse48sM_2gdo7oTMrXOUsRVB93i2202Ak3Pg-SoHC48aH1ZoynY2SWy177ja1tPpc6CU8fzCFizkV2mf9rTjs1JT9j9MeJyThnctYcAGHPwbegozl9RT4K1EbfMrHBlP-FB5e2gQvbH9D099Zr4oxNjw5ApHvFelALxjeNxmH-mKnKbd9N2E",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeuC1pip1-Hw3p1QAwnzNNEjPiGcChPZRuJt9-CTg5hxMRfJpwaBTJmsCIHfS2tvRS2VkGwt51dggVZ2xVgcbS45BzPM8Q9fSxnDn1r1hf4wKoEu-iG4cXOo1_cHs-holERf7KrGX53IMvuU370cyrH4pjP-NZT61kPNOdxL8WggKSalgJzLPnr96_3LxEHsqMwB2t_Ibrngt7SOE8iLUC56SqR7ny1oAIptwwNYqP5qtYBgST0EIxXVGJ4kj36F3QkGNX8pWdbIkz",
    prerequisitesEn: "Física Básica de Estruturas, desenho vetorial 3D geométrico.",
    prerequisitesPt: "Física Básica de Estruturas, Noções Desenho Vetorial ou Geometria.",
    skills: ["Arquitetura Solar", "Selos de Sustentabilidade", "Planos Diretores", "Lógica BIM", "Análise de Ciclo de Vida"],
    featured: false
  }
];

export const initialStudents: Student[] = [
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

export const initialProfessors: Professor[] = [
  {
    id: "prof-1",
    name: "Dra. Helena Vance",
    cpf: "111.222.333-44",
    expertise: "Ciências da Computação",
    phone: "+55 (11) 96111-2222",
    email: "helena.vance@excellence.edu.br",
    registeredAt: "2024-02-15T08:00:00Z"
  },
  {
    id: "prof-2",
    name: "Prof. Julian Thorne",
    cpf: "555.666.777-88",
    expertise: "Administração de Empresas",
    phone: "+55 (11) 96555-6666",
    email: "julian.thorne@excellence.edu.br",
    registeredAt: "2024-03-10T11:20:00Z"
  },
  {
    id: "prof-3",
    name: "Dr. Sarah Chen",
    cpf: "999.888.777-66",
    expertise: "Ciências Biológicas",
    phone: "+55 (21) 99999-8888",
    email: "sarah.chen@excellence.edu.br",
    registeredAt: "2023-11-05T09:00:00Z"
  }
];

export const academyHistory = [
  {
    year: "1924",
    titleEn: "Fundação",
    titlePt: "Fundação",
    descEn: "Fundada como uma guilda de pesquisa avançada, fornecendo ensino exclusivo em ciências biológicas e liderança empresarial.",
    descPt: "Fundada como uma guilda de pesquisa avançada, fornecendo ensino exclusivo em ciências biológicas e liderança empresarial."
  },
  {
    year: "1960",
    titleEn: "Expansão de Campus",
    titlePt: "Expansão de Campus",
    descEn: "Construção do campus histórico em Cidade Acadêmica, inaugurando as faculdades consagradas de Direito e MBA.",
    descPt: "Construção do campus histórico em Cidade Acadêmica, inaugurando as faculdades consagradas de Direito e MBA."
  },
  {
    year: "2000",
    titleEn: "Inovação Digital",
    titlePt: "Inovação Digital",
    descEn: "Pioneirismo em portais de ensino virtual e simulações de bancada laboratorial modernas.",
    descPt: "Pioneirismo em portais de ensino virtual e simulações de bancada laboratorial modernas."
  },
  {
    year: "2026",
    titleEn: "Alcance Global",
    titlePt: "Alcance Global",
    descEn: "Celebrando +100 anos de excelência acadêmica, integrando discentes de mais de 140 países em progresso científico.",
    descPt: "Celebrando +100 anos de excelência acadêmica, integrando discentes de mais de 140 países em progresso científico."
  }
];
