import React from 'react';
import './weatherContent.css';
import { useGlobalContext } from '../context/context';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';

import { bigCard } from '../components/bigCard';
import { littleCard } from '../components/littleCard';

export function WeatherContent() {
  const { loading, weathers, setWeathers, fetchTours } = useGlobalContext();

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
            <div key={key} className={'card-list weather-content__small-cards'}>
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
                                    className={`small-card ${
                                      snapshot.isDragging && 'dragging'
                                    }`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <span class="small-card__city">
                                      {citi.name}
                                    </span>

                                    <span class="small-card__temperature">
                                      {citi.main.temp}
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
                                    <div class="big-card__header">
                                      <span class="big-card__city">
                                        {' '}
                                        {citi.name}
                                      </span>
                                    </div>
                                    <div class="big-card__content">
                                      <div class="big-card__content-wrapper">
                                        <div class="big-card__weather-conditions">
                                          {/* <span class="icon icon--rainy"></span> */}
                                        </div>
                                        <div class="big-card__wind">
                                          {/* <span class="icon icon--wind"></span> */}
                                          <span class="big-card__wind-info">
                                            Ветер ЮЗ, 4-8 м/с
                                          </span>
                                        </div>
                                      </div>
                                      <span class="big-card__temperature">
                                        +{citi.main.temp}°
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
