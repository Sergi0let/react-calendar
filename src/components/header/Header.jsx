import React from 'react';
import { getPresentMonth } from '../../utils/dateUtils';

import './header.scss';

const Header = ({
  weekDates,
  clickCurrentWeek,
  clickNextWeek,
  clickPrevWeek,
  openModal,
  onEventData,
}) => {
  return (
    <header className="header">
      <button
        onClick={() => {
          openModal(true);
        }}
        className="button create-event-btn"
      >
        <i className="fas fa-plus create-event-btn__icon"></i>
        Create
      </button>
      <div className="navigation">
        <button
          onClick={clickCurrentWeek}
          className="navigation__today-btn button"
        >
          Today
        </button>
        <button className="icon-button navigation__nav-icon">
          <i onClick={clickPrevWeek} className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i onClick={clickNextWeek} className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {getPresentMonth(weekDates)}
        </span>
      </div>
    </header>
  );
};

export default Header;
