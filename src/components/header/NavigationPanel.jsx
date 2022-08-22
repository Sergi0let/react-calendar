import React from 'react';
import './navigationPanel.scss';

const NavigationPanel = () => {
  return (
    <div className="navigation">
      <button className="navigation__today-btn button">Today</button>
      <button className="icon-button navigation__nav-icon">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="icon-button navigation__nav-icon">
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month"></span>
    </div>
  );
};

export default NavigationPanel;
