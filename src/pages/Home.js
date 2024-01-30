import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
 return (
   <div>
     <h2>Home</h2>
     <p>teste home</p>
     <Link to="/tarefas">Ver Tarefas</Link>
     <Link to="/sobre">Sobre</Link>
   </div>
 );
}

export default Home;
