import React from 'react';
import Hour from '../hour/Hour';
import TimeLine from './TimeLine';

import './day.scss';

const Day = ({
  dataDay,
  dayEvents,
  openModal,
  thisId,
  currentDay,
  setCurrentDay,
}) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {currentDay && <TimeLine setCurrentDay={setCurrentDay} />}
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            openModal={openModal}
            thisId={thisId}
          />
        );
      })}
    </div>
  );
};

export default Day;
