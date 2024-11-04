BASE DE DATOS
Sistema gestionado* para almacenar datos

*Sistema/gestor de la base de datos | Database engine

Existen 2 tipos de bases de datos:
- De documentos
- Relacionales


# Bases de datos DE DOCUMENTOS

Ejemplo:
- Mongodb --> utiliza BSON --> binary JSON

--------

# Bases de datos RELACIONALES

Todos los sistemas de bases de datos relacionales usan un sistema llamado SQL (Structured Query Language).
Cualquier gestor de Base de Datos que lleve SQL en el nombre es un modelo de base de datos relacional.

Ejemplos:
- MySQL
- postgreSQL
- SQLite
- SQLserver

## Elementos de las bases de datos RELACIONALES: 

- Tablas: almacenan datos
- Columnas: campos
- Filas: registros

- Clave primaria: campo que identifica inequívocamente a un registro. Campo único.
- Clave foránea: campo que relaciona una tabla con otra

Ejemplos de tablas: 

id | nombre | apellido 
1      x         y      
2      a         b       
3      x         y        
4     julián    julián   


id | nombre
1    física
2    filosofía
3    matemáticas


estudiantes_aulas
id_estudiante | id_aula 
1                 3
1                 2

En el código de Node.js, "postgres" es una librería de Node.js que nos permite conectarnos al servidor de bases de datos PostgreSQL y enviarle consultas desde nuestra aplicación.
Al ser librería, requiere instalación: 
    npm install postgres


https://youtu.be/G-H7OS_Mrc8?si=zI-SsdvqkBzk0hf3 - representa numeros



SQL

CRUD:  create reade update delete

- CREATE 

- INSERT INTO nombre_tabla (campos,separados,por,comas) VALUES (valores,separados,por,comas)


    En el programa de PostgreSQL, si se escribe varias lineas, para ejecutarlas se usa: execute script


- SELECT campos, separados por comas, FROM nombre_tabla

- Seleccionar todo: SELECT * FROM nombre_tabla


- UPDATE nombretabla SET campo = valor, campo = valor WHERE condición IS

UPDATE rgb SET r = 200 WHERE id = 3

    (Cada vez que un valor se actualiza se va abajo en la tabla)

- DELETE FROM nombretabla WHERE condición

DELETE FROM rgb WHERE r = 0

------------------------------

desde JS ---> con el módulo postgres

1)crear una conexión
2)hacer consultas
3)cerrar conexión 


postgres se usa con AWAIT. Invocamos petición asíncrona.


`esto es un template string ${estas son expresiones dinamicas}`

`bla bla bla bla ${expresiones}`

