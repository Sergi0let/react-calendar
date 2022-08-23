import React from 'react';

import './header.scss';
import NavigationPanel from './NavigationPanel';

const Header = ({
  handleNextWeek,
  handlePrevWeek,
  handlePresentWeek,
  weekDates,
  toggleModal,
  setEventData,
}) => {
  return (
    <header className="header">
      <button
        onClick={() => {
          toggleModal(true);
          setEventData({ time: new Date() });
        }}
        className="button create-event-btn"
      >
        Create
      </button>
      <NavigationPanel
        weekDates={weekDates}
        handleNextWeek={handleNextWeek}
        handlePrevWeek={handlePrevWeek}
        handlePresentWeek={handlePresentWeek}
        toggleModal={toggleModal}
      />
    </header>
  );
};

export default Header;
{
  /* <i className="fas fa-plus create-event-btn__icon"></i>; */
}
