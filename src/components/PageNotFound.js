import React from 'react';

import Modal from 'react-modal';

import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  }

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  }

  return (
    <main
      className="main"
    >
      <Link
        className="main__link"
        to="/"
      >
        Вернуться обратно
      </Link>
      <h3
        className="main__title"
      >
        Такой страницы не существует
      </h3>
      <p
        className="main__subtitle"
      >
        Как и слов, из которых состоит первое
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
        <button
          className="article__button-open"
          type="button"
          onClick={onOpenModal}
        >
          Открыть на английском
        </button>
      </article>
      <Modal
        className="modal"
        overlayClassName="modal__overlay"
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
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
          onClick={onCloseModal}
        >
          Закрыть
        </button>
      </Modal>
    </main>
  )
}
