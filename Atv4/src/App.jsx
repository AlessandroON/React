import React from 'react';
import AstronautForm from './formulario/AstronautForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        🚀 <strong>AstroKappa</strong> – No mundo da lua
      </header>
      
      <main>
        <AstronautForm />
      </main>
      
      <footer>
        <p>🔗 Redes Sociais:</p>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">X (Twitter)</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
