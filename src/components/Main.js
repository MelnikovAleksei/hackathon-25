import React from 'react';
import Modal from 'react-modal';

import { Form } from './Form';
import { Article } from './Article';

import { getPoems } from '../utils/getPoem';

import { poems } from '../data/poems';

Modal.setAppElement('#root');

export const Main = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [currentPoems, setCurrentPoems] = React.useState(null);
  const [currentPoem, setCurrentPoem] = React.useState(null);

  const getRandomPoem = (selectedPoems) => {
    return selectedPoems[Math.floor(Math.random() * (selectedPoems.length))];
  }

  const handleSubmit = (problem, mood) => {
    const selectedPoems = getPoems(poems, problem, mood);
    setCurrentPoems(selectedPoems);
    setCurrentPoem(getRandomPoem(selectedPoems));
    onOpenModal();
  }

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  }

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  }

  const handleReSearchPoem = () => {
    const newPoem = getRandomPoem(currentPoems);
    if (newPoem !== currentPoem) {
      setCurrentPoem(newPoem);
    } else {
      handleReSearchPoem();
    }
  }

  const handleAddToFavorites = () => {
    localStorage.setItem(currentPoem.id.toString(), JSON.stringify(currentPoem));
  }

  const handleRemoveFromFavorites = () => {
    localStorage.removeItem(currentPoem.id.toString());
  }

  return (
    <main
      className="main"
    >
      <h2
        className="main__title"
      >
        Новый виток в развитии
        гражданского общества
      </h2>
      <p
        className="main__subtitle"
      >
        В стране цензура и для защиты
        общественной нравственности
        обращения и сигналы граждан
        принимаются в стихотворной форме.
        Программа найдёт для вас стихотворную строку,
        которая ясно передаст властям суть проблемы.
      </p>
      <Form
        handleSubmit={handleSubmit}
      />
      {currentPoem &&
      <Modal
        isOpen={modalIsOpen}
        className="modal"
        overlayClassName="modal__overlay"
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <Article
          currentPoem={currentPoem}
          currentPoems={currentPoems}
          handleReSearchPoem={handleReSearchPoem}
          handleAddToFavorites={handleAddToFavorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
        />
        <button
          className="modal__button-close"
          type="button"
          onClick={onCloseModal}
        >
          Закрыть
        </button>
      </Modal>
      }
    </main>
  )
}
