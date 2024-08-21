
import './css/App.css'

// 1º: Importar tarjeta de usuario
import TarjetaUsuario from './components/TarjetaUsuario'

// 2º: Importar listaa de tareas
import ListaTareas from './components/tareas/ListaTareas'


// 3º: Importar perfil El Barto
import PerfilUsuario from './components/PerfilUsuario';

// 4º: Importar galería de imágenes
import GaleriaImagenes from './components/GaleriaImagenes';

function App() {

  // array de objetos (tareas)
  const listaTareas = [
    { id: 1, nombreTarea: "Estudiar React", isCompletada: true },
    { id: 2, nombreTarea: 'Leer un libro', isCompletada: false },
    { id: 3, nombreTarea: 'Mejorar mi nivel de Surf', isCompletada: false },
    { id: 4, nombreTarea: 'Aprender a cocinar', isCompletada: true },
    { id: 5, nombreTarea: 'Ver series', isCompletada: false },
    
  ];

  const usuario3 = 
    {nombre: "Clara", edad:"25", ocupacion:"Alumna"}
  ;

  // array de objetos (imagenes)
  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];
  

  //imprimir en pantalla
  return (
    <>
    <h1>React component party</h1>
    <TarjetaUsuario nombre="Tomi" edad="40" ocupacion="Profe"/>
    <TarjetaUsuario nombre="Ceci" edad="32" ocupacion="Alumna"/>
    <TarjetaUsuario {...usuario3}/>
    <hr/>
    <ListaTareas listaTareas={listaTareas}/>
    <hr/>
    <PerfilUsuario/>
    <hr/>
    {/* 1er imageList: prop que traslado al componente. 
         2º imageList: llama a la constante en App definida arriba, que también podría llamarse imageData, por ejemplo  */}
    <GaleriaImagenes imageList={imageList}/>
    </>
  )
}

export default App;
