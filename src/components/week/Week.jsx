import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';

import { getTimeObj } from '../../utils/dateUtils';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, eventsObj, openModal, thisId, deleteTask }) => {
  const isCurrentDay = (day) =>
    moment().format('l') === moment(day).format('l');
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
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  eventsObj: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  thisId: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default Week;
