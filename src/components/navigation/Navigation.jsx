import React from 'react';
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

export default Navigation;
