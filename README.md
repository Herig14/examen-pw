
# Exámen Plataformas Web
# Universidad Politécnica Salesiana


_Crear una aplicación en NodeJS que permita leer los datos del porcentaje de personas que usan internet, publicadas por el Banco
Mundial y publicar las estadísticas de un determinado país en un
año específico._

## Comenzando 🚀

### Pre-requisitos 📋
#### Descarga e instala Node.js y npm
1. Linux <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="Lin Logo" width="25" height="25" /> o Windows <img src="https://es.seaicons.com/wp-content/uploads/2015/10/OS-Windows-icon.png" alt="Win Logo" width="25" height="25" /> 

  - _[Node.js 12.16.3 LTS](https://nodejs.org/es/) o superior._
  
  - _Mediante una terminal._
```
sudo apt install nodejs
```

  - _Gestor de paquetes npm 6.14.4 o superior._
```
sudo install npm@latest -g
```
  - _Actualizar y Upgrade_
```
sudo apt-get update
sudo apt-get upgrade
```

### Instalación de nuestra APP 🔧

_Para la ejecucion de la app desarrollada en node.js simplemente instala_

```
npm i porcentaje-internet-personas -g
```
### Ayuda / Comandos ⚙️ 📦
* _**-c** o **--pais** Código ISO 31 ALPHA-3 de los paises._
* _**-y** o **--archivo** Año (Desde 1960 - Hasta 2019)._
* _**-f** o **--anio** Path(Ruta) de los datos del Banco Mundial._
```
internet-porcentaje --help
internet-porcentaje mostrar -c <pais> -y <año> -f <archivo>
internet-porcentaje guardar -c <pais> -y <año> -f <archivo>
```

### Ejemplo 🔩

_La ejecución se lleva a cabo con el siguiente comando **Asegurate** de haber descargado los datos del banco mundial y **también** colocar correctamente el path(ruta)_
```
internet-porcentaje guardar -y 2010 -c ecu -f .\datos.csv
```


## Construido con 🛠️

_Las herramientas utilizadas en el desarrollo del proyecto son las siguientes:._

* [NodeJS](https://nodejs.org/) - Entorno de ejecución para JavaScript
* [NPM](https://www.npmjs.com/) - Manejador de dependencias
* [VisualStudio](https://code.visualstudio.com/?wt.mc_id=DX_841432) - Editor de código

## Paquete NPM 📖

[porcentaje-internet-personas](https://www.npmjs.com/package/porcentaje-internet-personas)

## Autor ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Herig Recalde** - *Programación y documentación* - [Herig14](https://github.com/Herig14)

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles


☕ 🍺 📢 🍺 🎁



---
Plantilla README:
[Villanuevand](https://github.com/Villanuevand)
