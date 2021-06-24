import './App.css';
import React, { useState, useEffect } from 'react';

import Weathers from './helper/weather';
const api = {
  key: '12ad92778c100cff3285c6e695c7a946',
  base: 'http://api.openweathermap.org/data/2.5/',
};
function App() {
  const [input, setInput] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(Weathers);
  const [sort, setSort] = useState();

  const fetchTours = async (name) => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${name}&appid=${api.key}`
      );
      const data = await response.json();
      console.log(data);
      if (data.cod === '404' || data.cod === '400') {
        console.log(data.cod);
      } else {
        setWeather([...weather, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities([...cities, input]);
    setInput([]);
    fetchTours(input);
  };

  useEffect(() => {
    sort
      ? weather.sort((a, b) => (a.name > b.name ? 1 : -1))
      : weather.sort((a, b) => (a.name < b.name ? 1 : -1));
  }, [sort]);

  console.log(input);
  console.log(cities);

  return (
    <div className="App">
      <header>
        <button onClick={() => setSort(true)}>сортировка abc</button>
        <button onClick={() => setSort(false)}>сортировка zyx</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="город"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submite" className="btn">
            123
          </button>
        </form>
      </header>

      {weather.map((item, id) => {
        return (
          <section key={id}>
            <h1>{item.name}</h1>
            <p>{item.main.temp}</p>
          </section>
        );
      })}
    </div>
  );
}

export default App;
