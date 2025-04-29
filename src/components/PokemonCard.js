import React from "react";
import "../App.css"; // Make sure your styles are in App.css or adjust accordingly

const typeColors = {
  fire: "danger",
  water: "primary",
  grass: "success",
  electric: "warning",
  bug: "success",
  normal: "secondary",
  poison: "purple",
  ground: "warning",
  fairy: "pink",
  fighting: "danger",
  psychic: "pink",
  rock: "secondary",
  ghost: "dark",
  ice: "info",
  dragon: "warning",
  dark: "dark",
  steel: "secondary",
  flying: "info",
};

function PokemonCard({ pokemon }) {
  return (
    <div className="card shadow-sm text-center h-100">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="card-img-top mx-auto mt-3"
        style={{ width: "100px", height: "100px" }}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
        <p className="card-text">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`badge bg-${typeColors[type] || "secondary"} me-1 text-capitalize`}
            >
              {type}
            </span>
          ))}
        </p>
        <p className="card-text small text-muted">ID: {pokemon.id}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
