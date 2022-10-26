import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

function RenderList(props) {
  const pokemon = props.pokemon;
  const listItems = pokemon.map(pokedex =>
    <li key={pokemon.number}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

root.render(<RenderList pokemon={pokedex} />);
