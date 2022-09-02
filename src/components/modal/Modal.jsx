import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  getDateTime,
  getNumberTime,
  validationDelete,
} from '../../utils/dateUtils';

import './modal.scss';

const Modal = ({ closeModal, addTask, deleteTask, eventId, eventsObj }) => {
  const [titleData, setTitleData] = useState('');
  const [titleDirty, setTitleDirty] = useState(false);
  const [dateData, setDateData] = useState(
    moment(new Date()).format('YYYY-MM-DD')
  );
  const [startTimeData, setStartData] = useState(
    moment(new Date()).format('HH:MM')
  );

  const [endTimeData, setEndTimeData] = useState(
    moment(new Date()).format('HH:MM')
  );

  const [descriptionData, setDescription] = useState('');
  const [descriptioDirty, setDescriptioDirty] = useState(false);

  const [titleError, setTitleError] = useState('Загаловок не може бути пустий');
  const [descriptionError, setDescriptionError] = useState(
    'Опис не може бути пустий'
  );

  const [formValid, setFormValid] = useState(false);
  // const [deleteValid, setDeleteValid] = useState(false);

  useEffect(() => {
    if (
      descriptionError ||
      titleError ||
      getNumberTime(endTimeData) - getNumberTime(startTimeData) > 360 ||
      getNumberTime(endTimeData) - getNumberTime(startTimeData) < 15
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, descriptionError, startTimeData, endTimeData]);

  // useEffect(() => {
  //   const result = validationDelete();
  //   if (!result) {
  //     setDeleteValid(false);
  //   } else {
  //     setDeleteValid(true);
  //   }
  // }, [deleteValid]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitleDirty(true);
        break;
      case 'description':
        setDescriptioDirty(true);
        break;
    }
  };

  const handleChangeTitle = (e) => {
    setTitleData(e.target.value);
    if (e.target.value) {
      setTitleError();
    }
  };

  const handleDate = (e) => {
    setDateData(e.target.value);
  };

  const handleStartTime = (e) => {
    setStartData(e.target.value);
  };

  const handleEndTime = (e) => {
    setEndTimeData(e.target.value);
  };

  const handleSetDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value) {
      setDescriptionError();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      title: titleData,
      description: descriptionData,
      dateFrom: getDateTime(dateData, startTimeData),
      dateTo: getDateTime(dateData, endTimeData),
      isDelete: true,
    };

    addTask(eventData);
    closeModal(false);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            onClick={() => closeModal(false)}
            className="create-event__close-btn"
          >
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            {titleDirty && titleError && (
              <div style={{ color: 'red' }}>{titleError}</div>
            )}
            <input
              type="text"
              name="title"
              placeholder="Заголовок"
              className="event-form__field"
              onChange={handleChangeTitle}
              value={titleData}
              onBlur={(e) => blurHandler(e)}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleDate}
                value={dateData}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleStartTime}
                value={startTimeData}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleEndTime}
                value={endTimeData}
              />
            </div>
            {descriptioDirty && descriptionError && (
              <div style={{ color: 'red' }}>{descriptionError}</div>
            )}
            <textarea
              name="description"
              placeholder="Опис"
              className="event-form__field"
              onChange={handleSetDescription}
              value={descriptionData}
              onBlur={(e) => blurHandler(e)}
            ></textarea>

            <button
              type="submit"
              className="event-form__submit-btn button-modal"
              disabled={!formValid}
            >
              {!formValid ? 'Not Valid' : 'Create'}
            </button>
          </form>
          {/* <button
            className="create-event__delete-btn button-modal"
            // disabled={!deleteValid}
            onClick={() => {
              deleteTask(eventId);
            }}
          >
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
