import React from 'react';

export const Article = ({ currentPoem }) => {
  return (
    <article
      className="article"
    >
      <header
        className="article__header"
      >
        <h3
          className="article__title"
        >
          {currentPoem.title}
        </h3>
      </header>
      <p
        className="article__text"
        style={{
          whiteSpace: "pre-line",
          overflowY: "scroll",
          maxHeight: 250,
        }}
      >
        {currentPoem.text}
      </p>
      <footer
        className="article__footer"
      >
        <address
          className="article__address"
        >
          {currentPoem.author}
        </address>
      </footer>
    </article>
  )
}
