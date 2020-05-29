#!/usr/bin/env node

const argv = require('./config/yargs').argv;
const { buscarPais } = require('./buscador/buscar')
const { guardartxt } = require('./controlador-guardar/guardar')
const colors = require('./config/colors').colors;
let comando = argv._[0]
let path = argv.archivo
let pais = argv.pais
let year = argv.anio
if (comando != "mostrar" && comando != "guardar") {
    console.log(colors.error("Comando no reconocido"));
} else {
    buscarPais(pais, year, path).then(result => {
        //console.log(result)
        switch (comando) {
            case 'mostrar':
                //console.log(result);
                //printmsg(publicar(data), "link")
                console.log(colors.datos("Datos:"), colors.datosinf(result.datos));
                console.log(colors.datos("País:"), colors.paisinf(result.name));
                console.log(colors.datos("Año:"), colors.anioinf(result.anio));
                console.log(colors.datos("Valor:"), colors.valorinf(result.porcentaje));
                break;
            case 'guardar':
                let name = result.code + "-" + result.anio
                let msg = guardartxt(result, name)
                console.log(colors.notificacion(msg));

                break;

            default:
                console.log("Comando no reconocido");
        }
    }).catch(error => {
        console.log(colors.error(error.message));
    })
}