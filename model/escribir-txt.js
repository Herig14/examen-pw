const fs = require("fs");

function writetxt(content, name) {
    //Ruta donde se va a crear el archivo JSON
    let ruta = `./resultados/${name}.txt`
    var dir = './resultados';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    fs.writeFile(ruta, content, (err) => {
        if (err) {
            console.log(err);
        };
    });
    let msg = `Archivo guardado exitósamente: resultados/${name}.txt`
        //var fullpath = __dirname + `\\vista\\archivosjson\\${name}.json`
    return { mensaje: msg };
}
module.exports = {
    writetxt
}