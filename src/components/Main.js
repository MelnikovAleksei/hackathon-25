import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
    setModalIsOpen(true);
  }

  const onCloseModal = () => {
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
        которая ясно передаст властям суть проблемы
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
        <CopyToClipboard
          text={currentPoem.text}
        >
          <button
            className="modal__button-copy"
            type="button"
          >
            Скопировать текст
          </button>
        </CopyToClipboard>
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
