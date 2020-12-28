import React from 'react';

export const PoemCard = ({ poemData, handleRemoveFromFavorites }) => {

  return (
    <article>
      <p>
        Проблема: <span>{poemData.problem}</span>
      </p>
      <p>
        Настроение: <span>{poemData.mood}</span>
      </p>
      <p>
        {poemData.text}
      </p>
      <p>
        {poemData.author} {poemData.date}
      </p>
      <button
        type="button"
        onClick={() => {
          handleRemoveFromFavorites(poemData.id)
        }}
      >
        Удалить из избранного
      </button>
    </article>
  )
}
