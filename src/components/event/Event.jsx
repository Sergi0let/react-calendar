import React from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, time, openModal }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <>
      <div
        onClick={() => openModal(true)}
        style={eventStyle}
        className="event delete-event-btn "
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};

export default Event;
