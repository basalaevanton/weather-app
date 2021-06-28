import './App.css';
import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { Loader } from './components/Loader';
import { Header } from './components/Header';
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
  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    // littleCards to bigCards
    const itemCopy = { ...weathers[source.droppableId].items[source.index] };
    setWeathers((prev) => {
      prev = { ...prev };
      //remove from prev item
      prev[source.droppableId].items.splice(source.index, 1);
      //adding to new items
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };
  if (loading) {
    return <Loader />;
  }
  return (
    
    <YMaps
      query={{
        ns: 'use-load-option',
        apikey: 'fbaa66ca-b14f-4867-9880-5cdaebab9bb5',
        load: ['Placemark', 'geocode', 'geoObject.addon.balloon'],
      }}
    >
      <div className="App">
        {/*  */}
        <Header />

        {/*  */}
        <div className={'container'}>
          <DragDropContext onDragEnd={handleDragEnd}>
            {_.map(weathers, (data, key) => {
              return (
                <div key={key} className={'column'}>
                  <h4>{key}</h4>
                  <Droppable droppableId={key}>
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={'dropable-col'}
                        >
                          {data.items.map((citi, index) => {
                            return (
                              <Draggable
                                key={citi.id}
                                index={index}
                                draggableId={citi.id.toString()}
                              >
                                {(provided, snapshot) => {
                                  if (key === 'littleCards') {
                                    return (
                                      <div
                                        className={`item ${
                                          snapshot.isDragging && 'dragging'
                                        }`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        {citi.name}
                                      </div>
                                    );
                                  }
                                  if (key === 'bigCards') {
                                    return (
                                      <div
                                        className={`item ${
                                          snapshot.isDragging && 'dragging'
                                        }`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        {citi.name}
                                        {citi.main.temp}
                                      </div>
                                    );
                                  }
                                }}
                              </Draggable>
                            );
                          })}

                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              );
            })}
          </DragDropContext>

          <Map
            style={{ width: '40%', height: '600px' }}
            onLoad={(ympas) => (ymaps.current = ympas)}
            defaultState={{
              center: [55.75, 37.57],

              zoom: 6,
              searchControlProvider: 'yandex#search',
            }}
            onClick={getCoords}
          >
            {/*  */}
            {weathers.bigCards.items.map((item, key) => {
              return (
                <Placemark
                  key={key}
                  defaultGeometry={[item.coord.lat, item.coord.lon]}
                />
              );
            })}

            {/*  */}
          </Map>
        </div>
      </div>
    </YMaps>
  );
}

export default App;
