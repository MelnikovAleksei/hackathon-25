import React from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { PoemCard } from './PoemCard';

export const Favorites = () => {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const [currentPoem, setCurrentPoem] = React.useState(null);

  const [favoritePoems, setFavoritePoems] = React.useState([]);

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  }

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  }

  const setPoems = () => {
    const keys = Object.keys(localStorage);
    const poems = [];
    for (let i = 0; i < keys.length; i++) {
      poems.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setFavoritePoems(poems);
  }

  const handleRemoveFromFavorites = () => {
    localStorage.removeItem(currentPoem.id.toString());
    setPoems();
    onCloseModal();
  }

  const handleClickOptions = (currentPoem) => {
    setCurrentPoem(currentPoem);
    onOpenModal();
  }

  React.useEffect(() => {
    setPoems();
  }, [])


  return (
    <>
      <h2>
        Избранное
      </h2>
      <Link
        to="/"
      >
        Назад
      </Link>
      <ul>
        {favoritePoems && favoritePoems.map(poem => (
          <PoemCard
            key={poem.id}
            poemData={poem}
            handleClickOptions={handleClickOptions}
          />
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <button
          type="button"
          onClick={handleRemoveFromFavorites}
        >
          Удалить из избранного
        </button>
        {currentPoem &&
          <CopyToClipboard
            text={currentPoem.text}
          >
            <button
              type="button"
            >
              Скопировать
            </button>
          </CopyToClipboard>
        }
        <button
          type="button"
          onClick={onCloseModal}
        >
          Отмена
        </button>
      </Modal>
    </>
  )
}
