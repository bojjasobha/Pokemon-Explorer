import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, filterType, setFilterType }) {
  const types = [
    "", "grass", "fire", "water", "bug", "normal", "poison",
    "electric", "ground", "fairy", "fighting", "psychic",
    "rock", "ghost", "ice", "dragon", "dark", "steel", "flying"
  ];

  return (
    <div className="row mb-4">
      <div className="col-md-6 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search Pokémon by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <select
          className="form-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">Filter by type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
