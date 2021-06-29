import './App.css';
import React from 'react';

import { Loader } from './components/Loader';
import { Header } from './components/header';
import { Mapa } from './components/mapa';
import { WeatherContent } from './containers/weatherContent';

import { useGlobalContext } from './context/context';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="weather-app">
      <div className="weather-app__content">
        <Header />
        <WeatherContent />
      </div>
      <Mapa />
    </section>
  );
}

export default App;
