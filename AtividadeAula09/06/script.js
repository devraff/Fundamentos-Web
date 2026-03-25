const num1 = document.getElementById('num1');

function mult() {
    const result = parseFloat(num1.value);
    if (num1.value === '') {
        document.getElementById('result').textContent = 'Resultado: ';
        alert('Preencha o campo para receber a tabuada!');
    } else {
        let tabuada = '';
        for (let i = 1; i <= 10; i++) {
            tabuada += `${result}x${i} = ${result * i}\n`;
        }
        document.getElementById('result').textContent = tabuada;
    }
}