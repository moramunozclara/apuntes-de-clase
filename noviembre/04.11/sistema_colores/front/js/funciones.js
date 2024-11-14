const lista = document.querySelector("ul");
const parrafoError = document.querySelector(".error");
const formulario = document.querySelector("form");
const inputText = document.querySelector('input[type="text"]');

class Color {
    // Un constructor es un método especial dentro de la clase Color,
    // utilizado para inicializar los objetos de una clase cuando se crean.
    // Se usa para configurar los VALORES INICIALES del objeto.
    constructor(id, r,g,b,contenedor){
        this.id = id;
        this.DOM =null;
        this.crearDOM(r,g,b,contenedor);
    }
    crearDOM(r,g,b,contenedor){
        this.DOM = document.createElement("li");

        this.DOM.innerText = [r,g,b].join(",");

        this.DOM.style.backgroundColor = `rgb(${[r,g,b].join(",")})`;

        this.DOM.addEventListener("click", () => {

            fetch("/borrar", { // por qué no aparece ASYNC?
                method : "DELETE",
                body :  JSON.stringify({ id : this.id }),
                headers : { "Content-type" : "application/json"}
            })

            .then(respuesta => respuesta.json())
            .then(resultado => {
                console.log(resultado);
                if (!error && resultado == "ok") {
                    return this.DOM.remove(); // Eliminar el color de la lista si se borra correctamente
                }
            })
            .catch(error => {
                console.log(error);
                parrafoError.innerText = "error al borrar el color";
                parrafoError.classList.add("visible"); // Mostramos el párrafo de ERROR

                setTimeout(() => {
                    parrafoError.classList.remove("visible");
                }, 2000); // Ocultar el párrafo de ERROR después de 2 segundos
            });

        });

        contenedor.appendChild(this.DOM);
    }
}


// carga inicial de datos

fetch("/colores")
.then(respuesta => respuesta.json())
.then(colores => {
    colores.forEach(({id, r,g,b}) => {
        new Color(id,r,g,b,lista);  // TUTORÍA: es new promise? NO
                                    // por qué no un MAP? 
    });
});

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    parrafoError.classList.remove("visible");

// Expresiones regulares: están delimitadas por barras //
    if(/^([0-9]{1,3},){2}[0-9]{1,3}$/.test(inputText.value)) {

        // return console.log("todo OK");

        // let [r,g,b] = inputText.value.split(",").map(n => Number(n));
        let valores = inputText.value.split(",").map(n => Number(n));

        let valido = true;

                        // // valido es la variable que almacena el estado
        // [r,g,b].forEach( n => valido = valido && n <= 255);

        let i = 0;

        //  200, 10, 5
        while( valido && i < valores.length ) {
                    // posición del array 
            valido =  valores[i] <= 255; // comprobar si el 1º, 2º y 3o es menor a 255

            i++  
        }

        if(valido){

            let [r,g,b] = valores;

            return fetch("/crear",{
                method: "POST",
                body: JSON.stringify({r,g,b}), // Enviar los valores RGB
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(respuesta => respuesta.json())
            .then(({error, id}) => {
                    // si funciona, que se pinte el color 
                    // y se limpie el campo de texto

                    // si no funciona, que meustre en pantalla el errror

                    if (!error) {
                        // this.DOM.add(id); // Añadir el color a la lista
                        // this.DOM.innerText = [r,g,b].join(","); // limpiar el campo de texto

                        new Color(id, r,g,b,lista);
                        return inputText.value = "";
                    }
                    
                    parrafoError.classList.add("visible");
                    parrafoError.innerText = "Hubo error al añadir el color";

                    setTimeout(() => {
                        parrafoError.classList.remove("visible");
                    }, 1500);


                    

            });


            
        }

    } 

    parrafoError.innerText = "debe escribir 3 números entre 0-255, separados por comas";

    parrafoError.classList.add("visible");


    // significa cualquiera de los caracteres entre el 0 y el 9, 
    // y que se requieren números de entre 1 a 3 dígitos
    // esto se repite dos veces
    // ^ y $ hace el efecto del trim
});


