import React from 'react';

import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, eventsObj, openModal, thisId }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        //getting all events from the day we will render
        const dayEvents = eventsObj.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );
        return (
          <Day
            openModal={openModal}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            thisId={thisId}
          />
        );
      })}
    </div>
  );
};

export default Week;
