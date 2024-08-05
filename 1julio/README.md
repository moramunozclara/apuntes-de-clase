Actividades:
1. Usa forEach y Template Strings para mostrar los títulos de las obras por consola en el formato:
"La obra TITULO DE OBRA por el autor AUTOR DE LA OBRA (AÑO) NO SE/SE encuentra exhibida"


2. Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola.


3. Usar filter para crear un array de obras que están actualmente en exhibición y mostrarlas por consola.


4. Crear una función de búsqueda que reciba como parámetro un título de obra, y que utilice find para buscar esa obra específica


5. Usa some para verificar si hay obras en la galería de un año específico (por ejemplo, 1503).


6. Emplea every para comprobar si todas las obras son previas a un cierto año, por ejemplo tu año de nacimiento.


7. Usa findIndex para encontrar la posición en el array de una obra específica.


8. Agregar una función que permita añadir nuevas obras al array galería


9. Agregar una función que permita cambiar el estado de isExhibited de una obra específica enviándole el id








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

// CUANDO ESTE CÓDIGO SE ABRE DE NUEVO, HAY QUE INSTALAR NODE MODULES
  // 1. cd carpeta 27junio
  // 2. npm install
  // 3. npm run dev    o    npm run start

```

# Repaso de JS (Métdos de Arrays)

```js
const listaColores = ["rojo", "azul", "verde"];

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