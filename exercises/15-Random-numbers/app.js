/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
    // La función [Math.random()] solo devuelve números enteros entre 1 y 0
	var randomNumber = Math.floor(Math.random() * 10);
	return randomNumber;
}

console.log(getRandomInt());