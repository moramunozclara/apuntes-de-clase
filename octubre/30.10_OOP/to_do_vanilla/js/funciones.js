const formulario = document.querySelector("form");
const inputText = document.querySelector('form input[type="text"]');
const contenedorTareas = document.querySelector(".tareas");


formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    if(inputText.value.trim() != ""){ // si NO está vacío ( != "")
        new Tarea(1,inputText.value.trim(),false,contenedorTareas); //crear nueva tarea
        inputText.value = ""; // limpiar el input una vezse alade la tarea
    }
    
})

