const formulario = document.querySelector("form");
const inputText = document.querySelector('form input[type="text"]');
const contenedorTareas = document.querySelector(".tareas");

// carga inicial de datos almacenados en la DB
fetch("http://localhost:4000/tareas")
.then(respuesta => respuesta.json())
.then(tareas => {
    tareas.forEach(({id, title, isCompleted}) => {
        new Tarea(id, title, isCompleted, contenedorTareas);
    });
});

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    if(inputText.value.trim() != ""){ // si NO está vacío ( != "")

        // new Tarea(1,inputText.value.trim(),false,contenedorTareas); //crear nueva tarea
        // inputText.value = ""; // limpiar el input una vez se agrega la tarea

        const title = inputText.value.trim();

        fetch("http://localhost:4000/tareas/nueva", {
            method: "POST",
            body: JSON.stringify({title}),
            headers: {
                "Content-type" : "application/json"
            }
        })

        .then(respuesta => respuesta.json()) // '{ "id" : 37 }' a  { id : 37 }
        // .then( x => { console.log(x); });
        .then(({id, error}) => {
            if (!error) {
                    new Tarea(id, title, false, contenedorTareas);
                    return inputText.value = "";
            }
            console.log("error en la peticion"); //error visible para el usuario
        });
    }
    
})

