import React from 'react';

export const PoemCard = ({ poemData, handleClickOptions }) => {

  return (
    <article
      className="article-card"
    >
      <p
        className="article-card__text-properties"
      >
        Проблема: <span className="article-card__text-properties-span">{poemData.problem}</span>
      </p>
      <p
        className="article-card__text-properties"
      >
        Настроение: <span className="article-card__text-properties-span">{poemData.mood}</span>
      </p>
      <p
        className="article-card__text"
      >
        {poemData.text}
      </p>
      <p
        className="article-card__text-info"
      >
        {poemData.title}
      </p>
      <p
        className="article-card__text-info"
      >
        {poemData.author} {poemData.date}
      </p>
      <button
        type="button"
        className="article-card__button-options"
        onClick={() => {
          handleClickOptions(poemData)
        }}
        aria-label="Дополнительные опции"
      >
      </button>
    </article>
  )
}
