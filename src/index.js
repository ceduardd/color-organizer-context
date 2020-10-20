import React from 'react';
import ReactDOM from 'react-dom';
import ColorProvider from './components/ColorProvider';
import App from './App';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
