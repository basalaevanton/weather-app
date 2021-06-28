import './header.css';
import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

export function Header() {
  const { setSort, fetchTours } = useGlobalContext();

  const [input, setInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTours(input);
    setInput(['']);
  };

  return (
    <header>
      <button className="btn" onClick={() => setSort(true)}>
        сортировка abc
      </button>
      <button onClick={() => setSort(false)}>сортировка zyx</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="город"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submite" className="btn">
          Добавь свой город в список
        </button>
      </form>
    </header>
  );
}
