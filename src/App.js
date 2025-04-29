import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              types: details.types.map((t) => t.type.name),
            };
          })
        );

        setPokemons(pokemonDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType ? pokemon.types.includes(filterType) : true;
    return matchesName && matchesType;
  });

  return (
    <div className="container my-4">
      <Header />
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      {loading && (
  <div className="text-center my-4">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}

      {error && <div className="text-center text-danger my-4">Error: {error}</div>}
      {!loading && !error && (
        <PokemonList pokemons={filteredPokemons} />
      )}
      {!loading && !error && filteredPokemons.length === 0 && (
        <div className="text-center my-4">
        <p className="text-custom-pink">No Pokémon found 😢</p>
        <img 
          src="p2.jpg" 
          alt="No Pokémon"
          style={{ width: '10cm' }}
        />
      </div>
      

      )}
    </div>
  );
}

export default App;
