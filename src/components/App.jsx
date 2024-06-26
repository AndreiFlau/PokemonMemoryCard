import { useState } from "react";
import PokemonCards from "./PokemonCards";
import "../styles/App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="card">
        <h2>Pokémon Memory Game</h2>
        <div className="scoreboard">
          <p>Score: {score}</p>
          <p>Best Score:</p>
        </div>
        <p>Get points by clicking the Pokémons. You&apos;re only allowed to click once per Pokémon.</p>
        <PokemonCards setScore={setScore} />
      </div>
    </>
  );
}

export default App;
