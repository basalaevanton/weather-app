import './App.css';
import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { WeatherContent } from './containers/weatherContent';
import { useGlobalContext } from './context/context';

import { v4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';

function App() {
  const ymaps = React.useRef(null);

  const { loading, weathers, setWeathers, fetchTours } = useGlobalContext();

  const getCoords = (e) => {
    // let coords = e.get('coords');
    // fetchCoords(coords);

    ymaps.current.geocode(e.get('coords')).then((res) => {
      const citi = res.geoObjects.get(0).getLocalities();
      console.log(res.geoObjects.get(0).getLocalities());

      citi.length == 0 ? alert('уточните место на карте') : fetchTours(citi[0]);
    });
  };
  // ....................

  // ......................

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="weather-app">
      <div className="weather-app__content">
        <Header />

        <WeatherContent />
      </div>
      <Map
        className="weather-app__map weather-map "
        onLoad={(ympas) => (ymaps.current = ympas)}
        defaultState={{
          center: [55.75, 37.57],

          zoom: 4,
          searchControlProvider: 'yandex#search',
        }}
        onClick={getCoords}
      >
        {weathers.bigCards.items.map((item, key) => {
          return (
            <Placemark
              key={key}
              defaultGeometry={[item.coord.lat, item.coord.lon]}
            />
          );
        })}
      </Map>
    </section>
  );
}

export default App;
