function isOdd(myNumber) {
    return !(myNumber % 2 == 0);
}

// Your code below:

var numero = prompt('Digite un número para validar si es primo o par.');

if (isOdd(numero)) {
    console.log('El número ingresado es primo.')
} else {
    console.log('El número ingresado es par.')
}