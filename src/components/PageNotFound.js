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
    <section>
      <h3>
        Такой страницы не существует
      </h3>
      <p>
        Как и слов, из которых состоит первое
        четверостишие стихотворения Льюиса Кэррола "Бармаглот"
      </p>
      <p>
        Варкалось. Хливкие шорьки \n
        Пырялись по наве, \n
        И хрюкотали зелюки, \n
        Как мюмзики в мове. \n
      </p>
      <p>
        русский перевод <a
                          href="https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,_%D0%94%D0%B8%D0%BD%D0%B0_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D1%8C%D0%B5%D0%B2%D0%BD%D0%B0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Дины Орловской
                        </a>
      </p>
      <button
        type="button"
        onClick={onOpenModal}
      >
        Открыть в оригинале
      </button>
      <Link
        to="/"
      >
        Вернуться обратно
      </Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <article>
          <p>
            Twas brillig, and the slithy toves \n
            Did gyre and gimble in the wabe; \n
            All mimsy were the borogoves, \n
            And the mome raths outgrabe.
          </p>
          <p>
            Jabberwocky
          </p>
          <p>
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
    </section>
  )
}
