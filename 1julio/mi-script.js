

const artGallery = [ 
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true }, 
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false }, 
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true }, 
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true }, 
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false }, 
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true }, 
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false }, 
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
    ];



console.clear();


artGallery.filter( filtrarObras);

function filtrarObras (obra){
  //   {nombre: "Harry", apellido: "Potter", casa: "Gryffindor", atacar:""},
  return obra.title == "x";
}


// Ejercico 2

const titulosObras.map( t => mago.casa == "Gryffindor" );


const listaTitulo = artGallery.map ( obra => obra.title);


// Ejercicio 3


   

// // Actividades:
// Usa forEach y Template Strings para mostrar los títulos de las obras por consola en el formato:
// "La obra TITULO DE OBRA por el autor AUTOR DE LA OBRA (AÑO) NO SE/SE encuentra exhibida"
// Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola.
// Usar filter para crear un array de obras que están actualmente en exhibición y mostrarlas por consola.
// Crear una función de búsqueda que reciba como parámetro un título de obra, y que utilice find para buscar esa obra específica
// Usa some para verificar si hay obras en la galería de un año específico (por ejemplo, 1503).
// Emplea every para comprobar si todas las obras son previas a un cierto año, por ejemplo tu año de nacimiento.
// Usa findIndex para encontrar la posición en el array de una obra específica.
// Agregar una función que permita añadir nuevas obras al array galería
// Agregar una función que permita cambiar el estado de isExhibited de una obra específica enviándole el id