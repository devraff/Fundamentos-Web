function random () {
    const result = Math.floor(Math.random() * 100) + 1;
    alert(`Número gerado: ${result}`);
}

addEventListener('random', random);