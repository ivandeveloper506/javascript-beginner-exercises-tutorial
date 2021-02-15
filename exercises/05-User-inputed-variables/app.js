var age = parseInt(prompt('What is your age?'));

// Your code below:

function is_numeric(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
}

if (is_numeric(age)){
    console.log('La edad es: ' + age.toString());
}else
{
   console.log('Solo se permite el ingreso de números.')
}

