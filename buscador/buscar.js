const lookup = require('country-data').lookup;
const getJSON = require("../model/leer-csv").getJSON
const verificarIso = async pais => {
    let errorCode = 'El parámetro country debe ser un código ISO 3166 ALPHA-3.'
    try {
        pais = pais.toUpperCase()
        let codeP = lookup.countries({ alpha3: pais })[0];
        if (codeP == undefined) {
            throw new Error(errorCode)
        } else {
            return pais
        }
    } catch (error) { //ISO 3166 ALPHA-3
        throw new Error(errorCode)
    }
}
async function buscarPais(pais, year, csvpath) {
    pais = await verificarIso(pais)
    msg = ""

    let jsonOB = await getJSON(csvpath).then().catch(err => msg = err);
    if (msg != "") {
        throw new Error(msg)
    }
    if (year < 1960) {
        let err = `No existen registros en el csv para el año ${year}`
        throw new Error(err)
    }
    let aux
    for (var item in jsonOB) {
        temp = jsonOB[item]['Country Code']
        if (pais == temp) {
            aux = jsonOB[item]
            break;
        }
    }
    let subs = aux[year]
    if (isNaN(subs) || subs == '') {
        subs = "No existen suscripciones"
    }
    return { name: aux['Country Name'], porcentaje: subs, anio: year, code: pais, datos: aux["Indicator Name"] }

}
module.exports = {
    buscarPais
}