import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebFont from 'webfontloader';
// import './bootstrap';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

WebFont.load({
  google: {
    families: ['Roboto', 'sans-serif']
  }
});
