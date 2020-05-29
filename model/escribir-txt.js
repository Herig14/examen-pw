const fs = require("fs");

function writetxt(content, name) {
    //Ruta donde se va a crear el archivo JSON
    let ruta = `./resultados/${name}.txt`
    var dir = './resultados';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    if (fs.existsSync(ruta)) {
        return `El fichero con la consulta ya existe: resultados/${name}.txt`
    }
    fs.writeFile(ruta, content, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.log(err);
        };
    });
    let msg = `Archivo guardado exitósamente: resultados/${name}.txt`
        //var fullpath = __dirname + `\\vista\\archivosjson\\${name}.json`
    return msg;
}
module.exports = {
    writetxt
}