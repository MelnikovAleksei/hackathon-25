import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header
      className="header"
    >
      <h1
        className="header__title"
      >
        {'Высоконравственный\n сигнал'}
      </h1>
      <nav>
        <NavLink
          exact to="/"
        >
          Главная
        </NavLink>
        <NavLink
          to="/favorites"
        >
          Избранное
        </NavLink>
      </nav>
    </header>
  )
}
