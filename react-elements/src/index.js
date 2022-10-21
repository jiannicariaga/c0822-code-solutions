import * as React from 'react';
import * as ReactDom from 'react-dom/client';

const $container = document.querySelector('#root');
const element = React.createElement('h1', null, 'Hello, React!');
const root = ReactDom.createRoot($container);
root.render(element);
