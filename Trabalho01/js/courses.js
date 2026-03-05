document.addEventListener("DOMContentLoaded", function () {
  const courseSelector = document.getElementById("course-selector");

  const cursos = [
    "Administração",
    "Arquitetura e Urbanismo",
    "Ciência da Computação",
    "Direito",
    "Engenharia Civil",
    "Engenharia de Software",
    "Medicina",
    "Pedagogia",
    "Psicologia",
    "Sistemas de Informação"
  ];

  cursos.forEach(curso => {
    const option = document.createElement("option");
    option.value = curso.toLowerCase().replace(/\s+/g, "-");
    option.textContent = curso;
    courseSelector.appendChild(option);
  });
});