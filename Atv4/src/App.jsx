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
          <li><a href="https://www.instagram.com/aleoliverr1/?next=%2F">Instagram</a></li>
          <li><a href="https://x.com/LeoMadoushi">X(Twitter)</a></li>
          <li><a href="https://www.facebook.com/AlessandrooOliveiraaa/">Facebook</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
