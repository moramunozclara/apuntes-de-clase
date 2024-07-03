
import './css/App.css'
import TarjetaUsuario from './components/TarjetaUsuario'
import ListaTareas from './components/tareas/ListaTareas'

function App() {




  const tareas = [
    {id: 23, tarea: "Crear", isCompletada: true},
    {id: 24, tarea: "Leer", isCompletada: true},
    {id: 25, tarea: "Mejorar", isCompletada: false},
    {id: 36, tarea: "Ver", isCompletada: true},

  ];

  //imprimir en pantalla

  return (
    <>
    <h1>React component party</h1>
    <TarjetaUsuario nombre="Tomi" edad="40" ocupacion="profe"/>
    <TarjetaUsuario nombre="Ceci" edad="32" ocupacion="alumna"/>
    <ListaTareas tareas={tareas} />
    </>
  )
}

export default App;
