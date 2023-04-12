import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
      //  console.log(response);
        const data = await response.json();
        console.log(data);
        setPokemon(data.results); 
       // console.log(data.results); 
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button type="button" onClick={() => {
        if (offset > 1) {
        setOffset(offset - 1);
      }
    }}>Previous Page</button>


      <button type="button" onClick={() => setOffset(offset + 1)}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}




