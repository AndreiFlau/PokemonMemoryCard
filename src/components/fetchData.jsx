import { useEffect, useState } from "react";

function PokeData() {
  function upperCaseName(name) {
    const firstLetter = name[0].toUpperCase();
    const nameArray = [];
    for (let index = 1; index < name.length; index++) {
      nameArray.push(name[index]);
    }
    nameArray.unshift(firstLetter);
    return nameArray.join("");
  }

  function shuffleArray(array) {
    let originalLen = array.length;
    let random = Math.floor(Math.random() * originalLen);
    while (originalLen !== 0) {
      random = Math.floor(Math.random() * originalLen);
      originalLen -= 1;

      let tempVal = array[originalLen];
      array[originalLen] = array[random];
      array[random] = tempVal;
    }

    return array;
  }

  const [pokemonObject, setPokemonObject] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const generationResponse = await fetch("https://pokeapi.co/api/v2/generation/5/");
      const pokeArray = [];
      const gen5 = await generationResponse.json();
      const pokemonSpecies = gen5.pokemon_species;
      for (let index = 0; index < 12; index++) {
        const pokemon = pokemonSpecies[index];
        const pokeUrl = pokemon.url;
        const pokeResponse = await fetch(pokeUrl);
        const pokemonInfo = await pokeResponse.json();

        const pokemonUrl = pokemonInfo.varieties[0].pokemon.url;
        const pokeResponse2 = await fetch(pokemonUrl);
        const pokemonInfo2 = await pokeResponse2.json();

        const upperCasedName = upperCaseName(pokemonInfo2.name);

        const pokeObj = {
          clicked: false,
          name: upperCasedName,
          img: pokemonInfo2.sprites.other["official-artwork"].front_default,
        };
        pokeArray.push(pokeObj);
      }
      const shuffledPokeArray = shuffleArray(pokeArray);
      setPokemonObject(shuffledPokeArray);
    }

    fetchData();
  }, []);

  return pokemonObject;
}

export default PokeData;
