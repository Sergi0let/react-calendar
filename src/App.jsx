import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import events from './gateway/events.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModal, setIsModal] = useState(false);
  const [eventsObj, setEventsObj] = useState(events);
  console.log(eventsObj);
  const [deleteButton, setDeleteButton] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const handleNextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };
  const handlePrevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };
  const handleSetCurrent = () => {
    setWeekStartDate(new Date());
  };
  const toggleModal = (value) => {
    setIsModal(value);
  };

  // const handleDeleteEvent = (id) => {
  //   const updatedTask = eventsObj.map((event) => {
  //     if (event.id === id) {
  //       return {
  //         ...event,
  //       };
  //     }
  //     return event;
  //   });
  //   setEventsObj(updatedTask);
  // };

  return (
    <>
      <Header
        weekDates={weekDates}
        clickCurrentWeek={handleSetCurrent}
        clickNextWeek={handleNextWeek}
        clickPrevWeek={handlePrevWeek}
        openModal={toggleModal}
      />
      <Calendar
        weekDates={weekDates}
        openModal={toggleModal}
        closeModal={toggleModal}
      />
      {isModal && <Modal eventsObj={eventsObj} closeModal={toggleModal} />}
    </>
  );
};

export default App;
