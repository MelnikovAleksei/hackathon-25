import React from 'react';

import { poems } from '../data/poems';
import { getElementsFromArrByValue } from '../utils/getElementsFromArrByValue';
import { getListOfUniqProp } from '../utils/getListOfUniqProp';

export const Form = ({ handleSubmit }) => {

  const [problem, setProblem] = React.useState('');
  const [mood, setMood] = React.useState('');

  const [currentPoems, setCurrentPoems] = React.useState([]);

  const [listOfMoods, setListOfMoods] = React.useState([]);

  const [listOfProblems, setListOfProblems] = React.useState(null);

  const resetForm = () => {
    setProblem('');
    setMood('');
  }

  const onChangeProblem = (evt) => {
    const { value } = evt.target;
    setProblem(value);
    setCurrentPoems(getElementsFromArrByValue(poems, 'problem', value));
  }

  const onChangeMood = (evt) => {
    const { value } = evt.target;
    setMood(value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(problem, mood);
    resetForm();
  }

  React.useEffect(() => {
    setListOfProblems(getListOfUniqProp(poems, 'problem'));
  }, [])

  React.useEffect(() => {
    setListOfMoods(getListOfUniqProp(currentPoems, 'mood'));
  }, [currentPoems])

  return (
    <form
      className="form"
      name="Получить стихотворную строку"
      onSubmit={onSubmit}
    >
      <fieldset
        className="form__fieldset"
      >
        {listOfProblems &&
          <legend
            className="form__legend"
          >
            Выберите проблему
          </legend>
        }
          {listOfProblems && listOfProblems.map((elem, id) => (
            <label
              className="form__label"
              key={id}
            >
              {elem}
              <input
                className="form__input-radio"
                type="radio"
                name="problem"
                value={elem}
                checked={problem === elem}
                onChange={onChangeProblem}
              />
            </label>
          ))}
      </fieldset>
      {listOfMoods.length > 0 &&
        <fieldset>
          <legend
            className="form__legend"
          >
            Выберите проблему
          </legend>
          {listOfMoods.map((elem, id) => (
            <label
              className="form__label"
              key={id}
            >
              {elem}
              <input
                className="form__input-radio"
                type="radio"
                name="mood"
                value={elem}
                checked={mood === elem}
                onChange={onChangeMood}
              />
            </label>
          ))}
        </fieldset>
      }
      <button
        className="form__button-submit"
        type="sumbit"
        disabled={mood === '' || problem === ''}
      >
        Получить строку
      </button>
    </form>
  )
}