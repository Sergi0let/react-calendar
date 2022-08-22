import React from 'react';

import './header.scss';
import NavigationPanel from './NavigationPanel';

const Header = () => {
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <NavigationPanel />
    </header>
  );
};

export default Header;
