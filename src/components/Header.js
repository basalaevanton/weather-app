import './header.css';
import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

export function Header() {
  const { sort, setSort, fetchTours } = useGlobalContext();

  const [input, setInput] = useState([]);

  const icons = [
    'icon-rainy',
    'icon-sunny',
    'icon-cloudy',
    'icon-snowy',
    'icon-stormy',
    'icon-blizzard',
    'icon-metorite',
    'icon-wind',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTours(input);
    setInput(['']);
  };

  return (
    <header className="sort-form ">
      <div className="sort-form__group">
        <div
          active={sort == true ? 'true' : 'false'}
          className="button "
          onClick={() => setSort(true)}
        >
          <span
            className="icon"
            style={{
              backgroundImage: `url("../../img/icon/icon-arrow-down.svg`,
            }}
          ></span>
        </div>
        <div className="button" onClick={() => setSort(false)}>
          <span
            className="icon"
            style={{ backgroundImage: `url("../../img/icon/icon-arrow-up.svg` }}
          ></span>
        </div>
      </div>

      <div className="sort-form__group">
        <form className="header__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Название города"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submite" className="button">
            To list
          </button>
        </form>
      </div>

      <div className="sort-form__group">
        {icons.map((item, id) => {
          return (
            <div className="button " key={id}>
              <span
                className="icon"
                style={{
                  backgroundImage: `url("../../img/icon/${item}.svg`,
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </header>
  );
}
