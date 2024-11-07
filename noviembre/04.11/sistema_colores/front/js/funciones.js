const lista = document.querySelector("ul");
const parrafoError = document.querySelector(".error");
const formulario = document.querySelector("form");
const inputText = document.querySelector('input[type="text"]');

class Color {
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

            fetch("/borrar", {
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
                parrafoError.classList.add("visible");

                setTimeout(() => {
                    parrafoError.classList.remove("visible");
                }, 2000); // Ocultar el mensaje después de 2 segundos
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
        new Color(id,r,g,b,lista);
    });
});

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    parrafoError.classList.remove("visible");

// Expresiones regulares: están delimitadas por barras //
    if(/^([0-9]{1,3},){2}[0-9]{1,3}$/.test(inputText.value)) {

        // return console.log("todo OK");

        let [r,g,b] = inputText.value.split(",").map(n => Number(n));

        let valido = true;

        [r,g,b].forEach( n => valido = valido && n <= 255);


        if(valido){

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


