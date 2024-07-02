import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiTarjeta from './components/MiTarjeta';
import CardClara from './components/CardClara';

function App() {

  const miVariable="De React";

  return (
    <>
    Crear un componente de react llamado Card que imprima
    nombre edad y 3 hobbies
    <h3>Mi página {miVariable}</h3>
    <MiTarjeta></MiTarjeta>
      
    </>
  )
}

export default App

