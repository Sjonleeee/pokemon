import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const params = useParams();
  const { name } = params;

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    setUrl(name);

    const fetchPokmon = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setPokemon(json);
    };
    fetchPokmon();
  }, [url, name]);

  return (
    <>
      <h1>{name}</h1>

      {pokemon ? (
        <>
          <div>base experience: {pokemon.base_experience}</div>
          <h3>Abilitites</h3>
          {pokemon.abilities.map((ab) => (
            <>
              <p>Name: {ab.slot}</p>
              <p>Name: {ab.ability.name}</p>
            </>
          ))}

          <h3>Forms</h3>
          {pokemon.forms.map((fm) => (
            <>
              <p>Name: {fm.name}</p>
              <p>Url: {fm.url}</p>
            </>
          ))}

          <h3>Game Index</h3>
          {pokemon.game_indices.map((gameIndex) => (
            <>
              <p>Name: {gameIndex.version.name}</p>
              <p>Url: {gameIndex.version.url}</p>
            </>
          ))}
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

export default PokemonDetail;
