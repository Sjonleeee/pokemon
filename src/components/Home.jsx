import { useState, useEffect } from "react"

  const Home = () => {
  const [pokemons, setPokemons] = useState()
  const[url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')



    //hier doen we API call
    const fetchPokemon = async () => {
    const response = await fetch(url)
    const json = await response.json()
    setPokemons(json)
 }

useEffect(() => {
    fetchPokemon()
}, [url])

{/* 2. Next page */}
const nextPage = () => {
  setUrl(pokemons.next)
}

const prevPage = () => {
  setUrl(pokemons.previous)
  console.log(pokemons.previous);
}


return (
    <>
    <h1>Hello faggot</h1>
    <h1>Pokemon</h1>
       {
        pokemons ? (
            <ul>
                {
                    pokemons.results.map((pokemon)=>{
                    const { name } = pokemon
                    return (
                      <li key={name}>{ name }</li>
                      )
                    })
                }
            </ul>
            ) : (
                <p>
                bezig met laden
                </p>
            )
       }
       {/* 1. klik next */}
       <div> 
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
       </div>
    </>
  )
}

export default Home