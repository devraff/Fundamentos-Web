document.addEventListener("DOMContentLoaded", () => {

  const inputEmail = document.getElementById("email");
  const inputBirth = document.getElementById("birthdate");
  const cpfInput = document.getElementById("cpf");
  const form = document.getElementById("register-form");

  /* EMAIL */
  inputEmail.addEventListener("input", function () {
    if (inputEmail.validity.typeMismatch) {
      inputEmail.setCustomValidity(
        "Por favor, insira um endereço de e-mail válido (ex: nome@email.com)"
      );
    } else {
      inputEmail.setCustomValidity("");
    }
  });

  /* DATA DE NASCIMENTO */
  inputBirth.addEventListener("input", function () {
    const today = new Date();
    const birthDate = new Date(inputBirth.value);

    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (
      age < 18 ||
      (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
    ) {
      inputBirth.setCustomValidity(
        "Você deve ser maior de 18 anos para se cadastrar."
      );
    } else {
      inputBirth.setCustomValidity("");
    }
  });

  cpfInput.addEventListener("input", () => {
    cpfInput.value = cpfInput.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  });

});