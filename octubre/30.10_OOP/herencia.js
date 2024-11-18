class Persona {

    // dentro de la clase van todos los metoodos y propiedades
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

class Estudiante extends Persona{
    constructor(nombre, edad, asignatura){
        super(nombre,edad);        // super class
        this.asignatura=asignatura // super class
    }
    saludar(){
        console.log(`Soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.asignatura} asignatura`)
    }

}