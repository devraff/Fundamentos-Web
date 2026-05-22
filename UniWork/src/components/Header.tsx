import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, User, GraduationCap, Menu, X, Table, Mail } from "lucide-react";
import { TranslationDictionary } from "../types";

interface HeaderProps {
  t: TranslationDictionary;
}

export default function Header({
  t,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Mock de alertas de notificações ativas
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      textPt: "Matrículas para o semestre estão oficialmente abertas!",
      time: "Agora mesmo",
    },
    {
      id: 2,
      textPt: "Dra. Helena Vance agendou uma orientação sobre IA.",
      time: "Há 2 horas",
    }
  ]);

  const navItems = [
    { id: "home", label: t.navHome, path: "/" },
    { id: "student-reg", label: t.navStudentReg, path: "/student-reg" },
    { id: "prof-reg", label: t.navProfReg, path: "/prof-reg" },
    { id: "courses", label: t.navCourses, path: "/courses" },
    { id: "contact", label: t.navContact, path: "/contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-outline-variant/50 shadow-xs transition-all">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex justify-between items-center w-full h-16">
        <Link 
          to="/"
          className="flex items-center gap-2 font-black cursor-pointer hover:opacity-90 select-none group focus:outline-none"
        >
          <div className="p-1.5 bg-brand-primary text-white rounded-md group-hover:rotate-6 transition-transform">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-brand-primary tracking-tight font-sans">
            {t.brandName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1 md:space-x-4">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`relative px-3 py-1.5 text-sm font-semibold tracking-wide rounded-md transition-all duration-200 outline-none hover:text-brand-primary ${
                  isActive
                    ? "text-brand-primary bg-brand-surface-low"
                    : "text-brand-on-surface-variant hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {item.icon && <item.icon className="h-3.5 w-3.5" />}
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <button
              onClick={() => {
                setNotifDropdownOpen(!notifDropdownOpen);
                setProfileDropdownOpen(false);
              }}
              className="p-2 text-brand-on-surface-variant hover:text-brand-primary hover:bg-slate-100 rounded-full transition-colors relative cursor-pointer"
            >
              <Bell className="h-5 w-5" />
              {notifications.length > 0 && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" />
              )}
            </button>

            {notifDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 md:w-80 bg-white rounded-lg border border-brand-outline-variant shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
                <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <span className="font-bold text-xs text-brand-on-surface">Notificações</span>
                  {notifications.length > 0 && (
                    <button 
                      onClick={() => setNotifications([])}
                      className="text-[10px] text-brand-primary hover:underline font-semibold cursor-pointer"
                    >
                      Limpar todas
                    </button>
                  )}
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-xs text-brand-on-surface-variant">
                      Sem novas notificações
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div key={n.id} className="p-3 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {n.textPt}
                        </p>
                        <span className="text-[10px] text-slate-400 mt-1 block">
                          {n.time}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setProfileDropdownOpen(!profileDropdownOpen);
                setNotifDropdownOpen(false);
              }}
              className="p-2 text-brand-on-surface-variant hover:text-brand-primary hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <User className="h-5 w-5" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg border border-brand-outline-variant shadow-lg py-2 z-50 text-left">
                <div className="px-4 py-2 border-b border-slate-100 bg-brand-surface-low/30">
                  <p className="text-xs font-bold text-brand-on-surface">Administrador Visitante</p>
                  <p className="text-[10px] text-slate-400">admin@excellence.edu.br</p>
                </div>
                <div className="p-1">
                  <Link
                    to="/registry"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-left text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                  >
                    <Table className="h-4 w-4 text-brand-primary" />
                    <span>Ver Registros do Portal</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-on-surface-variant hover:text-brand-primary rounded-full transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-outline-variant bg-white p-4 space-y-2 shadow-inner text-left animate-in slide-in-from-top-1">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-md transition-all ${
                  isActive
                    ? "text-brand-primary bg-brand-surface-low"
                    : "text-brand-on-surface-variant hover:bg-slate-50"
                }`}
              >
                {item.icon && <item.icon className="h-4 w-4 text-brand-primary" />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
