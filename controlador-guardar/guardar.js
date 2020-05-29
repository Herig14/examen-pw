const { writetxt } = require("../model/escribir-txt")

function guardartxt(datos, name) {
    stringDatos = `Datos: ${datos.datos}\nPaís: ${datos.name}\nAño: ${datos.anio}\nValor: ${datos.porcentaje}\n`
    return writetxt(stringDatos, name)
}
module.exports = {
    guardartxt
}