// function color(nombre, codigo) {

//     this.nombre = nombre;
//     this.codigo = codigo;

//     console.log(color) // me da el coontexto
    
// }

// // let rojo = color("rojo", "f00");

// // console.log(rojo) // da undefined

// let rojo = new color("rojo", "f00"); // invocar con la palabra NEW y lo convierte en objeto 

        // primera con mayuscula: significa que es un prototipo funcional
                // nombres, caracteristicas del objeto
function Persona(nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.envejecer = function(){
    this.edad++; //esto incrementa en 1 cada vez

}

Persona.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);   
}

let julian = new Persona("Julián", 31);

julian.saludar();
julian.envejecer();  // 31
julian.envejecer();  // 32
julian.envejecer();  // 33
julian.envejecer();  // 34



