import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import './styles/App.css';

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function buscarPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?&limit=100");
      const dados = await response.json();
      setPokemons(dados.results);
    }
    buscarPokemons();
  },[]);

  if (!pokemons) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="wrap-cards">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} url={pokemon.url} />
      ))}
    </main>
  );
}

export default App;
