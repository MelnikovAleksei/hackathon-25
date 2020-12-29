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
      <nav className="header__nav">
        <NavLink
          className="header__nav-link"
          activeClassName="header__nav-link_active"
          exact to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className="header__nav-link"
          activeClassName="header__nav-link_active"
          to="/favorites"
        >
          Избранное
        </NavLink>
      </nav>
    </header>
  )
}
