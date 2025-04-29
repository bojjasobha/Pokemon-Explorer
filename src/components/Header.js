import React from 'react';

function Header() {
  return (
    <header className="bg-pink p-3">
      <div className="d-flex align-items-center justify-content-center gap-3">
        <img
          src="/p3.png"
          alt="Pokémon Explorer Logo"
          className="rounded-circle"
          style={{ width: '50px', height: '50px' }}
        />
        <h1 className="text-custom-pink m-0">Pokémon Explorer</h1>
      </div>
    </header>
  );
}

export default Header;
