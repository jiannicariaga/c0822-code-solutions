import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const imagesArr = [
  {
    id: 1,
    src: '../images/css.jpg'
  },
  {
    id: 2,
    src: '../images/javascript.jpg'
  },
  {
    id: 3,
    src: '../images/node.jpg'
  },
  {
    id: 4,
    src: '../images/react-git.jpg'
  },
  {
    id: 5,
    src: '../images/cpp.jpg'
  }
];

root.render(<Carousel images={imagesArr} />);
