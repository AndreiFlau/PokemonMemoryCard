import PokeData from "./fetchData";
import "../styles/App.css";

function PokemonCards() {
  const pokeData = PokeData();

  return (
    <div className="poke-cards">
      {pokeData.map((pokemon) => {
        return (
          <div key={pokemon.name} className="poke-card">
            <img src={pokemon.img} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonCards;
