var fs = require("fs");
const csv = require('csvtojson/v2')


let readCSV = async(path) => {
    var csvStr
    try {
        csvStr = fs.readFileSync(path, "utf-8");
    } catch (error) {
        console.log(path);
        throw new Error(`El archivo csv no existe`)
    }
    if (csvStr.indexOf("IT.NET.USER.ZS") > 0 && csvStr.indexOf("Country") > 0 && csvStr.indexOf("IT.NET.USER.ZS") && csvStr.indexOf("Country") == 94) {
        csvStr = csvStr.substring(csvStr.indexOf("Country") - 1);
        return csv().fromString(csvStr).then((jsonObj) => jsonObj)
    } else {
        throw new Error(`El Archivo no tiene el formato correcto`);
    }
}
let getJSON = async(path) => {
    let data = await readCSV(path);
    return data;
}


module.exports = {
    getJSON
}