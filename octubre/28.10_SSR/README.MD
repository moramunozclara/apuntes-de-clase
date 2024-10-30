## SERVER SITE RENDERING - 28 octubre

// Escuchar en el puerto 3000


estáticos --> dinámicos

ssr: server side rendering : con cualquier legnuaje de programacion que gestione ficheros y que pueda oir y responder peticiones

csr: client side renderinng: JS



PHP: ventaja: se procesa al momento. Preprocesa la petición y crea un HTML dinámico

- Sistema de plantillas: fichero que será procesado  para producir un HTML dinámico

Plantillas de Express: Template Engine / View* Engine (vistas*)

 - EJS* (Embedded JavaScriptp)       -------->>>>>>>>>>>>         npm install ejs
 - PUG ()

    servidor.set("view engine", "ejs");
    UNA VEZ CONFIGURADAS LAS VISTAS,EXPRESS BUSCARÁ TODAS LAS PLANTILLAS EN LA CARPETA VIEWS


RESPUESTA.send("blablabla") --> responder en formato TEXTO (HTML)
RESPUESTA.json(objeto) --> responder en formato JSON . Se lo paso en objeto porque se encarga de aplicar el método stringify del objeto

RESPUESTA.render(nombre de la plantilla, conjunto de datos opcionales). Esto procesa la plantilla con el View Engine y procesa/envía el resultado como HTML



DECLARACIÓN / STATEMENT
instruccion que doy pero que no retorna ningnçun valor
( let hola = "njfgneurfbwjke )
console.log, if, for, while, soon declaraciones/statements. noo retornan nada


EXPRESSION
una expresion siempre retorna un valor


---

todo lo que pongemso dentro de estas etiqy¡uetas será leído como JavaScript

<% %> -----> Estructuras de control / STATEMENTS (cosas sin valor o que no producen un valor)

<%- %> -----> El resultado es HTML directamente (innerHTML)

<%= %> -----> El resultado es TEXTO PLANO. Cualquier texto plano es sustituido por entidades HTML  (innerText) ("sanitizar el HTML", prevenía de hackeos y de inyectar script escrito en tu página)



## SERVER SITE RENDERING - 29 octubre

método
action: URL de procesamiento

?nombre=wewewe -----> QUERY STRING

?nombre=Andrea&edad=21 ----> URL ENCODED





TODO LO QUE NO SEA "GET" O "POST" SE HARÁ MEDIANTE FETCH


"data" es el evento que salta cada vez que hay un flujo de LECTURA



EXPRESS --> BODY PARSER:  proocesa el cuerpo de la peticióon y lo convierte en un objeto
            Se encarga de 2 tipos de contenido:

            - BODY_PARSER.urlencoded
            - BODY_PARSER.json

            --------------------

            form.data -----> ficheros -----> MULTER (multiparse form data)




...spread operator

extiende la informacion de una estructura de datos, de una a otra

 es mejor que FOR porque me permite poner todo el listado SEPARADO POR COMAS, por ejemplo



 THROW