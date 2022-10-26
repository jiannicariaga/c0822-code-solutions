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
  const listItems = pokedex.map(pokedex =>
    <li key={pokedex.number}>
      {pokedex.name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

root.render(<RenderList pokemon={pokedex} />);
