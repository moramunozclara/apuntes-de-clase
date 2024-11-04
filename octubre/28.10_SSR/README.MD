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

-------------------------------------------


form data ---> ficheros -----> multer (multipart/form-data)


TODO LO QUE NO SEA "GET" O "POST" SE HARÁ MEDIANTE FETCH


"data" es el evento que salta cada vez que hay un flujo de LECTURA

-------------------------------------------


EXPRESS --> BODY PARSER:  proocesa el cuerpo de la peticióon y lo convierte en un objeto
            Se encarga de 2 tipos de contenido:

            - BODY_PARSER.urlencoded
            - BODY_PARSER.json

            --------------------

            form.data -----> ficheros -----> MULTER (multiparse form data)


            body parser --> urlencoded 

            "nombre=joaquín&edad=44&asignatura=fullstack"
            peticion.body ---> {
                nombre : "Joaquín",
                edad : 44,
                asignatura : "fullstack"
            }

------------------

...spread operator

extiende la informacion de una estructura de datos, de una a otra

 es mejor que FOR porque me permite poner todo el listado SEPARADO POR COMAS, por ejemplo:

        let nombres = ["René","Julián","Clara"]

        "René","Julián","Clara"
        nombres[0],nombres[1],nombres[2]

        ...nombres ---> "René","Julián","Clara"

--------------


 THROW error


--------------

PARAMS 

/x/y/:z ---> z --> parámetro, segmento dinámico de la URL ---> PETICIÓN.params 

/prueba/:a/:b 

/prueba/3/hola 

peticion.params --> { a : 3, b : "hola" }



-----

EJERCICIO:
 - BORRAR AL ESTUDIANTE DEL FICHERO JSON
 - SI LO LOGRA, REDIRIGIR AL INDEX
 - SI FALLA MOSTRAR UN ERROR


 -----


 OOP ---> Object Oriented Programming

 Un objeto es una entidad de un sistema


MÉTODOS -->  acciones que puede llevar a caboo
PROPIEDADES --> características
 
CLASE --> instrucciones apra crear un objeto
INSTANCIA --> objeto creado a partir de una CLASE

Objetos en JS -->  son coonstruidos en base a PROTOTIPOS funcionales


-------------------

THIS -->  noos dice el contexto de ejecución


la diferencia entre las funciones tradicionales y las funciones flecha es que las funciones flecha () => {} no crean un contexto propio, asi que THIS será el contexto externo

trabajando orientado a  objetos, muchas veces trabajaremos "contra el DOM", eje,plo
En funcion flecha: 
    BOTON.addEventListener("x", () => {})
- el This es:

En funcióon tradicioonal:
    BOTON.addEventListener("x", function(){})
- el This es: el target del evento (el botón)


class Nombreenmayuscula {
     // dentro de la clase van todos los metoodos y propiedades

}

método cosntructor (funcion constructora) ---> función que crea una instancia de la clase ---> se ejectura al momento de instanciar la clase

lo primero que hago es su funcion constructora, y para ello utilizo constructor(){}