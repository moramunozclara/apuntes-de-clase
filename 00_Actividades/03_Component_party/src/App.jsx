
import './css/App.css'

// 1º: Importar tarjeta de usuario
import TarjetaUsuario from './components/TarjetaUsuario'

// 2º: Importar listaa de tareas
import ListaTareas from './components/tareas/ListaTareas'


// 3º: Importar perfil El Barto
import PerfilUsuario from './components/PerfilUsuario';

// 4º: Importar galería de imágenes
import GaleriaImagenes from './components/GaleriaImagenes';

// 5º: Importar blog post con prop children
import BlogPost from './components/BlogPost';

// Extra
import Restaurante from './components/restaurante/Restaurante';
import TiendaProductos from './components/TiendaProductos';
import Comentarios from './components/Comentarios';
import Testimonios from './components/Testimonios';
import TarjetasRecetas from './components/TarjetasRecetas';

function App() {

  // array de objetos (tareas)
  const listaTareas = [
    { id: 1, nombreTarea: "Estudiar React", isCompletada: true },
    { id: 2, nombreTarea: 'Leer un libro', isCompletada: false },
    { id: 3, nombreTarea: 'Mejorar mi nivel de Surf', isCompletada: false },
    { id: 4, nombreTarea: 'Aprender a cocinar', isCompletada: true },
    { id: 5, nombreTarea: 'Ver series', isCompletada: false },
    
  ];

  const usuario3 = 
    {nombre: "Clara", edad:"25", ocupacion:"Alumna"}
  ;

  // array de objetos (imagenes)
  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];


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

// json de Recetas
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

  //imprimir en pantalla
  return (
    <>
    <h1>React component party</h1>
    <TarjetaUsuario nombre="Tomi" edad="40" ocupacion="Profe"/>
    <TarjetaUsuario nombre="Ceci" edad="32" ocupacion="Alumna"/>
    <TarjetaUsuario {...usuario3}/>
    <hr/>
    <ListaTareas listaTareas={listaTareas}/>
    <hr/>
    <PerfilUsuario/>
    <hr/>
    {/* 1er imageList: prop que traslado al componente. 
         2º imageList: llama a la constante en App definida arriba, que también podría llamarse imageData, por ejemplo  */}
    <GaleriaImagenes imageList={imageList}/>
    <hr/>
    <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01">
      <p>Lorem ipsum dolor, adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </BlogPost>
    <Restaurante menu={restaurant.menu}></Restaurante>
    <TiendaProductos productos={productos}></TiendaProductos>
    <Comentarios comentarios={comentarios}></Comentarios>
    <Testimonios testimonios={testimonios}></Testimonios>
    <TarjetasRecetas tarjetasRecetas={tarjetasRecetas}></TarjetasRecetas>
    </>
  )
}

export default App;
