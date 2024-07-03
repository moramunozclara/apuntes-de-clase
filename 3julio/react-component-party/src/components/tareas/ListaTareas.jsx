


import Tarea from "./Tarea";

const ListaTareas = ({tareas}) => {


console.log(tareas);



    return (
        <div className="Card">
        <h3>Lista de tareas</h3>

        {tareas.map(element => {
            const {id, tarea, isCompletada} = element;
            return (
                <div key={id}>
                    <h3>Tu tarea es: </h3>
                 {tarea} 
                </div>
        )

            })
        }
        </div>
    )
}
export default ListaTareas;