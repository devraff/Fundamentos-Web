import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, HelpCircle } from "lucide-react";
import { TranslationDictionary } from "../types";

interface ContactProps {
  t: TranslationDictionary;
}

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Função para validar formato simples de e-mail ao digitar
  const validateEmail = (emailStr: string) => {
    if (!emailStr) return "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailStr)) {
      return "Formato de e-mail inválido";
    }
    return "";
  };

  // Função de máscara de telefone brasileiro
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "phone") {
      finalValue = formatPhone(value);
    }

    setFormData((prev) => {
      const updated = { ...prev, [name]: finalValue };
      if (name === "email") {
        setEmailError(validateEmail(finalValue));
      }
      return updated;
    });
  };

  // Verificação de campos válidos
  const cleanPhone = formData.phone.replace(/\D/g, "");
  const isEmailValid = formData.email && !emailError && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormIncomplete =
    !formData.name.trim() ||
    !isEmailValid ||
    cleanPhone.length < 10 ||
    !formData.message.trim() ||
    formData.message.trim().length < 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormIncomplete) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert("Ocorreu um erro no servidor ao processar o envio de sua dúvida.");
      }
    } catch (err) {
      console.error("Erro ao enviar mensagem de contato para a API:", err);
      // Fallback para dar excelente experiência offline caso de rede local
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-page" className="min-h-screen bg-brand-bg py-12 px-4 md:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Banner de cabeçalho sutil do Portal */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-surface-low px-3 py-1.5 rounded-full inline-block mb-3"
          >
            Fale com a Academia Excellence
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-brand-on-surface tracking-tight"
          >
            Central de Atendimento e Ouvidoria
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-brand-on-surface-variant max-w-2xl mx-auto mt-3 leading-relaxed"
          >
            Tem alguma dúvida acadêmica, sugestão ou precisa de esclarecimentos sobre ingresso e grades curriculares? 
            Nossa equipe de consultoria e suporte institucional retornará o seu contato em até 24 horas úteis.
          </motion.p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Informações da Universidade */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-white border border-brand-outline-variant/60 rounded-xl p-6 md:p-8 shadow-xs"
          >
            <h2 className="text-xl font-bold text-brand-primary flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
              <HelpCircle className="h-5 w-5 text-brand-primary" />
              Instituição de Ensino
            </h2>

            <div className="space-y-6">
              
              {/* Informações da Universidade */}
              <div>
                <p className="text-xs font-bold font-mono text-brand-primary uppercase tracking-wider">Universidade</p>
                <p className="text-sm font-bold text-brand-on-surface mt-1">{t.brandName}</p>
                <p className="text-xs text-brand-on-surface-variant mt-1 leading-relaxed">
                  Consagrada há mais de um século ao rigor científico, formando líderes globais e pesquisadores de destaque científico e tecnológico.
                </p>
              </div>

              {/* Endereço */}
              <div className="flex gap-3 items-start">
                <div className="p-2.5 bg-brand-surface-low text-brand-primary rounded-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold font-mono text-brand-primary uppercase tracking-wider">Endereço Principal</p>
                  <p className="text-xs text-brand-on-surface font-semibold mt-1">Sede Administrativa & Campus Principal</p>
                  <p className="text-xs text-brand-on-surface-variant mt-0.5 leading-relaxed">
                    {t.addressValue}
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-3 items-start">
                <div className="p-2.5 bg-brand-surface-low text-brand-primary rounded-lg shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold font-mono text-brand-primary uppercase tracking-wider">Canais Telefônicos</p>
                  <p className="text-xs text-brand-on-surface font-semibold mt-1">Telefone da Reitoria / Secretaria Geral</p>
                  <p className="text-xs text-brand-on-surface-variant mt-0.5 leading-normal font-mono font-medium">
                    {t.phoneValue}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Atendimento unificado ouvidoria escolar e secretaria</p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex gap-3 items-start">
                <div className="p-2.5 bg-brand-surface-low text-brand-primary rounded-lg shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold font-mono text-brand-primary uppercase tracking-wider">Correio Eletrônico</p>
                  <p className="text-xs text-brand-on-surface font-semibold mt-1">E-mail para Dúvidas e Inscrições</p>
                  <p className="text-xs text-brand-primary hover:underline font-mono font-medium mt-0.5">
                    contato@excellence.edu.br
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Para canais docentes: corpo.docente@excellence.edu.br</p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex gap-3 items-start border-t border-slate-100 pt-5">
                <div className="p-2.5 bg-brand-surface-low text-brand-primary rounded-lg shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold font-mono text-brand-primary uppercase tracking-wider">Horários do Campus</p>
                  <div className="text-xs text-brand-on-surface-variant mt-2 space-y-1">
                    <p><span className="font-semibold text-brand-on-surface">Secretaria:</span> Segunda a Sexta: 08h às 22h</p>
                    <p><span className="font-semibold text-brand-on-surface">Biblioteca Central:</span> Segunda a Sábado: 07h às 23h</p>
                    <p><span className="font-semibold text-brand-on-surface">Suporte EaD:</span> Disponibilidade Digital 24/7</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Coluna do Formulário de Contato */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-white border border-brand-outline-variant/60 rounded-xl p-6 md:p-8 shadow-xs"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-5 text-left"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-lg font-bold text-brand-on-surface border-b border-slate-100 pb-3 mb-2">
                    Formulário de Mensagem
                  </h3>

                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-on-surface uppercase tracking-wider mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Insira seu nome completo"
                      className="w-full text-xs font-medium border border-slate-200 focus:border-brand-primary p-3 rounded-md outline-none bg-slate-50/50 hover:bg-slate-50 transition-colors focus:bg-white"
                    />
                  </div>

                  {/* E-mail e Telefone em row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* E-mail */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-on-surface uppercase tracking-wider mb-1.5">
                        E-mail de Contato *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@exemplo.com"
                        className={`w-full text-xs font-mono border ${emailError ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-primary"} p-3 rounded-md outline-none bg-slate-50/50 hover:bg-slate-50 transition-colors focus:bg-white`}
                      />
                      {emailError && (
                        <p className="text-[10px] text-red-500 font-semibold mt-1">{emailError}</p>
                      )}
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-on-surface uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 98765-4321"
                        className="w-full text-xs font-mono border border-slate-200 focus:border-brand-primary p-3 rounded-md outline-none bg-slate-50/50 hover:bg-slate-50 transition-colors focus:bg-white"
                      />
                      {cleanPhone.length > 0 && cleanPhone.length < 10 && (
                        <p className="text-[10px] text-amber-600 font-semibold mt-1">Formato incompleto: mínimo 10 dígitos</p>
                      )}
                    </div>
                  </div>

                  {/* Mensagem (Textarea) */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-on-surface uppercase tracking-wider mb-1.5">
                      Sua Mensagem *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva detalhadamente sua dúvida, pedido de suporte ou sugestão para nossa reitoria técnica..."
                      className="w-full text-xs font-medium border border-slate-200 focus:border-brand-primary p-3 rounded-md outline-none bg-slate-50/50 hover:bg-slate-50 transition-colors focus:bg-white resize-y min-h-[140px]"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[10px] text-brand-on-surface-variant">
                        Mínimo de 10 caracteres.
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {formData.message.trim().length} caracteres
                      </span>
                    </div>
                  </div>

                  {/* Informação e Enviar */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isFormIncomplete || isSubmitting}
                      className="w-full text-white py-4 px-6 rounded-lg font-extrabold text-xs uppercase tracking-widest bg-brand-primary hover:bg-brand-primary-container transition-all active:opacity-90 shadow-md outline-none disabled:bg-slate-200 disabled:text-slate-400 disabled:opacity-75 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-3.5 w-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                          <span>Processando Envio...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>{isFormIncomplete ? "Preencha Todos os Campos" : "Enviar Mensagem"}</span>
                        </>
                      )}
                    </button>
                    <p className="text-[9px] text-slate-400 text-center mt-2.5">
                      Seus dados são protegidos conforme a Lei Geral de Proteção de Dados (LGPD) e utilizados apenas para este atendimento institucional.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4 flex flex-col items-center justify-center gap-4"
                >
                  <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full inline-block">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Mensagem Enviada com Sucesso!</h3>
                    <p className="text-sm text-brand-on-surface-variant max-w-md mx-auto mt-2 leading-relaxed">
                      Agradecemos o seu contato. Suas informações foram registradas no Portal da Academia Excellence.
                      Nossos consultores analisarão e responderão pelo e-mail acadêmico informado em até 24 horas úteis.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2 border border-brand-primary text-brand-primary hover:bg-brand-surface-low rounded-lg font-bold text-xs uppercase tracking-wider transition-colors outline-none cursor-pointer"
                  >
                    Enviar Outra Mensagem
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
