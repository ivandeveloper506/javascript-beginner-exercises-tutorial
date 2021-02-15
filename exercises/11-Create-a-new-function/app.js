function generateRandom(){
    // Genera un número aleatorio entre 0 y 9
    return Math.floor((Math.random() * 9) + 1);
}

console.log(generateRandom());