/* eslint-disable react/prop-types */
import "../styles/App.css";

function PokemonCards({
  pokemonObject,
  isLoading,
  reshufflePokemon,
  score,
  setScore,
  bestScore,
  setBestScore,
  shouldShuffle,
  setShouldShuffle,
  setGameWon,
}) {
  const clickSound = new Audio("src\\sounds\\clickb1.mp3");
  if (shouldShuffle) {
    reshufflePokemon();
    setShouldShuffle(false);
  }

  function handleClick(pokemon) {
    clickSound.play();
    if (pokemon.clicked) {
      if (score > bestScore) {
        setBestScore(score);
      }
      if (score === pokemonObject.length) {
        setGameWon(true);
      }
      setScore(0);
      pokemonObject.map((poke) => {
        poke.clicked = false;
      });
      reshufflePokemon();
    } else {
      setScore((prevScore) => prevScore + 1);
      pokemon.clicked = true;
      reshufflePokemon();
    }
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="poke-cards">
      {pokemonObject.map((pokemon) => {
        return (
          <div key={pokemon.name} className={`poke-card ${pokemon.name}`} onClick={() => handleClick(pokemon)}>
            <img src={pokemon.img} alt={pokemon.name} draggable={false} />
            <h2>{pokemon.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonCards;
