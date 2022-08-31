import React from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, time, openModal, id, thisId }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const getEventId = (id) => {
    thisId(id);
  };

  return (
    <>
      <div
        onClick={() => {
          openModal(true);
          getEventId(id);
        }}
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
