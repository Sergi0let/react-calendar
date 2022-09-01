import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
// import events from './gateway/events.js';

const baseUrl = 'https://6308db4ef8a20183f76a2443.mockapi.io/events/events';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModal, setIsModal] = useState(false);
  const [eventsObj, setEventsObj] = useState([]);
  console.log('evObj', eventsObj);
  const [eventId, setEventId] = useState(null);
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

  const handlerSetId = (valueId) => {
    setEventId(valueId);
  };

  const fetchEventsList = () => {
    fetch(baseUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((eventsList) => {
        setEventsObj(eventsList);
      });
  };

  useEffect(() => {
    fetchEventsList();
  }, []);

  const handleCreateEvent = (eventTask) => {
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventTask),
    }).then((response) => {
      if (response.ok) {
        fetchEventsList();
      } else {
        throw new Error('Failed to create Event');
      }
    });
  };

  // const handleCreateEvent = (eventTask) => {
  //   const updatedEvent = eventsObj.concat(eventTask);
  //   setEventsObj(updatedEvent);
  // };

  // const handleDeleteEvent = (eventId) => {
  //   const updatedEvent = eventsObj.filter((even) => even.id !== eventId);
  //   setEventsObj(updatedEvent);
  //   toggleModal(false);
  // };

  const handleDeleteEvent = (eventId) => {
    fetch(`${baseUrl}/${eventId}`, {
      method: 'DELETE',
    });
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
      <Calendar
        weekDates={weekDates}
        openModal={toggleModal}
        closeModal={toggleModal}
        eventsObj={eventsObj}
        thisId={handlerSetId}
        setCurrentDay={handleSetCurrent}
      />
      {isModal && (
        <Modal
          eventsObj={eventsObj}
          closeModal={toggleModal}
          setEventsObj={setEventsObj}
          addTask={handleCreateEvent}
          deleteTask={handleDeleteEvent}
          eventId={eventId}
        />
      )}
    </>
  );
};

export default App;
