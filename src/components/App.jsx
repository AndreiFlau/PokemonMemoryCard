import { useState } from "react";
import PokemonCards from "./PokemonCards";
import PokeData from "./fetchData";
import "../styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [shouldShuffle, setShouldShuffle] = useState(false);
  const { pokemonObject, isLoading, reshufflePokemon } = PokeData();

  function handleWin() {
    setGameWon(false);
    setShouldShuffle(true);
  }

  return (
    <>
      <div className="card">
        <h2>Pokémon Memory Game</h2>
        <div className="scoreboard">
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
        <p>Get points by clicking the Pokémons. You&apos;re only allowed to click once per Pokémon.</p>
        <PokemonCards
          pokemonObject={pokemonObject}
          isLoading={isLoading}
          reshufflePokemon={reshufflePokemon}
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          shouldShuffle={shouldShuffle}
          setShouldShuffle={setShouldShuffle}
          setGameWon={setGameWon}
        />
        {gameWon && (
          <div className="game-won">
            <h1>You manage to win the game! Congratulations!</h1>
            <button onClick={handleWin}>Reset the game?</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
