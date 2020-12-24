import React from 'react';
import Modal from 'react-modal';

import { Form } from './Form';
import { Article } from './Article';

import { getPoem } from '../utils/getPoem';

import { poems } from '../data/poems';

Modal.setAppElement('#root');

export const Main = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [currentPoem, setCurrentPoem] = React.useState(null);

  const handleSubmit = (problem, mood) => {
    setCurrentPoem(getPoem(poems, problem, mood));
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

  return (
    <main
      className="main"
    >
      <h2
        className="main__title"
      >
        Высоконравственный сигнал -
        это новый виток
        в развитии гражданского общества
      </h2>
      <p
        className="main__subtitle"
      >
        В стране цензура и для защиты
        общественной нравственности
        обращения и сигналы граждан
        властям принимаются в стихотворной форме.
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
        <Article currentPoem={currentPoem}/>
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
