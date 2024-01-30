import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
 return (
   <div>
     <h2>Sobre</h2>
     <p>Teste Sobre</p>
     <Link to="/tarefas">Ver Tarefas</Link>
     <Link to="/home">Sobre</Link>
   </div>
 );
}

export default Sobre;
