import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
// import { createTimeData } from './utils/createEventData.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModal, setIsModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [events, setEvents] = useState(null);

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

  return (
    <>
      <Header
        weekDates={weekDates}
        clickCurrentWeek={handleSetCurrent}
        clickNextWeek={handleNextWeek}
        clickPrevWeek={handlePrevWeek}
        openModal={toggleModal}
      />
      <Calendar weekDates={weekDates} />
      {isModal && (
        <Modal eventData={eventData} closeModal={toggleModal} events={events} />
      )}
    </>
  );
};

export default App;
