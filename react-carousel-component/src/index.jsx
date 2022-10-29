import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const imagesArr = [
  {
    src: 'images/css.jpg',
    alt: 'CSS'
  },
  {
    src: 'images/javascript.jpg',
    alt: 'JavaScript'
  },
  {
    src: 'images/node.jpg',
    alt: 'Node.js'
  },
  {
    src: 'images/react-git.jpg',
    alt: 'React.js and Git'
  },
  {
    src: 'images/cpp.jpg',
    alt: 'C++'
  }
];

root.render(<Carousel images={imagesArr} />);
