import React from 'react';
import { Form } from './Form';

export const Main = () => {
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
      <Form />
    </main>
  )
}
