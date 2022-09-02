import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { days } from '../../utils/dateUtils.js';

import './navigation.scss';

const NavigationDay = ({ dayDate }) => {
  console.log(dayDate);
  const presentDay = (dayDate) => {
    return dayDate.getDate() === new Date().getDate();
  };

  const dayNumSelector = classNames('day-label__day-number', {
    'day-label__day-number_current': presentDay(dayDate),
  });

  const dayNameSelector = classNames('day-label__day-name', {
    'day-label__day-name_current': presentDay(dayDate),
  });

  return (
    <div className="calendar__day-label day-label">
      <span className={dayNameSelector}>{days[dayDate.getDay()]}</span>
      <span className={dayNumSelector}>{dayDate.getDate()}</span>
    </div>
  );
};

NavigationDay.propTypes = {
  dayDate: PropTypes.object.isRequired,
};
export default NavigationDay;
