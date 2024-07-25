import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RestaurantProvider } from './RestaurantContext';

ReactDOM.render(
  <React.StrictMode>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
