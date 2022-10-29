import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const imagesArr = [
  {
    id: 1,
    src: '../images/css.jpg',
    alt: 'CSS'
  },
  {
    id: 2,
    src: '../images/javascript.jpg',
    alt: 'JavaScript'
  },
  {
    id: 3,
    src: '../images/node.jpg',
    alt: 'Node.js'
  },
  {
    id: 4,
    src: '../images/react-git.jpg',
    alt: 'React.js and Git'
  },
  {
    id: 5,
    src: '../images/cpp.jpg',
    alt: 'C++'
  }
];

root.render(<Carousel images={imagesArr} />);
