import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList.js';

function App() {
  const [pokemons, setPokemons] = useState([]);

  axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    .then(res => {
      const pokes = res.data;
      setPokemons({ pokes });
    })

  return (
    <>
      <div className='p-5'>
        <PokemonList pokemons={pokemons}/>
      </div>
    </>
  );
}

export default App;
