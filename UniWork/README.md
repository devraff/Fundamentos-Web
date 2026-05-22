<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2N6Y2VnYms0Z3g4amZ4Z28zbXN5NzJ3Z3BicDdzb3YwYmhnY293OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qE1YN7aBOFPRw8E/giphy.gif" width="600" alt="Estudos/Académico" />

  # 🎓 Academia Excellence — Portal Académico
  **Trabalho Prático Escolar / Académico**
</div>

---

### 📝 O Motivo do Projeto
Este projeto foi desenvolvido como um **trabalho prático escolar/académico** com o objetivo de criar um ecossistema digital de alta performance para a gestão de uma instituição de ensino. 

A aplicação resolve o problema real de administração escolar, permitindo de forma centralizada:
* **Matrícula de Estudantes:** Registo completo de alunos associados aos seus respetivos cursos com validação de dados.
* **Cadastro de Professores:** Gestão do corpo docente e das suas áreas de especialidade (Ex: Inteligência Artificial, Biotecnologia).
* **Gestão de Cursos:** Listagem dinâmica, filtragem por categorias e consulta de currículos.
* **Painel de Registros (Licenças):** Visualização e remoção em tempo real dos dados persistidos no sistema.

---

### 🚀 Tecnologias Utilizadas e Justificação

O projeto foi construído utilizando uma arquitetura moderna e full-stack, garantindo performance e tipagem estática:

* **React 19 & TypeScript:** Utilizados no Front-end para criar uma interface SPA (Single Page Application) rápida, modular e livre de erros graças à tipagem forte do TypeScript.
* **Node.js & Express:** O Back-end foi estruturado com uma API REST simples e robusta no Express para gerir as rotas de criação, leitura e eliminação (`GET`, `POST`, `DELETE`) dos dados.
* **Ficheiros JSON como Banco de Dados:** Armazenamento local dinâmico (`students_db.json` e `professors_db.json`) para persistir os registos de forma simples e eficiente sem necessidade de configurar um SGBD externo pesado.
* **Tailwind CSS (v4):** Sistema de estilização utilitário para criar um visual profissional, limpo, responsivo e com suporte a transições suaves.
* **Motion (Framer Motion):** Implementado para fornecer animações fluidas na troca de páginas e abertura de modais, melhorando a experiência do utilizador.
* **Lucide React:** Conjunto de ícones minimalistas e modernos para enriquecer a parte visual do portal.
* **Vite:** Ferramenta de build ultra-rápida para o ambiente de desenvolvimento e empacotamento de produção.

---

### 🔧 Como Executar o Projeto Localmente

**Pré-requisitos:** Ter o `Node.js` instalado na máquina.

1. Instale todas as dependências necessárias:
   ```bash
   npm install