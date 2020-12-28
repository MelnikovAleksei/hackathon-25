import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Article = ({ currentPoem, currentPoems, handleReSearchPoem, handleAddToFavorites, handleRemoveFromFavorites }) => {
  const [isInFavorites, setIsInFavorites] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem(currentPoem.id.toString()) !== null) {
      setIsInFavorites(true);
    } else {
      setIsInFavorites(false);
    }
  }, [currentPoem.id])

  const onClickFavorites = () => {
    if (localStorage.getItem(currentPoem.id.toString()) !== null) {
      handleRemoveFromFavorites();
      setIsInFavorites(false);
    } else {
      handleAddToFavorites();
      setIsInFavorites(true);
    }
  }

  return (
    <article
      className="article"
    >
      <h3
        className="article__title"
      >
        Текст стихотворения
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
      <div
        className="article__buttons-container"
      >
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
        {currentPoems.length > 1 ?
          <button
            className="article__re-search-button"
            type="button"
            onClick={handleReSearchPoem}
          >
            Найти ещё
          </button>
        :
          null
        }
        <button
          type="button"
          onClick={onClickFavorites}
        >
          {isInFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
      </div>
    </article>
  )
}
