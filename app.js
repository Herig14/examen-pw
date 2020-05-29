#!/usr/bin/env node

const argv = require('./config/yargs').argv;
const { buscarPais } = require('./buscador/buscar')
let comando = argv._[0]
let path = argv.archivo
let pais = argv.pais
let year = argv.anio

buscarPais("ecu", 2000, "./buscador/datos.csv").then(result => {
    console.log(result);
}).catch(error => {
    console.log(error.message);
})

console.log(path, pais, year);