/* eslint-disable react/prop-types */
import PokeData from "./fetchData";
import "../styles/App.css";

function PokemonCards({ score, setScore, bestScore, setBestScore }) {
  const { pokemonObject, isLoading, reshufflePokemon } = PokeData();

  function handleClick(pokemon) {
    if (pokemon.clicked) {
      if (score > bestScore) {
        setBestScore(score);
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
          <div key={pokemon.name} className={`poke-card ${pokemon.name}`}>
            <img src={pokemon.img} alt={pokemon.name} onClick={() => handleClick(pokemon)} />
            <h2>{pokemon.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonCards;
