import React from 'react';

export const PoemCard = ({ poemData, handleClickOptions }) => {

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
          handleClickOptions(poemData)
        }}
      >
        Ещё
      </button>
    </article>
  )
}
