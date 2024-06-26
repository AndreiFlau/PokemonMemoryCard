import { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import PokeData from "./fetchData";
import Confetti from "react-confetti";
import "../styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [shouldShuffle, setShouldShuffle] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const { pokemonObject, isLoading, reshufflePokemon } = PokeData();

  function handleWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.onresize = handleWindowSize;
    handleWindowSize();

    return () => {
      window.onresize = null;
    };
  }, [gameWon]);

  function handleWin() {
    setGameWon(false);
    setShouldShuffle(true);
  }

  return (
    <>
      {gameWon && <Confetti width={windowSize.width} height={windowSize.height} />}
      <div className="card">
        <header className="header">
          <h2>Pokémon Memory Game</h2>
          <div className="scoreboard">
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
          </div>
          <p>Get points by clicking the Pokémons. You&apos;re only allowed to click once per Pokémon.</p>
        </header>
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
