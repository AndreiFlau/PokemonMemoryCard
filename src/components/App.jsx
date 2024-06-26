import { useState } from "react";
import PokemonCards from "./PokemonCards";
import "../styles/App.css";

function App() {
  return (
    <>
      <div className="card">
        <h2>Pokémon Memory Game</h2>
        <div className="scoreboard">
          <p>Score:</p>
          <p>Best Score:</p>
        </div>
        <p>Get points by clicking the Pokémons. You&apos;re only allowed to click once per Pokémon.</p>
        <PokemonCards />
      </div>
    </>
  );
}

export default App;
