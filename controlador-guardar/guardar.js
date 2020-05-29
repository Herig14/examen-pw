const { writetxt } = require("../model/escribir-txt")

function guardartxt(datos, name) {
    return GJSON.getJSON(datos, name)
}
module.exports = {
    guardartxt
}