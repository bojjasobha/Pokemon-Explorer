import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {
  return (
    <div className="row">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="col-6 col-md-4 col-lg-3 mb-4">
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
