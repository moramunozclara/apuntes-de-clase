
import './css/App.css'

// 1º: Importar tarjeta de usuario
import TarjetaUsuario from './components/TarjetaUsuario'

// 2º: Importar listaa de tareas
import ListaTareas from './components/tareas/ListaTareas'

function App() {

  const listaTareas = [
    { id: 1, nombreTarea: "Estudiar React", isCompletada: true },
    { id: 2, nombreTarea: 'Leer un libro', isCompletada: false },
    { id: 3, nombreTarea: 'Mejorar mi nivel de Surf', isCompletada: false },
    { id: 4, nombreTarea: 'Aprender a cocinar', isCompletada: true },
    { id: 5, nombreTarea: 'Ver series', isCompletada: false },
    <p></p>
  ];

  const usuario1 = 
    {nombre: "Clara", edad:"25", ocupacion:"alumna"}
  ;

  //imprimir en pantalla
  return (
    <>
    <h1>React component party</h1>
    <TarjetaUsuario nombre="Tomi" edad="40" ocupacion="profe"/>
    <TarjetaUsuario nombre="Ceci" edad="32" ocupacion="alumna"/>
    <TarjetaUsuario {...usuario1}/>
    <hr />
    <ListaTareas listaTareas={listaTareas}/>
        
    </>
  )
}

export default App;