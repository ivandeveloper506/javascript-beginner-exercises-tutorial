
//fix this function:
function startCounting() {
    var counter = 101;

    while (counter <= 101) {
        if (counter === 1) {
            break;
        }

        counter--;
        console.log(counter);
    }

    counter = 0;
    
    return counter;
}

console.log(startCounting());