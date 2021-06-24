// import React, { useState, useEffect } from 'react';
// import yandexData from '../data/data.json';
const api = {
  key: '12ad92778c100cff3285c6e695c7a946',
  base: 'http://api.openweathermap.org/data/2.5/',
};
let Weathers = [];
const cities = [
  'Вена',
  'Баку',
  'Ереван',
  'Ватикан',
  'Минск',
  'Лондон',
  'Берлин',
  'Хельсинки',
  'Москва',
];

const fetchTours = async (name) => {
  try {
    const response = await fetch(
      `${api.base}weather?q=${name}&appid=${api.key}`
    );
    const data = await response.json();
    if (data.cod === '404') {
      Weathers.push('data');
    } else {
      Weathers.push(data);
    }
  } catch (error) {
    console.log(error);
  }
};

cities.map((citi) => fetchTours(citi));

export default Weathers;

export const W = [
  {
    coord: {
      lon: 16.3721,
      lat: 48.2085,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
    base: 'stations',
    main: {
      temp: 301.46,
      feels_like: 302.83,
      temp_min: 299.71,
      temp_max: 303.31,
      pressure: 1012,
      humidity: 58,
    },
    visibility: 10000,
    wind: {
      speed: 1.34,
      deg: 94,
      gust: 2.24,
    },
    clouds: {
      all: 20,
    },
    dt: 1624462677,
    sys: {
      type: 2,
      id: 2039456,
      country: 'AT',
      sunrise: 1624416866,
      sunset: 1624474735,
    },
    timezone: 7200,
    id: 2761369,
    name: 'Vienna',
    cod: 200,
  },
  {
    coord: {
      lon: 49.892,
      lat: 40.3777,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 304.18,
      feels_like: 302.82,
      temp_min: 304.18,
      temp_max: 304.18,
      pressure: 1010,
      humidity: 29,
    },
    visibility: 10000,
    wind: {
      speed: 3.09,
      deg: 100,
    },
    clouds: {
      all: 0,
    },
    dt: 1624462771,
    sys: {
      type: 1,
      id: 8841,
      country: 'AZ',
      sunrise: 1624410658,
      sunset: 1624464852,
    },
    timezone: 14400,
    id: 587084,
    name: 'Baku',
    cod: 200,
  },
  {
    coord: {
      lon: 44.5136,
      lat: 40.1811,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
    base: 'stations',
    main: {
      temp: 308.24,
      feels_like: 305.75,
      temp_min: 308.24,
      temp_max: 308.24,
      pressure: 1007,
      humidity: 14,
    },
    visibility: 10000,
    wind: {
      speed: 4.63,
      deg: 30,
    },
    clouds: {
      all: 11,
    },
    dt: 1624462773,
    sys: {
      type: 1,
      id: 8851,
      country: 'AM',
      sunrise: 1624411988,
      sunset: 1624466104,
    },
    timezone: 14400,
    id: 616052,
    name: 'Yerevan',
    cod: 200,
  },
  {
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
    base: 'stations',
    main: {
      temp: 293.73,
      feels_like: 293.04,
      temp_min: 291.65,
      temp_max: 295.54,
      pressure: 1023,
      humidity: 46,
    },
    visibility: 10000,
    wind: {
      speed: 2.57,
      deg: 0,
    },
    clouds: {
      all: 13,
    },
    dt: 1624462654,
    sys: {
      type: 2,
      id: 2019646,
      country: 'GB',
      sunrise: 1624419817,
      sunset: 1624479705,
    },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200,
  },
  {
    coord: {
      lon: 27.5667,
      lat: 53.9,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    base: 'stations',
    main: {
      temp: 306.01,
      feels_like: 313.01,
      temp_min: 306.01,
      temp_max: 306.01,
      pressure: 1017,
      humidity: 63,
      sea_level: 1017,
      grnd_level: 993,
    },
    visibility: 10000,
    wind: {
      speed: 2.32,
      deg: 234,
      gust: 3.82,
    },
    clouds: {
      all: 71,
    },
    dt: 1624462625,
    sys: {
      type: 1,
      id: 8939,
      country: 'BY',
      sunrise: 1624412300,
      sunset: 1624473927,
    },
    timezone: 10800,
    id: 625144,
    name: 'Minsk',
    cod: 200,
  },
  {
    coord: {
      lon: 12.4533,
      lat: 41.9024,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 301.22,
      feels_like: 302.82,
      temp_min: 298.85,
      temp_max: 305.38,
      pressure: 1014,
      humidity: 61,
    },
    visibility: 8000,
    wind: {
      speed: 5.14,
      deg: 210,
    },
    clouds: {
      all: 0,
    },
    dt: 1624462820,
    sys: {
      type: 2,
      id: 2037790,
      country: 'VA',
      sunrise: 1624419332,
      sunset: 1624474151,
    },
    timezone: 7200,
    id: 6691831,
    name: 'Vatican City',
    cod: 200,
  },
  {
    coord: {
      lon: 13.4105,
      lat: 52.5244,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 292.85,
      feels_like: 292.6,
      temp_min: 292.01,
      temp_max: 294.31,
      pressure: 1019,
      humidity: 66,
    },
    visibility: 10000,
    wind: {
      speed: 2.24,
      deg: 308,
      gust: 6.26,
    },
    clouds: {
      all: 0,
    },
    dt: 1624462767,
    sys: {
      type: 2,
      id: 2011538,
      country: 'DE',
      sunrise: 1624416215,
      sunset: 1624476808,
    },
    timezone: 7200,
    id: 2950159,
    name: 'Berlin',
    cod: 200,
  },
  {
    coord: {
      lon: 24.9355,
      lat: 60.1695,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d',
      },
    ],
    base: 'stations',
    main: {
      temp: 294.44,
      feels_like: 294.61,
      temp_min: 293.27,
      temp_max: 296.5,
      pressure: 1014,
      humidity: 76,
    },
    visibility: 10000,
    wind: {
      speed: 1.34,
      deg: 237,
      gust: 4.92,
    },
    clouds: {
      all: 40,
    },
    dt: 1624462734,
    sys: {
      type: 2,
      id: 2012104,
      country: 'FI',
      sunrise: 1624409679,
      sunset: 1624477811,
    },
    timezone: 10800,
    id: 658225,
    name: 'Helsinki',
    cod: 200,
  },
  {
    coord: {
      lon: 37.6156,
      lat: 55.7522,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 305.3,
      feels_like: 304.96,
      temp_min: 304.41,
      temp_max: 306.39,
      pressure: 1020,
      humidity: 36,
      sea_level: 1020,
      grnd_level: 1003,
    },
    visibility: 10000,
    wind: {
      speed: 2.92,
      deg: 199,
      gust: 3.05,
    },
    clouds: {
      all: 3,
    },
    dt: 1624462724,
    sys: {
      type: 2,
      id: 2000314,
      country: 'RU',
      sunrise: 1624409107,
      sunset: 1624472296,
    },
    timezone: 10800,
    id: 524901,
    name: 'Moscow',
    cod: 200,
  },
];
