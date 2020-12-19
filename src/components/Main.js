import React from 'react';
import { Form } from './Form';
import { Article } from './Article';

import { getPoem } from '../utils/getPoem';

import { poems } from '../data/poems';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Main = () => {

  const [currentPoem, setCurrentPoem] = React.useState(null);

  const handleSubmit = (problem, mood) => {
    setCurrentPoem(getPoem(poems, problem, mood));
  }

  return (
    <main
      className="main"
    >
      <h2
        className="main__header"
      >
        Выберите департамент и своё насроение,
        а сервис подберёт для вас стихотворную строку,
        которая ясно передаст властям суть проблемы
      </h2>
      <Form
        handleSubmit={handleSubmit}
      />
      {currentPoem &&
        <CopyToClipboard
          text={currentPoem.text}
        >
          <button
            type="button"
          >
            Скопировать текст
          </button>
        </CopyToClipboard>
      }
      {currentPoem && <Article currentPoem={currentPoem}/>}
    </main>
  )
}
