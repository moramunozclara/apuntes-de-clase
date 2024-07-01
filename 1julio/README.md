# Terminal y NPM

```bash
#Listar archivos y carpetas
ls
dir

#Crear un directorio
mkdir nombre-carpeta
mkdir es make directory

# Cambiar diretorio
cd (change directory) nombre-carpeta

#Crear nuevo archivo
MAC touch nombre-archivo
WINDOWS type null > nombre-archivo
#Posibles opciones para crear archivos en windows
type null > nomnre-archivo.ecct
echo. > nombre_archivo.txt

#En powershell
New-Item -Path . -Name "no,bre_del_archivo.text"

#ovimiento entre carpetas
cd nombre-carpeta

# ir a la raiz de nuestro sostema
 cd / 

# en windows me muevo entre discos sando C:,  D:, X: ...

#Volver una o varias carpetas
cd . #me queso en la misma carpeta. sirve para refrerenciar la carpeta actual (como en ./ )
cd ..
cd ../../../..
cd ../usuarios/ejemplo/mi-carpeta


#Limpiar la terminal
clear
o command + K
#

#

#

#

```html
```

# 

# Qué es NODE ?

Node.js es un 

```bash
# ver la version
con node -v





# Ejecutar un archivo de JS

node mi-script.js
```

# ¿Qué es un NPM?

NODE PACKAGE MANAGER es el administrador de paruqetes por defecto en Node. Lps àquertes son modulos de codigo que se pieden instalar y usar en nuestros proyectos.
Por ejemplo `EXPRESS`, `AXIOS`, `NODEMON`, `CHALK`, `MOMENT`, etc

```bash
#crear mi archivo package.json
npm init 
npm -y # con -y te lo crea automático con sí a todo (yes to all). un menos (-) es una FLAG (banderita)

#Instalar un paquete nuevo
npm install nombre-paquete
npm i nombre-paquete
npm i nombre-paquete@1.0.0 #definir la version que queremos : 1j 1.0.0


#Desinstalar
npm uninstall nombre-paquete

#Acualizar los paquetes a su última versión al añadir ^
    "cowsay": "^1.6.0"

````
# Flag -g instala Globalmente en todo mi servidor y proyectos
npm i nombre-paquete -g

# Flag -g instala dependencias de desarrollador

npm i nombre-paquete --save-dev
npm i nombre-paquete -D

#Acualizar los paquetes a su última versión
npm update
npm update nombre-paquete
```

```js
// package.json
{
  "name": "mi-primer-proyecto",
  },
  "scripts": {
    "start": "node mi-script.js",
    "dev": "nodemon mi-script.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  // y se ejecuta con "npm run start" o "npm run dev"


  # Terminal y NPM

```

# Repaso de JS (Métdos de Arrays)

```js
constt listaColores = ["rojo", "azul", "verde"];

const listaMagos = [
  {nombre: "Harry", apellido: "Potter", casa: "Gryffindor", atacar:""},
  {nombre: "Hermione", apellido: "Granger", casa: "", atacar:""},
  {nombre: "Draco", apellido: "", casa: "", atacar:""},
  {nombre: "John", apellido: "", casa: "", atacar()},

]

listaMagos[3].atacar();

```

# Devolución de metodos de arrays

los más usados:

- .forEach // Recorre el array pero no devuelve nada
- .map() // Tiene un return que devuelve un nuevo array (modifica al array original)
- .filter() // Tiene un return que devuelve el array solo con los elementos que cumplen una función especifica (ej: "edad > 18"). da VARIOS
- .find() // Encuentra el elemento que cumple la condición. solo da UNO


- . some() // Booleano (true/false). devuelve true si se cumple la condición
- .every() // Booleano (true/false). devuelve true si TODOS cumplen la condición
- .findIndex() // Devuelve el número de índice (en números) de una lista de arrays.


Ej devuelve lista todos los magos de griffindor

```js
listaMagos.filter( filtrarUsuarios);

function filtrarUsuarios (mago){
  //   {nombre: "Harry", apellido: "Potter", casa: "Gryffindor", atacar:""},
  return mago.casa == "Gryffindor";
}

const listaMagosGryffindor.filter( mago => mago.casa == "Gryffindor" );
const objetoMagoHarry.find( mago => mago.nombre == "Harry" );
const 




```

## Template strings: son la mejor opcion para comentarios
```js

const nombre="Laura";

let miTexto="Hola mi nombre es" + nombre + "de comillas dobles"


'hOla soy un comment de comillas simples'
"hola soy un comment de comillas dobles"


`hOla soy un comment con TEMPLATE STRING. puedo dar enter y no se rompe el comment`

```