function saludar() {

}

function prueba(descripcion, funcion, expectativa) {
    console.log(descripcion, funcion () == expectativa)
}

prueba("debe decir 'hola' " , saludar , "hola")

// probar con   node unit-test.js