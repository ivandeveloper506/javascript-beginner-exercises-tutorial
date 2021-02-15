function getColor(selection) {
    switch (selection) {
        case 'ROJO':
            return true;
            break;
        case 'VERDE':
            return true;
            break;
        case 'AZUL':
            return true;
            break;
        default:
            return false;
    }
}

var colorname = prompt('What color do you want?');

colorname = colorname.trim()
colorname = colorname.toUpperCase();

var isAvailable = getColor(colorname);

if (isAvailable) {
    console.log('Good news! That color is available');
}
else {
    console.log('We are sorry, that color is not available');
}