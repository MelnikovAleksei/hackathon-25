import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as RemoveButton} from '../images/button-remove.svg';
import { ReactComponent as CancelButton} from '../images/button-cancel.svg';
import { ReactComponent as CopyButton} from '../images/copy-button.svg';

import Modal from 'react-modal';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { PoemCard } from './PoemCard';

export const Favorites = () => {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const [modalArticleIsOpen, setModalArticleIsOpen] = React.useState(false);

  const [currentPoem, setCurrentPoem] = React.useState(null);

  const [favoritePoems, setFavoritePoems] = React.useState([]);

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  }

  const onOpenModalArticle = () => {
    document.body.style.overflow = 'hidden';
    setModalArticleIsOpen(true);
  }

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  }

  const onCloseModalArticle = () => {
    document.body.style.overflow = 'auto';
    setModalArticleIsOpen(false);
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
          to="/hackathon-25"
        >
          Назад
        </Link>
      </div>
      {favoritePoems.length === 0 &&
          <>
            <h3
              className="main__title"
            >
              В избранном стихотворений нет
            </h3>
            <p
              className="main__subtitle"
            >
              Как и тех слов, из которых состоит первое
              четверостишие стихотворения Льюиса Кэррола "Бармаглот"
            </p>
            <article
              className="article"
            >
              <p
                className="article__text"
              >
                {'Варкалось. Хливкие шорьки \nПырялись по наве, \nИ хрюкотали зелюки, \nКак мюмзики в мове. \n'}
              </p>
              <p
                className="article__text-info"
              >
                Русский перевод <a
                                  className="article__link"
                                  href="https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,_%D0%94%D0%B8%D0%BD%D0%B0_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D1%8C%D0%B5%D0%B2%D0%BD%D0%B0"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Дины Орловской
                                </a>
              </p>
            </article>
            <button
              className="article__button-open"
              type="button"
              onClick={onOpenModalArticle}
            >
              Прочитать на английском
            </button>
          </>}
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
        className="modal"
        overlayClassName="modal__overlay"
        isOpen={modalArticleIsOpen}
        onRequestClose={onCloseModalArticle}
        shouldCloseOnOverlayClick={true}
      >
        <article
          className="article"
        >
          <p
            lang="en"
            className="article__text"
          >
            {'Twas brillig, and the slithy toves \nDid gyre and gimble in the wabe; \nAll mimsy were the borogoves, \nAnd the mome raths outgrabe.'}
          </p>
          <p
            lang="en"
            className="article__text-info"
          >
            Jabberwocky
          </p>
          <p
            lang="en"
            className="article__text-info"
          >
            Lewis Carroll 1871
          </p>
        </article>
        <button
          className="modal__button-close"
          type="button"
          onClick={onCloseModalArticle}
        >
          Закрыть
        </button>
      </Modal>
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
            <RemoveButton
              className="modal-options__button-icon"
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
                <CopyButton
                  className="modal-options__button-icon"
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
            <CancelButton
              className="modal-options__button-icon"
            />
            Отмена
          </button>
        </div>
      </Modal>
    </main>
  )
}
