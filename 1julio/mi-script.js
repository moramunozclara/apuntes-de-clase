
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

// Ejercicio 1: forEach y template strings
console.log("///Ejercicio 1: forEach y template strings");
artGallery.forEach(obra => {
  const esExhibida = obra.isExhibited ? "se encuentra exhibida" : "no se encuentra exhibida";
  // let isExhibited = "NO SE";
  // if(obra.isExhibited){
  //   isExhibited = "SE";
  // }
  console.log(`La obra ${obra.title} por el autor ${obra.artist} ${esExhibida}`);
});



// Ejercicio 2: MAP para mostrar solo los títulos en la consola
console.log("///Ejercicio 2: MAP para mostrar solo los títulos en la consola");

const listaTitulo = artGallery.map (obra => obra.title);
  console.log(listaTitulo);



// Ejercicio 3: FILTER en Exhibición
console.log("///Ejercicio 3: FILTER en Exhibición");

const listaEnExhibicion = artGallery.filter(obra => obra.isExhibited === true);
  console.log(listaEnExhibicion);



// Ejercicio 4: FIND, solo devuelve un titulo de obra, con "The Night Watch"
console.log("///Ejercicio 4: FIND, solo devuelve un titulo de obra, con 'The Night Watch'");

const rondaDeNoche = artGallery.find(obra => obra.title == "The Night Watch");
  console.log(rondaDeNoche);



// Ejercicio 5: SOME (verifica si hay o no con true o false), con 1503
console.log("///Ejercicio 5: SOME (verifica si hay o no con true o false), con 1503");
const obraExampleYear = artGallery.some(obra => obra.year == 1503)
const mensajeExtra = obraExampleYear ? "Se han encontrado obras de 1503" : "No se han encontrado obras de 1503";
  console.log(obraExampleYear, mensajeExtra);



// Ejercicio 6: EVERY ()
console.log("///Ejercicio 6: EVERY() todas las obras anteriores a mi año de nacimiento: 1998");

const obraMyBirthDate = artGallery.every(obra => obra.year < 1998);
const mensajitoExtra = obraMyBirthDate ? "todas las obras son previas a mi nacimiento" : "hay obras posteriores a mi nacimiento"
  console.log(obraMyBirthDate, mensajitoExtra);



// Ejercicio 7: findIndex() de la obra "Mona Lisa"
console.log("///Ejercicio 7: findIndex() posición en el array de la obra 'Mona Lisa'");

const posicionObra = artGallery.findIndex(obra => obra.title == "Mona Lisa");
  console.log(`La Mona Lisa está en la posición ${posicionObra+1} `);
// le sumo +1 porque el length de un array comienza desde el 0 y la MonaLisa es la 3ª obra




// Ejercicio 8: añadir nuevas obras al array de artGallery

// Ejercicio 9: cambiar el estado de isExhibited de una obra enviándole el id


