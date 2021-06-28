import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import { v4 } from 'uuid';

import Weathers from '../helper/weather';

const api = {
  key: '12ad92778c100cff3285c6e695c7a946',
  base: 'http://api.openweathermap.org/data/2.5/',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(true);
  // coords from click on map

  const [weathers, setWeathers] = useState({
    littleCards: {
      title: 'littleCards',
      items: Weathers,
    },
    bigCards: {
      title: 'bigCards',
      items: [],
    },
  });
  // weather and citi  from input
  const fetchTours = async (name) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${api.base}weather?q=${name}&appid=${api.key}`
      );
      const data = await response.json();

      if (data.cod === '404' || data.cod === '400') {
        console.log(data.cod);
      } else {
        weathers.littleCards.items
          .map((citi) => citi.name === data.name)
          .includes(true)
          ? console.log('this  citi on monitor')
          : setWeathers((prev) => {
              return {
                ...prev,
                littleCards: {
                  items: [data, ...prev.littleCards.items],
                },
              };
            });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // weather and citi from map to big cards
  
  const fetchCoords = async (coords) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${api.base}weather?lat=${coords[0].toFixed(0)}&lon=${coords[1].toFixed(
          0
        )}&appid=${api.key}`
      );
      const data = await response.json();

      if (data.cod === '404' || data.cod === '400') {
        console.log(data.cod);
      } else {
        setWeathers((prev) => {
          return {
            ...prev,
            bigCards: {
              items: [data, ...prev.bigCards.items],
            },
          };
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ///////////////////
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [weathers]);

  if (!loading) {
    sort
      ? weathers.littleCards.items.sort((a, b) => (a.name > b.name ? 1 : -1))
      : weathers.littleCards.items.sort((a, b) => (a.name < b.name ? 1 : -1));
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        weathers,
        setSort,
        fetchTours,
        setWeathers,
        fetchCoords,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
