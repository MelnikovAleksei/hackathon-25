import React from 'react';
import { Link } from 'react-router-dom';

import removeButton from '../images/button-remove.svg';
import cancelButton from '../images/button-cancel.svg';
import copyButton from '../images/copy-button.svg';

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
    <main
      className="main"
    >
      <div
        className="main__container"
      >
        <h2
          className="main__title"
        >
          Избранное
        </h2>
        <Link
          className="main__link"
          to="/"
        >
          Назад
        </Link>
      </div>
      <ul
        className="main__list"
      >
        {favoritePoems && favoritePoems.map(poem => (
          <PoemCard
            key={poem.id}
            poemData={poem}
            handleClickOptions={handleClickOptions}
          />
        ))}
      </ul>
      <Modal
        className="modal-options"
        overlayClassName="modal-options__overlay"
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <div
          className="modal-options__container-buttons"
        >
          <button
            className="modal-options__button"
            type="button"
            onClick={handleRemoveFromFavorites}
          >
            <img
              className="modal-options__button-icon"
              alt="Иконка кнопки убрать из избранного"
              src={removeButton}
            />
            Удалить из избранного
          </button>
          {currentPoem &&
            <CopyToClipboard
              text={currentPoem.text}
            >
              <button
              className="modal-options__button"
                type="button"
              >
                <img
                  className="modal-options__button-icon"
                  alt="Иконка кнопки скопировать текст"
                  src={copyButton}
                />
                Скопировать
              </button>
            </CopyToClipboard>
          }
          <button
            className="modal-options__button"
            type="button"
            onClick={onCloseModal}
          >
            <img
              className="modal-options__button-icon"
              alt="Иконка кнопки закрыть модальное окно"
              src={cancelButton}
            />
            Отмена
          </button>
        </div>
      </Modal>
    </main>
  )
}
