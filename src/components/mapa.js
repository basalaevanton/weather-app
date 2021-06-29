import React, { useState, useEffect } from 'react';
import './mapa.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useGlobalContext } from '../context/context';

export function Mapa() {
  const ymaps = React.useRef(null);

  const [mapState, setMapState] = useState({
    center: [55.75, 37.57],
  
    zoom: 4,
    searchControlProvider: 'yandex#search',
  });

 

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
  return (
    <Map
      className="weather-app__map weather-map "
      onLoad={(ympas) => (ymaps.current = ympas)}
      state={mapState}
      onClick={getCoords}
    >
      {weathers.bigCards.items.map((item, key) => {
        console.log(item);
        return (
          <Placemark
            key={key}
            defaultGeometry={[item.coord.lat, item.coord.lon]}
          />
        );
      })}
    </Map>
  );
}
