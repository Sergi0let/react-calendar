import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, openModal, eventsObj, thisId, deleteTask }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            eventsObj={eventsObj}
            openModal={openModal}
            thisId={thisId}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  eventsObj: PropTypes.array.isRequired,
  thisId: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default Calendar;
