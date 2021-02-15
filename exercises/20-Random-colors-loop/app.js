function getColor(colorNumber) {
    //make sure parameter is a number and not a string by converting the value to int:
    colorNumber = parseInt(colorNumber);

    switch (colorNumber) {
        case 1:
            return "red";
            break;
        case 2:
            return "yellow";
            break;
        case 3:
            return "blue";
            break;
        case 4:
            return "green";
            break;
        default:
            return "black";
            break;
    }
}

function getAllStudentColors() {
    //your loop here
    // var exampleColor = getColor(1);

    // Se hace un ciclo de 1 a 10 para simular los 10 estudiantes
    for(var i = 1; i < 11; i++)
	{
        var randomColor = 0;

        // Se genera un color aletorio de 1 a 4
        randomColor = Math.floor((Math.random() * (4 - 1 + 1)) + 1);

		console.log('Estudiante ' + i + ' color: ' + getColor(randomColor));
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

