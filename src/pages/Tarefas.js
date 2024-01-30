import React from 'react';
import { Link } from 'react-router-dom';

function Tarefas() {
 return (
   <div>
     <h2>Tarefas</h2>
     <p>Teste tarefas</p>
     <Link to="/tarefas">Ver Tarefas</Link>
     <Link to="/sobre">Sobre</Link>
   </div>
 );
}

export default Tarefas;
