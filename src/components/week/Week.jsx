import React from 'react';
import { getEventsDay } from '../../utils/dateUtils';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, eventsObj, openModal }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = getEventsDay(eventsObj).filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            openModal={openModal}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            eventDate={dayStart}
          />
        );
      })}
    </div>
  );
};

export default Week;
