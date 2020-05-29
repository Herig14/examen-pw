const colors = require('colors/safe')
colors.setTheme({
    datos: ['brightGreen', 'bold'],
    datosinf: ['brightMagenta', 'bold'],
    paisinf: 'brightWhite',
    anioinf: 'cyan',
    valorinf: ['black', 'bgBrightWhite'],
    notificacion: 'yellow',
    error: 'brightRed'

});
module.exports = {
    colors
}