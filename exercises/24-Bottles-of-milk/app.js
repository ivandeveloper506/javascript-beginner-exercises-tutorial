function bottlesMilkSing() {
    const SL = '\n';
    const TOTAL = 99;
    const PART1 = ' bottles of milk on the wall, ';
    const PART2 = ' bottles of milk.';
    const PART21 = ' bottle of milk.';
    const PART3 = 'Take one down and pass it around, ';
    const PART4 = ' bottles of milk on the wall.';
    const PART41 = ' no more bottles of milk on the wall.';
    const PART5 = 'No more bottles of milk on the wall, no more bottles of milk.';
    const PART6 = 'Go to the store and buy some more, ';
    const PART7 = ' bottles of milk on the wall.'
    var singLetter = '';

    var counter = 99;

    while (counter <= TOTAL + 1) {
        if (counter === -1) {
            break;
        }

        if (counter === 1) {
            singLetter += counter.toString() + PART1 + counter.toString() + PART21 + SL;
            singLetter += PART3 + (counter - 1).toString() + PART41 + SL + SL;
        } else if (counter === 0) {
            singLetter += PART5 + SL + PART6 + TOTAL.toString() + PART7;
        } else {
            singLetter += counter.toString() + PART1 + counter.toString() + PART2 + SL;
            singLetter += PART3 + (counter - 1).toString() + PART4 + SL + SL;
        }

        counter--;
    }

    return singLetter;
}

console.log(bottlesMilkSing());