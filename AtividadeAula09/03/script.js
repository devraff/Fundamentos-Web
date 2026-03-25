const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

function updateMessage() {
    if (nameInput.value === '' && ageInput.value === '') {
        document.getElementById('message').innerText = null;
        alert('Preencha os campos para receber a mensagem personalizada!');
    }
    else {
        document.getElementById('message').innerText = `${nameInput.value} tem ${ageInput.value} anos!`;
    }
}


nameInput.addEventListener('input', updateMessage);
ageInput.addEventListener('input', updateMessage);