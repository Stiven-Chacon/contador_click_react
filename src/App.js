import './App.css';
//Importamos el boton
import Boton from './componentes/Boton';
//Importamos el logo
import logo from './img/logo.png'
//Importamos el contador
import Contador from './componentes/Contador';
// importamos los Hooks 
import { useState } from 'react';
function App() {

  const [numClick, setNumClick] = useState(0); 
  //Hacemos una funcion flecha
  const manejarClick = () => {
    setNumClick(numClick + 1);
  };
  const ReiniciarContador = () => {
    setNumClick(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
         <img className='frelogo' src={logo} alt='logo de free'/>
      </div>
      <div className='contenedor-principal'>
        {/* Escribimos botondeclick como verdadero para que en la clase Boton.js value si es verdadero y no
        y consigo haga una funcion dependiendo de la respuesta  */}
        <Contador numClick={numClick} />
        <Boton textoBoton='Click' botondeclick={true} manejarClick={manejarClick} />
        <Boton textoBoton='Reiniciar' botondeclick={false} manejarClick={ReiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
