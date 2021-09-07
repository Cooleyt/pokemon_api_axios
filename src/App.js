import DisplayPokemon from './components/displayPokemon';
import { useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // const [newPokemon, setNewPokemon] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const fetchAPI = (event) => {
    event.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
      .then(res => {
        console.log(res.data.results)
        setPokemons(res.data.results)
      })
      .catch(err => console.log(err));
  }
  
  
  const handleNewPokemonSubmit = (e) => {
    e.preventDefault();

    // const pokemonItem ={
    //   text: newPokemon,
    //   complete: false
    // }

    // setPokemons([...pokemons, pokemonItem]);
    // setNewPokemon("");
  };


  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <form onSubmit = {(e) => {
        handleNewPokemonSubmit(e);
      }}>
      <div>
        <button onClick = {fetchAPI}>Fetch Pokemon</button>
      </div>
      {
        pokemons.length > 0 ? <DisplayPokemon pokemons = {pokemons}></DisplayPokemon>: null
      }
      </form>
      <hr />
    </div>
  );
}

export default App;
