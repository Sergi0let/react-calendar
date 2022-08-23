import React from 'react';

import { getMonth } from '../../utils/dateUtils';
import './navigationPanel.scss';

const NavigationPanel = ({
  handleNextWeek,
  handlePrevWeek,
  handlePresentWeek,
  weekDates,
}) => {
  return (
    <div className="navigation">
      <button
        onClick={handlePresentWeek}
        className="navigation__today-btn button"
      >
        Today
      </button>
      <button className="icon-button navigation__nav-icon">
        <i onClick={handlePrevWeek} className="fas fa-chevron-left"></i>
      </button>
      <button className="icon-button navigation__nav-icon">
        <i onClick={handleNextWeek} className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">{getMonth(weekDates)}</span>
    </div>
  );
};

export default NavigationPanel;
