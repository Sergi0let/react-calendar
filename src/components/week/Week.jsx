import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events }) => {
  const getEventsDay = (events, dayStart, dayEnd) => {
    if (!events) {
      return null;
    }
    return events
      .map((event) => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      }))
      .filter((event) => event.dateFrom >= dayStart && event.dateTo < dayEnd);
  };
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart, index) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events
          ? getEventsDay(events, dayStart, dayEnd)
          : null;

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
