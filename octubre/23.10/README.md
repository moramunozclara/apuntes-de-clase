FRAMEWORKS

código ya escrito, listo para ser utilizado 

las diferencias entre libreria y framework son cada vez más difusas, pero un framework es más complejo que una librería.


library : funciones ya escritas, para realizar tareas varias

framework: infraestructura de cóodigo para realizar un coonjunto de tareas relacionadas



-----


ExpressJS: framework de nodeJS papra crear aplicacioones web (backend).
    - Recibe peticiones
    - Procesa y responde peticiones
    - Sirve ficheros estáticos

Es de sintaxis muy minimalista

((((añadir   
"type": "module"
en el JSON
))))


NPM

npm install express
usando el gestor de paquetes de npm, instala este modulo que ysa sabemos que existe.
En package JSON me creará "dependencies", donde pondrá las dependencias para que funcione el proyecto

    package lock json son lasa dependencias de mis dependencias.



MIDDLEWARES

Son opciones para procesar o responder las peticiones.


-------------------------------------------------------------------


SERVIDOR.use() // genérico. 2 elementos : url *opcional*, callback
Usado para procesar o responder la petición

------

SERVIDOR.método() // específico. 2 elementos: url, callback
Usado SOLO para responder la petición
métodos: (get, post, pput, delete)


send




CALLBACK : error, petición, respuesta, función siguiente

-----


express.static(ruta a la carpeta de ficheros estáticos) --> middleware ya programado para servir ficheros estáticos

-- 

petición: requiere 2 cosas

URL: qué recurso etoy buscando (que contiene el protocolo, host y path, aunque la url al final resulta ser el path)

método: para qué estamso haciendo la petición

GET -->obtener/descargar/leer el recurso
es el método por defecto que utiliza el navegador

POST--> con la intención de crear un neuvo recurso

        (get y post son los unicos metodos que puede usar el navegador sin javascript )

PUT--> cn la intención de actualziar un recurso ya existente


DELETE --> hago una petición con la intención de eliminar un recurso

OPTIONS -> con la intención de recibir instruccciones



respuesta --> send | json (hace stringify el solo) | redirect | render (html dinamico) | download (fichero de descarga para el cliente)





-----


fetch : peticiones asincronas a un servidor

fetch (URL, objeto de configuracion *opcional, y si no está, se aplica GET*)

fetch retorna una promesa. esa promesa genera la respuesta sin procesar

la respuesta la vamos a procesar como dos formatos posibles (texto -string-, o JSON). 
Ambos métodos de procesamiento rretornan promesas



------------------------


IaaS -> Infraestructure as a Service -- > proofesión de devops

PaaS -> Platform as a Service
Hay un proveedor entre medias 

Render:
- Static websites: con dominio, y para front end. solo almacena y sirve los ficheros
- Web services: 


ci / cd: continuous deployment
me brinda un servidor virtual