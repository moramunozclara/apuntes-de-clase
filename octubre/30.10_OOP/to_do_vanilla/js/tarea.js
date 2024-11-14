class Tarea{
    constructor(id,texto,estado,contenedor){
        this.id = id;
        this.texto = texto;
        this.editando = false; // ¿Estamos editando? esto por defecto es FALSE
        this.DOM = null;//el HTML de la tarea

        this.crearDOM(estado,contenedor);
    }

    crearDOM(estado,contenedor){
        //contenedor TAREA
        this.DOM = document.createElement("div");
        this.DOM.classList.add("tarea");

        //texto tarea
        let textoTarea = document.createElement("h2");
        textoTarea.classList.add("visible");
        textoTarea.innerText = this.texto;

        //editor texto tarea
        let editor = document.createElement("input");
        editor.setAttribute("type","text");
        editor.value = this.texto;

        //botón editar // cuando presiono editar, la linea de texto se vuelve visible
        let botonEditar = document.createElement("button");
        botonEditar.classList.add("boton");
        botonEditar.innerText = "editar";

        botonEditar.addEventListener("click", () => this.editarTexto());

        //botón borrar
        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("boton");
        botonBorrar.innerText = "borrar";

       
        botonBorrar.addEventListener("click",() => this.borrarTarea());

        //botón estado
        let botonEstado = document.createElement("button");
        botonEstado.className = `estado ${ estado ? "terminada" : "" }`;
        botonEstado.appendChild(document.createElement("span"));

        botonEstado.addEventListener("click", () => {
            this.editarEstado()
            .then(() => botonEstado.classList.toggle("terminada"))
            .catch(() => console.log("error cambiando el estado"));
        });


        //añadir elementos al DOM
        this.DOM.appendChild(textoTarea);
        this.DOM.appendChild(editor);
        this.DOM.appendChild(botonEditar);
        this.DOM.appendChild(botonBorrar);
        this.DOM.appendChild(botonEstado);
        contenedor.appendChild(this.DOM);
    }

    editarEstado(){
        return new Promise((ok,ko) => {
  
            fetch(`http://localhost:4000/tareas/actualizar/${this.id}/2`, {
                method: "PUT"
            })
            .then(respuesta => respuesta.json())
            .then(({resultado, error}) => {
                if (error || resultado == "ko") {
                    return ko();                    
                }
                ok();
            })
            .catch(ko);
        });
    };
    

// editarTexto será una tarea ASYNC, porque hasta no  mandar
// la tarea editada, no querremos que nos haga el cambio de guardar/editar
    async editarTexto(){
        if(this.editando){
            // // console.log("guardar cambios")

            let tareaTemporal = this.DOM.children[1].value.trim();
            if (tareaTemporal != "" && tareaTemporal != this.texto) {

                let {resultado, error} = await fetch(`http://localhost:4000/tareas/actualizar/${this.id}/1`, {
                    method: "PUT",
                    body: JSON.stringify({title : tareaTemporal}),
                    headers: {
                        "Content-type" : "application/json"
                    }
                }).then(respuesta => respuesta.json());
            

            if(error || resultado == "ko") {  // sería lo mismo que !error && resultado=="ok"
                console.log("Error editando el texto de la tarea");

            } else {
                this.texto = tareaTemporal // una vez sabemos que se hicieron los cambios en la db,
                                            // lo mostramos en el front
            }
        }
            // console.log("empezar a editar")
            this.DOM.children[1].classList.remove("visible");
            this.DOM.children[0].innerText = this.texto;
            this.DOM.children[0].classList.add("visible");
            this.DOM.children[2].innerText = "editar";
        } else {

            this.DOM.children[0].classList.remove("visible");
            this.DOM.children[1].value = this.texto;
            this.DOM.children[1].classList.add("visible");
            this.DOM.children[2].innerText = "guardar";

        }
            this.editando = !this.editando;

    }


    borrarTarea(){
        fetch(`http://localhost:4000/tareas/borrar/${this.id}`,{
            method : "DELETE"
        })
        .then(respuesta => respuesta.json())
        .then(({resultado,error}) => {
            if(error || resultado == "ko"){
                return console.log("Error borrando tarea", error); // ko
            }
            this.DOM.remove();                              // ok
        })
        .catch(error => {
            // Este bloque captura cualquier error en la solicitud fetch
            console.error("Error en la solicitud:", error);
        });
        
    }

}
