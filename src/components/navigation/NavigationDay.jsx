import React from 'react';
import classNames from 'classnames';

import { days } from '../../utils/dateUtils.js';
import './navigation.scss';
const NavigationDay = ({ dayDate }) => {
  const isCurentDay = (dayDate) => {
    return dayDate.getDate() === new Date().getDate();
  };

  const dayNumSelector = classNames('day-label__day-number', {
    'day-label__day-number_current': isCurentDay(dayDate),
  });

  const dayNameSelector = classNames('day-label__day-name', {
    'day-label__day-name_current': isCurentDay(dayDate),
  });

  return (
    <div className="calendar__day-label day-label">
      <span className={dayNameSelector}>{days[dayDate.getDay()]}</span>
      <span className={dayNumSelector}>{dayDate.getDate()}</span>
    </div>
  );
};
export default NavigationDay;
