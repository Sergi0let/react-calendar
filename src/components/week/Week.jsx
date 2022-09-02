import moment from 'moment';
import React from 'react';
import { getTimeObj } from '../../utils/dateUtils';

import Day from '../day/Day';

import './week.scss';
const isCurrentDay = (day) => moment().format('l') === moment(day).format('l');

const Week = ({
  weekDates,
  eventsObj,
  openModal,
  thisId,
  setCurrentDay,
  deleteTask,
}) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart, indexDay) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        //getting all events from the day we will render
        const dayEvents = eventsObj.filter(
          (event) =>
            getTimeObj(event.dateFrom) > dayStart &&
            getTimeObj(event.dateTo) < dayEnd
        );
        return (
          <Day
            openModal={openModal}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            thisId={thisId}
            currentDay={isCurrentDay(weekDates[indexDay])}
            setCurrentDay={setCurrentDay}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default Week;
