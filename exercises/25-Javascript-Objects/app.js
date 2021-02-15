var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray) {
    var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

    for (let member in anArray) {
        var luckyNumber = anArray[member].lucky_numbers;

        for (let number in luckyNumber) {
            sumOfAllLuckyNumbers += luckyNumber[number];
        }
    }

    return sumOfAllLuckyNumbers;
}

//Enter all your code here:

// 1. Se cambia el cuarto número de la suerte de John Doe a 33
family.members[1].significant_other.lucky_numbers[3] = 33;

// 2. Se crea una nueva persona y se añade al objeto familia.
// Jimmy Doe, 13, masculino, lucky numbers (números de la suerte): 1, 2, 3, 4;
// significant other: null.
var person3 = new Object();

person3.name = "Jimmy";
person3.lastname = "Doe";
person3.age = 13;
person3.gender = "male";
person3.lucky_numbers = [1, 2, 3, 4];
person3.significant_other = null;

// Se agrega la persona recien creada al objeto [family]
family.members.push(person3);

//Do not make changes below:
console.log('La sumatoria de todos los números de la suerte de la familia Doe es: ');
console.log(addAllFamilyLuckyNumbers(family.members));

console.log('\nEl cuarto número de la suerte de John Doe es:')
console.log(family.members[1].significant_other.lucky_numbers[3]);

console.log('\nEsta es la información de la tercera persona de la familia Doe:');
console.log(person3);

console.log('\nEsta es la información de toda la familia Doe:');
console.log(family);