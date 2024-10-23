



Backend
- HTML dinámico
- Gestión y servicio de datos | API rest 
- Gestión de URLs (URL = Uniform Resource Locator)


-------

ON PREMISES (bajo premisa)

servidor : contiene los ficheros estáticos + ejecuta scripts(perl/python/php)

appache ---> ofrece un directorio público --> directorio expuesto a internet

http//123.456.34.7 --> 

-------------------

CLOUD : 

lenguaje -----> ficheros estáticoso / urls
servidor ------> sólo se encarga de recibir las peticiones



ruby in rails 
django (python)
express (js)

http//123.456.34.7/foto.jpg

http//123.456.34.7/producto.php?id=3 // un fichero estático


http//123.456.34.7/producto/14563453 // esto no es un fichero estático



IaaS -> Infraestructure as a Service -- > proofesión de devops
PaaS -> Platform as a Service


------------------------

BACKEND: 
El lenguaje de programacion debe tener 2 posibilidades
1- Gestionar peticiones HTTP
2- Poder interactuar con el sistema de ficheros


Javascript queda delimitado al navegador, no puede modificar el sistema de ficheros

Se necesita un RUNTIME (entorno de ejecución)

node.JS es el RUNTIME para ejecutar JS en el ordenador (fuera del navegador)
También existen bun y deno.



terminal / powershell

cd change directory

ls listado del coontenido de un directoorio

cd ~( ir al directorio raiz)

    despues ls (te hace la lista de carpetas)

clear --> limpiar la terminal



----

node

module --> fichero en ejercución. Dentro de noode, todo fichero es un módulo

importante:
- exports {}: cada móodulo exportado apaercerá en el módulo expoorts
- children []: cada modulo importado aparecerá en el módulo children
- paths []
: son unas rutas pre configuradas en las que tratará de buscar los módulos. irá de la primera a la última. Si noo está el módulo en ninguna parte, dará ERROR.



------

noode: Node tiene módulos naativos que extienden JS

IMPORTANTE
sistema de ficheros ---> fs (file system) (modulo nativo importado con noode). de aqui sale writeFile, appendFile etc



readFile: hay que pasarle 2 argumentos (ruta al fichero, callback)

Este callback es asíncrono.
*Este callback recibe el posible ERROR y el contenido


writeFile(ruta al fichero, contenido, callback*)

*el callback recibe el posible ERROR


appendFile sobreescribe en el archivo. pero solo puede ser en archivos de texto




_____________________________________________________________

21.10

require ------> commonJS --> cmódulos tradicionales de JS (originarios de NODE)

IMPORTAR -- >require

EXPORTAR --> module.export = {}

módulos ES ---> ECMA SCRIPT --> ESTÁNDAR de código en el que está basado JS

ES6 es el más solicitado porque es el más accesible desde todos los disppositivos

-----------

NPM --> node package manager / gestor de paquetes de Node --> para insttalar módulos de noode creados por terceros


fichero de configuración ---> package.json ( fuente ed la verdad de la aplicación)
npm init -y --> crea el package.json automático


require son como ficheros js tradicionales

cuando incluimos en el  package json "type":"module" todos los ficheros se convierten en módulos

los módulos por naturalez son asíncronos,
eso significa que podemos usar el await sin estar dentro de una funcion asincrona

------------

streams --> flujos de datos

readStreams--- > flujos de lectura (se abre cuando recibes algo , leyendo los trocitos del fichero )
writeStreams --> flujos de escritura ( se abre cuando envías algo)

-----
entrada/salida estándar

streams



-----

process -> proceso en ejecución

salida estándar : flujo de escritura
process.stdout --> salida estándar de NODE -->  stdout --> standar out

entrada estándar: flujo de lectura
process.stdin --> entrada estándar de NODE -->  stdout --> standar out

-- pasra escuchar eventos: método ON
ALGO.on("evento", callback)

control C : finaliza un proceso


-----------------

HTTP / HTTPS
        lo mismo de manera encriptada

URL uniform resource locator


https://        clara.org   /contacto

protocolo         host      ppath/filename



------------------
servidor dinámico (wordpress)

servidor de ficheros estático (html/css/js)


un servidor recibe peticiones y las responde

http/https ---> createServer ---> crear peticiones en un puerto

*--> accesos en la interfaz de red

createServer lleva CALLBACK, que recibe 2 cosas: la petición (readStream) y la respuesta (writeStream)




javascript solo me da la posibilidad de abrir un puerto y hacer peticiones


(servidor estatico)
crearemos un sistema que reciba peticiiones y servir algo si coinciden las peticiones con lo qeue tenemos 

si ese fichero existe en  la carpeta státicos, se sirva




-------------

23 octubre:

STAT -----> método del sistema de ficheros para revisar las estadísticas de un fichero o directorio
