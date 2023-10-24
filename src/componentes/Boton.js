import React from "react";
import '../css/Boton.css';

function Boton({ textoBoton, botondeclick, manejarClick }){
  return(
    //operador ternario
    //Lo que estamos haciendo es que valua la variable botondeclick, si es verdadera botondeclick retorna boton-click
    //Si es falsa boton-reiniciar, para hacer el boleano la variable botondeclick se debe asignar como boton-click 
    <button 
      className={ botondeclick ? 'boton-click' : 'boton-reiniciar' }
      onClick={manejarClick}>
      {textoBoton}
    </button>
  );
}

export default Boton ;