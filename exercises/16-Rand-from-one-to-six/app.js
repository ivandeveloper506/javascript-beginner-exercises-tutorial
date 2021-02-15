function getRandomInt()
{
    // Permite imprimi números aleatorios entre 1 y 6
    var randomNumber = Math.floor((Math.random() * (6 - 1 + 1)) + 1)
	return randomNumber;
}
console.log(getRandomInt());