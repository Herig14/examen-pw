#!/usr/bin/env node

const argv = require('./config/yargs').argv;
let comando = argv._[0]
let path = argv.archivo
let pais = argv.pais
let year = argv.anio
console.log(path, pais, year);