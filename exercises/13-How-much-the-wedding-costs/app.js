let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests) {
    let cost = 0;
    let baseCost = 0;

    // Your code here
    if (guests > 200) {
        baseCost = 20000;
    } else if (guests > 100) {
        baseCost = 15000;
    } else if (guests > 50) {
        baseCost = 10000;
    } else{
        baseCost = 4000;
    }

    // Se calcula el costo total
    cost = guests * baseCost;

    return cost;
}

// Se cambia la variable [input] por [guests], ya que [input] no se obtiene por ningún lado
let price = getPrice(guests);

// console.log('Your wedding will cost ' + price + ' dollars');

// [Intl.NumberFormat().format(VALOR)] Permite formatear la salida de un string a número
console.log('Your wedding will cost $' + Intl.NumberFormat().format(price) + ' dollars');
