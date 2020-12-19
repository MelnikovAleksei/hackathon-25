import React from 'react';

export const Article = ({ currentPoem }) => {
  return (
    <article>
      <header>
        <h3>
          {currentPoem.title}
        </h3>
      </header>
      <p
        style={{whiteSpace: "pre-line"}}
      >
        {currentPoem.text}
      </p>
      <footer>
        <address>{currentPoem.author}</address>
      </footer>
    </article>
  )
}
