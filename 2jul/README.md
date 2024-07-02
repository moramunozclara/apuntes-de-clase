# CommonJS y ECMAScript Modules (ESM)

En JS, Los módulos son porciones de código reutilizables que se pueden exportar entre diferentes archivos. Estos permite organizar y reutilizar el código de manera efiiente.

## CommonJS

Fue creado para node.JS. Nuestro entorno de trabajo de Backend. Del lado del servidor.

- Se cargan de manera síncrona (el programa espera a que el módulo cargue antes de continuar)
-No es común pero se puede usar el navegador con la ayuda de herramientas como Broswerify / Webpack / Parcel





### Importacion de un único elemento

```js
//archivo1.js
const mensaje="Hola mundo"
module.exports = mensaje

//archivo1.js
const mensaje="Hola mundo"
module.exports = mensaje

```
### Importacion de múltiples elementos

```js
// en archhivo1.js
const mensaje1="Hola alumnos"
const mensaje2="Adios alumnos"
module.exports = { mensaje1, mensaje2 } //exportmos objeto

// en archhivo2.js
const { mensaje1, mensaje2 } = requier("./archivo1"); //importamos con llave {} porque es un objeto
console.log(mensaje1); // Hola alumnos

```

### Deconstrucción de objetos

```js
funcion imprimir(props){

    const edad = props.edad;
    const nombre = props.nombre;
    const asignatura = props.asignatura;


    // Forma de deconstruccion de objeto
    const {edad, nobre, asignatura} = props;
    console.log(`Mi nombre es ${nombre}, tengo ${edad} años, y estoy en la materia de ${asignatura}`)

}
```

# ECMAScript ES6 / ESM

Fue introducido en ECMAScript 2015 (ES6) para estandarizar los módulos de JS.
Se usa tanto para frontEnd (navegadores) como para el backend (NodeJS)

- Los módulos se cargan de manera asíncrona, es decir, el programa puede continuar  mientras los modulos se cargan
- Soprtado en navegadores modernos y en versiones recientes de node.js

```js
//en carchivo1.js
const mensaje1 = "Hola alumnos";
export const mensaje2 = "Chau alumnos"; //los export se importan con llaves {}
export default mensaje1; // el export dedault no usa llaves en el import

//en archivo2.js
import mensaje1 from ".archivo1"; // import de default va sin llaves 
import miMensaje from "./archivo1"; //importo mensaje1 renombrado a miMensaje ya qe se hio export default
import { mensaje2 } from ".archivo1";

console.log(mensaje1, mMensaje, mensaje2, mensaje3);
// Hola hola chau volvi

```


```json
{
  "name": "3Proyecto con ES6",
  "version": "1.0.0",
  "main": "mi-script2.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```


En el frontend tenemos que cambiar nuestras etiqutas de script

```html
<script type="module" src="./js/mi-script.js">
```

# React

React es una biblioteca de JS para construir interfaces de usuarios (facebook 2013)



Instrucciones para crear un proyecto

```bash
npm create vite@latest
# elegimos nombre de carpeta y otras opciones
# elegimos libreria "react"
cd nombre-proyecto
npm i
npm run dev
```
