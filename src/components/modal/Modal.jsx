import React, { useState } from 'react';
import moment from 'moment';

import './modal.scss';

const Modal = ({ eventsObj, closeModal }) => {
  const [titleData, setTitleData] = useState('');
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

  const handleChangeTitle = (e) => {
    setTitleData(e.target.value);
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
  };

  const getDateTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    const currentHours = new Date(new Date(date).setHours(hours));
    const currentMinutes = new Date(new Date(currentHours).setMinutes(minutes));
    return currentMinutes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      id: Math.floor(Math.random() * 1000),
      title: titleData,
      description: descriptionData,
      dateFrom: getDateTime(dateData, startTimeData),
      dateTo: getDateTime(dateData, endTimeData),
    };
    eventsObj.push(eventData);

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
            <input
              type="text"
              name="title"
              placeholder="title"
              className="event-form__field"
              onChange={handleChangeTitle}
              value={titleData}
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
            <textarea
              name="description"
              placeholder="description"
              className="event-form__field"
              onChange={handleSetDescription}
              value={descriptionData}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
