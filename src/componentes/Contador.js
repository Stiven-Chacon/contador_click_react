import React from 'react';
import '../css/Contador.css';

function Contador({ numClick }) {
  return(
     <div className='contador'>
        {numClick}
     </div>
  );
}

export default Contador;
