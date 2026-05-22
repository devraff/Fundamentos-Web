export interface Course {
  id: string;
  titleEn: string;
  titlePt: string;
  category: "Engineering" | "Business" | "Medicine" | "Science" | "Law";
  durationEn: string;
  durationPt: string;
  levelEn: string;
  levelPt: string;
  descriptionEn: string;
  descriptionPt: string;
  profName: string;
  profImage: string;
  bannerImage: string;
  prerequisitesEn: string;
  prerequisitesPt: string;
  skills: string[];
  featured?: boolean;
}

export interface Student {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  phone: string;
  courseId: string;
  address: string;
  registeredAt: string;
}

export interface Professor {
  id: string;
  name: string;
  cpf: string;
  expertise: string;
  phone: string;
  email: string;
  registeredAt: string;
}

export type Language = "en" | "pt";

export interface TranslationDictionary {
  brandName: string;
  portalTitle: string;
  navHome: string;
  navStudentReg: string;
  navProfReg: string;
  navCourses: string;
  navContact: string;
  navRegistry: string;
  
  welcomeTag: string;
  heroTitle: string;
  heroSub: string;
  btnExplore: string;
  btnApply: string;
  
  successRate: string;
  activeStudents: string;
  degreePrograms: string;
  globalPartners: string;
  
  aboutTitle: string;
  aboutSub: string;
  aboutLearnMore: string;
  aboutVisionTitle: string;
  aboutVisionSub: string;
  aboutRigorTitle: string;
  aboutRigorSub: string;
  aboutCommunityTitle: string;
  aboutCommunitySub: string;
  
  featuredDisciplines: string;
  
  journeyTitle: string;
  journeySub: string;
  btnGetStarted: string;
  btnViewReq: string;
  requirementsTitle: string;
  requirementsSub: string;
  requirementsList: string[];
  
  studentRegTitle: string;
  studentRegSub: string;
  startJourney: string;
  startJourneySub: string;
  benefitAccredited: string;
  benefitSecure: string;
  benefitSupport: string;
  
  profRegTitle: string;
  profRegSub: string;
  joinAcademicTitle: string;
  joinAcademicSub: string;
  curriculumToolsTitle: string;
  curriculumToolsSub: string;
  studentPortalTitle: string;
  studentPortalSub: string;
  
  coursesTitle: string;
  coursesSub: string;
  allCategories: string;
  durationFilter: string;
  showingCourses: string;
  searchPlaceholder: string;
  featuredProgramTag: string;
  prerequisitesLabel: string;
  keySubjectsLabel: string;
  btnViewCurriculum: string;
  btnApplyNow: string;
  cantFindTitle: string;
  cantFindSub: string;
  btnScheduleCall: string;
  
  fullNameLabel: string;
  cpfLabel: string;
  rgLabel: string;
  phoneLabel: string;
  courseSelectionLabel: string;
  addressLabel: string;
  expertiseLabel: string;
  emailLabel: string;
  registerButton: string;
  registeringDisclaimer: string;
  
  footerDesc: string;
  quickLinks: string;
  contactInfo: string;
  addressValue: string;
  phoneValue: string;
  allRightsReserved: string;
  
  toastSuccessStudent: string;
  toastSuccessProf: string;
  alertTitle: string;
  closeLabel: string;
}

export const categoryTranslations: Record<string, string> = {
  All: "Categorias",
  Science: "Ciências",
  Engineering: "Engenharia",
  Business: "Negócios",
  Medicine: "Medicina",
  Law: "Direito"
};
