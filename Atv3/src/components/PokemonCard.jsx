import React, { useEffect, useState } from 'react';
import '../styles/st.css';

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function CacarPokemons() {
      const response = await fetch(props.url);
      const data = await response.json();
      setPokemon({
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(t => t.type.name),
      });
    }
    CacarPokemons();
  }, [props.url]);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (!pokemon) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={`card ${pokemon.types[0]}`}>
      <h3 className="name">{capitalize(pokemon.name)}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className="types">
        {pokemon.types.map((type, index) => (
          <span key={index} className={`pill ${type}`}>{type}</span>
        ))}
      </div>
    </div>
  );
}
