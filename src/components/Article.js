import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Article = ({ currentPoem }) => {
  return (
    <article
      className="article"
    >
      <h3
        className="article__title"
      >
        Текст стихотворения найден
      </h3>
      <p
        className="article__text"
      >
        {currentPoem.text}
      </p>
      <p
        className="article__text-info"
      >
        {currentPoem.title}
      </p>
      <p
        className="article__text-info"
      >
        {`${currentPoem.author} ${currentPoem.date}г.`}
      </p>
      <CopyToClipboard
          text={currentPoem.text}
        >
          <button
            className="article__button-copy"
            type="button"
          >
            Скопировать
          </button>
        </CopyToClipboard>
    </article>
  )
}
