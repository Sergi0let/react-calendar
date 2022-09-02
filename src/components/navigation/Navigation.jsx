import React from 'react';
import PropTypes from 'prop-types';

import NavigationDay from './NavigationDay.jsx';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) => (
        <NavigationDay key={index} dayDate={dayDate} />
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
