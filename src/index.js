import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
import { YMaps } from 'react-yandex-maps';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <YMaps
        query={{
          ns: 'use-load-option',
          apikey: 'fbaa66ca-b14f-4867-9880-5cdaebab9bb5',
          load: ['Placemark', 'geocode', 'geoObject.addon.balloon'],
        }}
      >
        <App />
      </YMaps>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
