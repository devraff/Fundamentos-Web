import React from "react";
import RegistryView from "../components/RegistryView";
import { Student, Professor, Course, TranslationDictionary } from "../types";

interface RegistryPageProps {
  students: Student[];
  onDeleteStudent: (id: string) => void;
  professors: Professor[];
  onDeleteProfessor: (id: string) => void;
  courses: Course[];
  t: TranslationDictionary;
}

export default function Registry(props: RegistryPageProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16">
      <RegistryView {...props} />
    </div>
  );
}
