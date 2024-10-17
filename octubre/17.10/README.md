



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