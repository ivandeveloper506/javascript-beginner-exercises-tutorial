function sing() {
    const LETITBE = 'let it be';
    const WWOFW = 'Whisper words of wisdom';
    const TWBA = 'there will be an answer';
    const COMA = ', ';
    var singLetter = '';

    for (var i = 1; i <= 12; i++) {
         if (i === 12) {
            singLetter += LETITBE;
        } else if (i === 5) {
            singLetter += WWOFW + COMA;
        }
        else if (i === 11) {
            singLetter += TWBA + COMA;
        } else{
          singLetter += LETITBE + COMA;  
        }
    }

    return singLetter;
}

console.log(sing());