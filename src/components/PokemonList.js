import React from 'react'

export default function PokemonList({ pokemons }) {
    const listItems = pokemons.map((poke) =>
        <li key={poke.name}>
            {poke.name}
        </li>
    );
  
    return (
        <ul>{listItems}</ul>
    );
}
