/* eslint-disable react/prop-types */
import PokeData from "./fetchData";
import "../styles/App.css";

function PokemonCards({ setScore }) {
  const pokeData = PokeData();

  function handleClick(pokemon) {
    if (pokemon.clicked) {
      setScore(0);
      pokemon.clicked = false;
    } else {
      setScore((prevScore) => prevScore + 1);
      pokemon.clicked = true;
    }
  }

  return (
    <div className="poke-cards">
      {pokeData.map((pokemon) => {
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
