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
