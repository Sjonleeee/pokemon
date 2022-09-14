import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const [name, setName] = useState("charizard");
  const [pokemons, setPokemons] = useState();
  const [newPokemonName, setNewPokemonName] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  //hier doen we API call

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setPokemons(json);
    };
    fetchPokemons();
  }, [url]);

  // 2. Next page
  const nextPage = () => {
    setUrl(pokemons.next);
  };

  const prevPage = () => {
    setUrl(pokemons.previous);
    console.log(pokemons.previous);
  };

  const deletePokemon = (name) => {
    const { results } = pokemons;
    // results is mijn array met pokemons
    // Filer functie toepassen => om 1 pokemon te deleten
    // Array.filter => copy van je array - wist items uit je array en geeft een array terug

    const newResults = results.filter((pokemon) => {
      // HIer controleer je welke waar je wilt wissen
      // BV: Wij willen bulbasaur wissen.
      // Daarom moeten we pokemon.name vergelijken met "bulbasaur"
      // Als het bulbasaur is, moet die weg
      // True => blijft in array        False => Verwijdert uit array
      // True / False returnen

      if (pokemon.name === name) {
        return false;
      } else {
        return true;
      }
    });

    // We updaten de state terug met de nieuwe results.
    // Pokemon = object, in het object zit de array results
    // We moeten dus eerst ons origineel object terug erinsteken
    // daarna vervangen we results
    setPokemons({ ...pokemons, results: newResults });
  };

  const handleName = (event) => {
    // Event komt uit mijn textInput, daar stuur ik mijn event door
    // Ik gebruik event.target.name om de naam van het element bij te houden.
    // event.target.value gebruik ik om de inhoud van het textInput door te geven.

    // ik zet de inhoud van textInput in mijn state
    //
    setNewPokemonName(event.target.value);
  };

  const addPokemon = () => {
    // De nieuwe pokemon name die in handleName in state heb gezet. Word toegevoegd op array pokemon.results.
    const { results } = pokemons;
    const newResults = [
      ...results,
      { name: newPokemonName, url: "www.google.be" },
    ];

    // results.push({name: newPokemonName, url: 'www.google.be'})

    // Nieuwe results in pokemon.resusults
    // ... = heet spread opretator, dus alles wat in pokemons zit , steek je opnieuw in het object
    // Results vervang jet met NEW results
    setPokemons({ ...pokemons, results: newResults });
  };

  return (
    <>
      {/* <h1>{name}</h1> */}
      <h1>Pokemon</h1>
      {pokemons ? (
        <table>
          {pokemons.results.map(({ name }) => (
            <tr key={name}>
              <td>
                <Link to={name}>{name}</Link>
              </td>
              <td>
                <a href={url}> {url}</a>
              </td>
              <td>
                <button onClick={() => deletePokemon(name)}>DELETE</button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <p>bezig met laden</p>
      )}
      {/* 1. klik next */}
      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
        {/* <button onClick={() => deletePokemon(name)}>Delete</button> */}
      </div>

      <div>
        <h3>Add Pokemon</h3>
        <label>
          Name:
          <input name="name" onChange={(event) => handleName(event)} />
          Url:
          <input name="url" />
        </label>

        <button onClick={() => addPokemon()}>Button</button>
      </div>
    </>
  );
};

export default Home;