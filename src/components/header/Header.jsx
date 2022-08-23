import React from 'react';

import './header.scss';
import NavigationPanel from './NavigationPanel';

const Header = ({ handleNextWeek, handlePrevWeek, handlePresentWeek }) => {
  return (
    <header className="header">
      <button className="button create-event-btn">Create</button>
      <NavigationPanel
        handleNextWeek={handleNextWeek}
        handlePrevWeek={handlePrevWeek}
        handlePresentWeek={handlePresentWeek}
      />
    </header>
  );
};

export default Header;
{
  /* <i className="fas fa-plus create-event-btn__icon"></i>; */
}
