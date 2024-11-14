class Tarea{
    constructor(id,texto,estado,contenedor){
        this.id = id;
        this.texto = texto;
        this.editando = false;
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

        //botón editar

        // cuando presio editar, la linea de texto se vuelve visible
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
            .then(() => botonEstado.classList.toggle("terminada"));
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
            ok();
        });
    }
    editarTexto(){
        if(this.editando){
            // console.log("guardar cambios")
            this.DOM.children[1].classList.remove("visible");
            this.DOM.children[0].value = this.texto;
            this.DOM.children[0].classList.add("visible");
            this.DOM.children[2].innerText = "editar";
        }else{
            // console.log("empezar a editar")
            this.DOM.children[0].classList.remove("visible");
            this.DOM.children[1].value = this.texto;
            this.DOM.children[1].classList.add("visible");
            this.DOM.children[0].innerText = "guardar";


        }
        this.editando = !this.editando;
    }
    borrarTarea(){
        this.DOM.remove();
    }
}