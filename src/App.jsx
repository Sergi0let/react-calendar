import React, { useState } from 'react';

import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import {
  getWeekStartDate,
  generateWeekRange,
  createTimeValues,
} from '../src/utils/dateUtils.js';
import Modal from './components/modal/Modal.jsx';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventData, setEventData] = useState(null);

  const toggleModal = (bool) => {
    setIsModalOpen(bool);
  };

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

  const handlePresentWeek = () => {
    setWeekStartDate(new Date());
  };

  const handleSetEventData = (dataObj) => {
    setEventData(dataObj);

    if (dataObj?.time) {
      const eventTimeData = createTimeValues(dataObj.time);

      setEventData({
        ...eventTimeData,
        description: '',
        title: '',
        id: null,
      });
    }

    toggleModal(true);
  };

  const handleChange = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <Header
        handleNextWeek={handleNextWeek}
        handlePrevWeek={handlePrevWeek}
        handlePresentWeek={handlePresentWeek}
        weekDates={weekDates}
        toggleModal={toggleModal}
        setEventData={handleSetEventData}
      />
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          handleSetEventData={handleSetEventData}
          handleChange={handleChange}
        />
      )}
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
