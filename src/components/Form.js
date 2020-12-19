import React from 'react';

export const Form = () => {
  const [department, setDepartment] = React.useState('general');
  const [mood, setMood] = React.useState('unspeakable');

  const handleChangeDepartment = (evt) => {
    const { value } = evt.target;
    setDepartment(value);
  }

  const handleChangeMood = (evt) => {
    const { value } = evt.target;
    setMood(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <form
      className="form"
      name="Получить стихотворную строку"
      onSubmit={handleSubmit}
    >
      <fieldset
        className="form__fieldset"
      >
        <legend
          className="form__legend"
        >
          Выберите департамент
        </legend>
        <div
          className="form__container"
        >
          <label
            className="form__label"
            htmlFor="departmentOfCulture"
          >
            Культуры
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfCulture"
              name="department"
              value="culture"
              checked={department === 'culture'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfHousingAndCommunalServices"
          >
            ЖКХ
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfHousingAndCommunalServices"
              name="department"
              value="housingAndCommunalServices"
              checked={department === 'housingAndCommunalServices'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfTradeAndServices"
          >
            Торговли и услуг
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfTradeAndServices"
              name="department"
              value="tradeAndServices"
              checked={department === 'tradeAndServices'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfNaturalResourcesAndEnvironmentalProtection"
          >
            Природопользования и окружающей среды
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfNaturalResourcesAndEnvironmentalProtection"
              name="department"
              value="naturalResourcesAndEnvironmentalProtection"
              checked={department === 'naturalResourcesAndEnvironmentalProtection'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfLabor"
          >
            Труда
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfLabor"
              name="department"
              value="labor"
              checked={department === 'labor'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfHealth"
          >
            Здравоохранения
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfHealth"
              name="department"
              value="health"
              checked={department === 'health'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfConstruction"
          >
            Строительства
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfConstruction"
              name="department"
              value="construction"
              checked={department === 'construction'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfDistrictAdministration"
          >
            Управа района
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfDistrictAdministration"
              name="department"
              value="districtAdministration"
              checked={department === 'districtAdministration'}
              onChange={handleChangeDepartment}
            />
          </label>
          <label
            className="form__label"
            htmlFor="departmentOfGeneral"
          >
            Общий
            <input
              className="form__input-radio"
              type="radio"
              id="departmentOfGeneral"
              name="department"
              value="general"
              checked={department === 'general'}
              onChange={handleChangeDepartment}
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend
          className="form__legend"
        >
          Выберите настроение
        </legend>
        <div>
          <label
            className="form__label"
            htmlFor="moodAngry"
          >
            Сердитое
            <input
              className="form__input-radio"
              type="radio"
              id="moodAngry"
              name="mood"
              value="angry"
              checked={mood === 'angry'}
              onChange={handleChangeMood}
            />
          </label>
          <label
            className="form__label"
            htmlFor="moodKindly"
          >
            Доброжелательное
            <input
              className="form__input-radio"
              type="radio"
              id="moodKindly"
              name="mood"
              value="kindly"
              checked={mood === 'kindly'}
              onChange={handleChangeMood}
            />
          </label>
          <label
            className="form__label"
            htmlFor="moodUnspeakable"
          >
            Невыразимое
            <input
              className="form__input-radio"
              type="radio"
              id="moodUnspeakable"
              name="mood"
              value="unspeakable"
              checked={mood === 'unspeakable'}
              onChange={handleChangeMood}
            />
          </label>
        </div>
      </fieldset>
      <button
        className="form__button-submit"
        type="sumbit"
      >
        Получить строку
      </button>
    </form>
  )
}
