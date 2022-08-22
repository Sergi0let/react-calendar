import React from 'react';

import NavigationDay from './NavigationDay.jsx';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <NavigationDay key={dayDate.getDate()} dayDate={dayDate} />
      ))}
    </header>
  );
};

export default Navigation;
