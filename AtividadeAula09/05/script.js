const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

function soma() {
    const result = parseFloat(num1.value) + parseFloat(num2.value);
    if (num1.value === '' || num2.value === '') {
        document.getElementById('result').textContent = 'Resultado: ';
        alert('Preencha os campos para receber o resultado da soma!');
    } else if (result % 2 === 0) {
        document.getElementById('result').textContent = `Soma: ${result}`;
        document.getElementById('bchange').style.backgroundColor = 'blue';
    }
    else {
        document.getElementById('result').textContent = `Soma: ${result}`;
        document.getElementById('bchange').style.backgroundColor = 'green';
    }
    
}

