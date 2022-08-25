import React, { useState } from 'react';
import events from '../../gateway/events';

import './modal.scss';

const Modal = ({ closeModal }) => {
  const [setTitle, useSetTitle] = useState('Title write!');
  const [setDate, useSetDate] = useState(null);
  const [setStartTime, useSetStartTime] = useState(null);
  const [setEndTime, useSetEndTime] = useState(null);
  const [setDescription, useSetDescription] = useState('Write you task');

  const handleChange = (e) => {
    useSetTitle(e.target.value);
  };

  const handleDate = (e) => {
    useSetDate(e.target.value);
  };

  const handleStartTime = (e) => {
    useSetStartTime(e.target.value);
  };

  const handleEndTime = (e) => {
    useSetEndTime(e.target.value);
  };

  const handleSetDescription = (e) => {
    useSetDescription(e.target.value);
  };

  const getDateTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    const currentHours = new Date(new Date(date).setHours(+hours));
    const currentMinutes = new Date(
      new Date(currentHours).setMinutes(+minutes)
    );
    return currentMinutes;
  };

  const onCreate = () => {
    const eventData = {
      id: Math.floor(Math.random() * 1000),
      title: setTitle,
      description: setDescription,
      dateFrom: getDateTime(setDate, setStartTime),
      dateTo: getDateTime(setDate, setEndTime),
    };
    return eventData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    events.push(onCreate());
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
              placeholder={setTitle}
              className="event-form__field"
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleDate}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleStartTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleEndTime}
              />
            </div>
            <textarea
              name="description"
              placeholder={setDescription}
              className="event-form__field"
              onChange={handleSetDescription}
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
