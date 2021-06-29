import React from 'react';
import './weatherContent.css';
import { useGlobalContext } from '../context/context';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';

export function WeatherContent() {
  const { loading, weathers, setWeathers, fetchTours } = useGlobalContext();

  const tempCels = (t) => {
    const temp = (t - 273.15).toFixed(1);
    return temp > 0 ? '+' + temp + '°C' : '-' + temp + '°C';
  };

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
  return (
    <div className="weather-content__result">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(weathers, (data, key) => {
          return (
            <div key={key} className="card-list weather-content__small-cards">
              <h4>{key}</h4>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="dropable-col"
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
                                    className={`small-card ${
                                      snapshot.isDragging && 'dragging'
                                    }`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <span className="small-card__city">
                                      {citi.name}
                                    </span>

                                    <span className="small-card__temperature">
                                      {tempCels(citi.main.temp)}
                                    </span>
                                  </div>
                                );
                              }
                              if (key === 'bigCards') {
                                
                                return (
                                  <div
                                    className={`card big-card ${
                                      snapshot.isDragging && 'dragging'
                                    }`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <div className="big-card__header">
                                      <span className="big-card__city">
                                        {citi.name}
                                      </span>
                                    </div>
                                    <div className="big-card__content">
                                      <div className="big-card__content-wrapper">
                                        <div className="big-card__weather-conditions">
                                          {citi.weather[0].description}
                                          <span
                                            className="icon1"
                                            style={{
                                              backgroundImage: `url('http://openweathermap.org/img/wn/${citi.weather[0].icon}@2x.png')`,
                                            }}
                                          ></span>
                                        </div>
                                        <div className="big-card__wind">
                                          <span
                                            className="icon"
                                            style={{
                                              backgroundImage:
                                                'url(../../img/icon/icon-wind.svg)',
                                            }}
                                          ></span>
                                          <span className="big-card__wind-info">
                                            Ветер {(citi.wind.speed).toFixed(1)} м/с
                                          </span>
                                        </div>
                                      </div>
                                      <span className="big-card__temperature">
                                        {tempCels(citi.main.temp)}
                                      </span>
                                    </div>
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
    </div>
  );
}
