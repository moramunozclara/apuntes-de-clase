# Ejercicios React-Component-Party

## Ejercicio 1: Setup + Tarjeta de Usuario

- Crear un proyecto nuevo en Vite con React que se llame `react-component-party`
- Crear un componente `TarjetaUsuario` que reciba props para mostrar información de un usuario (nombre, edad, ocupación).
- Crea los estilos para este componente en un archivo CSS `App.css`
- Importa el componente en nuestro archivo `App.js` y cargue 3 tarjetas con distintos valores de usuarios.

## Ejercicio 2: Lista de Tareas

- Crear un componente `tareas/ListaTareas` que reciba un array de tareas para este verano como props.
- Craar un segundo componente `tareas/Tarea` que reciba props para mostrar cada una de las tareas.
- Incluir nuestro componente ListaTareas en App.js y mostrarlas en pantallas.

```js
 // Lista de tareas antes del verano
 const tareas = [
   { id: 1, nombre: 'Estudiar React', completada: true },
   { id: 2, nombre: 'Leer un libro', completada: false },
   { id: 3, nombre: 'Mejorar mi nivel de Surf', completada: false },
   { id: 4, nombre: 'Aprender a cocinar', completada: true },
   { id: 5, nombre: 'Ver series', completada: false },
 ];

```

## Ejercicio 3: El Barto Perfil

- Crear un componenten llamado `PerfilUsuario` que arme una tarjeta con los siguientes datos de perfil. 
- Atención, este objeto posee otro objeto anidado dentro, deconstruir como corresponde.

```js
  // PerfilUsuario  (Objeto Anidado) 
  const userData =  {
    nombre: 'El Barto',
    email: 'elbarto@fox.com',
    img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
    direccion: {
      calle: 'Calle Falsa 123',
      ciudad: 'Springfield',
      codigoPostal: '12345'
    }
  };
```

## Ejercicio 4: Galería de imagenes

- Crear un componente galería de imagenes con los datos dados a continuación.
- Puede que no siempre tengamos un `key` como un id para nuestro map(), por lo podemos ustilizar (como última instancia) el atributo `index` que nos ofrece map() en su segundo parametro, como se indica a continuación:  
`listaImagenes.map( (item, index) => { ..... })`

```js
  // GaleriaImagenes (Array de Objetos)
  // https://rickandmortyapi.com/
  const iamgeList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];
```

## Ejercicio 5: Blog Post - Investigación de prop children

- Crear un componente llamado `BlogPost` que reciba `título`, `fecha` y `autor` como props, pero que utilice el contenido del Post como children. 
- Puedes buscar online que es el prop `children` de React, o ver este link con una explicación muy simplificada [wikiReact](https://www.reactjs.wiki/que-es-y-para-que-sirve-la-prop-children-en-react)

El App.jsx debe tener este formato:
```js
    {/* Componente con children  */}
    <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01"  >
      <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </BlogPost>
``` 


## Extra:

- Recrear su tarjeta digital de "ACTIVIDAD 1" como un componente reutilizable.
- Crear otros componentes que se te ocurran para practicar.


## Más Ejercicios:

A partir de los siguientes JSON, crear componentes que muestren la información de cada uno de ellos.

```js
  // JSON de Restaurante
  const restaurant = {
    "menu": {
      "entrantes": [
        {
          "id": 1,
          "nombre": "Ensalada César",
          "precio": 8.99,
          "descripcion": "Lechuga romana, crutones, queso parmesano y aderezo César."
        },
        {
          "id": 2,
          "nombre": "Sopa de tomate",
          "precio": 6.99,
          "descripcion": "Sopa casera de tomate con albahaca fresca."
        }
      ],
      "principales": [
        {
          "id": 3,
          "nombre": "Filete de salmón",
          "precio": 18.99,
          "descripcion": "Salmón a la parrilla con salsa de limón y eneldo, acompañado de verduras al vapor."
        },
        {
          "id": 4,
          "nombre": "Pasta Alfredo",
          "precio": 14.99,
          "descripcion": "Fettuccine en salsa cremosa de queso parmesano."
        }
      ],
      "postres": [
        {
          "id": 5,
          "nombre": "Tiramisú",
          "precio": 7.99,
          "descripcion": "Clásico postre italiano con capas de bizcocho, café y crema de mascarpone."
        },
        {
          "id": 6,
          "nombre": "Tarta de manzana",
          "precio": 6.99,
          "descripcion": "Tarta casera de manzana servida con helado de vainilla."
        }
      ]
    }
  };

  // JSON de Productos
  const productos = [
    {
      "id": 1,
      "name": "Smartphone XYZ",
      "price": 599.99,
      "description": "Último modelo con cámara de alta resolución y batería de larga duración.",
      "image": "https://example.com/smartphone-xyz.jpg"
    },
    {
      "id": 2,
      "name": "Laptop UltraBook",
      "price": 1299.99,
      "description": "Potente y ligera, perfecta para profesionales en movimiento.",
      "image": "https://example.com/laptop-ultrabook.jpg"
    },
    {
      "id": 3,
      "name": "Auriculares NoiseCancel",
      "price": 249.99,
      "description": "Experimenta un sonido inmersivo con cancelación de ruido activa.",
      "image": "https://example.com/auriculares-noisecancel.jpg"
    }
  ];


  // Json de Comentarios
  const comentarios= [
    {
      "id": 1,
      "author": "María García",
      "date": "2024-07-01T10:30:00Z",
      "content": "¡Excelente artículo! Me ha ayudado mucho a entender el tema.",
      "replies": [
        {
          "id": 2,
          "author": "Juan Pérez",
          "date": "2024-07-01T11:15:00Z",
          "content": "Totalmente de acuerdo, María. El autor ha explicado todo de manera muy clara."
        },
        {
          "id": 6,
          "author": "Juan Pérez",
          "date": "2024-07-01T11:15:00Z",
          "content": "Totalmente de vuelta de acuerdo, María. El autor ha explicado todo de manera muy clara."
        }
      ]
    },
    {
      "id": 3,
      "author": "Carlos Rodríguez",
      "date": "2024-07-02T09:45:00Z",
      "content": "Me gustaría ver más ejemplos prácticos en futuros artículos.",
      "replies": [
        {
          "id": 4,
          "author": "Ana Martínez",
          "date": "2024-07-02T10:30:00Z",
          "content": "Buena sugerencia, Carlos. Yo también creo que más ejemplos serían útiles."
        }
      ]
    }
  ];

// json de Testimonios
const testimonios = [
    {
      "id": 1,
      "name": "Laura Sánchez",
      "position": "Directora de Marketing",
      "company": "TechCorp",
      "testimonial": "El servicio al cliente es excepcional. Siempre están dispuestos a ayudar y resolver cualquier problema.",
      "image": "https://example.com/laura-sanchez.jpg"
    },
    {
      "id": 2,
      "name": "Pedro Gómez",
      "position": "Desarrollador Senior",
      "company": "WebSolutions",
      "testimonial": "La plataforma es intuitiva y fácil de usar. Ha mejorado significativamente nuestra productividad.",
      "image": "https://example.com/pedro-gomez.jpg"
    },
    {
      "id": 3,
      "name": "Isabel Torres",
      "position": "CEO",
      "company": "InnovateNow",
      "testimonial": "Gracias a este producto, hemos podido escalar nuestro negocio de manera eficiente y sostenible.",
      "image": "https://example.com/isabel-torres.jpg"
    }
  ]

  const eventosCalendario = [
    {
      "id": 1,
      "title": "Reunión de equipo",
      "date": "2024-07-05",
      "time": "10:00",
      "location": "Sala de conferencias A"
    },
    {
      "id": 2,
      "title": "Lanzamiento de producto",
      "date": "2024-07-10",
      "time": "14:00",
      "location": "Auditorio principal"
    },
    {
      "id": 3,
      "title": "Taller de desarrollo web",
      "date": "2024-07-15",
      "time": "09:00",
      "location": "Sala de formación B"
    },
    {
      "id": 4,
      "title": "Cena de empresa",
      "date": "2024-07-20",
      "time": "20:00",
      "location": "Restaurante El Mirador"
    }
  ];

  const tarjetasRecetas = [
    {
      "id": 1,
      "name": "Paella Valenciana",
      "image": "https://example.com/paella.jpg",
      "ingredients": [
        "400g de arroz bomba",
        "1 kg de pollo troceado",
        "200g de judías verdes",
        "200g de garrofó (judía blanca)",
        "1 tomate rallado",
        "Azafrán",
        "Aceite de oliva",
        "Sal",
        "Agua"
      ],
      "instructions": [
        "Sofríe el pollo en una paella con aceite de oliva.",
        "Añade las judías verdes y el garrofó, y sofríe unos minutos más.",
        "Incorpora el tomate rallado y cocina hasta que se evapore el agua.",
        "Agrega el arroz y remueve para que se impregne bien.",
        "Vierte el agua caliente (el doble que de arroz) y el azafrán.",
        "Cocina a fuego fuerte durante 10 minutos y luego a fuego lento otros 8 minutos.",
        "Deja reposar unos minutos antes de servir."
      ]
    },
    {
      "id": 2,
      "name": "Guacamole",
      "image": "https://example.com/guacamole.jpg",
      "ingredients": [
        "3 aguacates maduros",
        "1 tomate",
        "1/2 cebolla",
        "1 chile jalapeño (opcional)",
        "Jugo de 1 limón",
        "Cilantro fresco",
        "Sal"
      ],
      "instructions": [
        "Corta los aguacates por la mitad, retira el hueso y vacía la pulpa en un bol.",
        "Machaca los aguacates con un tenedor hasta obtener una consistencia cremosa.",
        "Pica finamente el tomate, la cebolla y el jalapeño (si lo usas) y añádelos al bol.",
        "Agrega el jugo de limón, cilantro picado y sal al gusto.",
        "Mezcla todos los ingredientes hasta que estén bien integrados.",
        "Sirve inmediatamente con totopos o chips de maíz."
      ]
    }
  ];
```