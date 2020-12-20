import React from 'react';

export const Footer = () => {
  return (
    <footer
      className="footer"
    >
      <h3
        className="footer__title"
      >
        Генератор гражданской инициативы
      </h3>
      <ul
        className="footer__list"
      >
        <li
          className="footer__list-item"
        >
          <a
            className="footer__list-item-link"
            href="https://github.com/MelnikovAleksei/hackathon-25"
            target="_blank"
            rel="noreferrer"
          >
            Проект на GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}
