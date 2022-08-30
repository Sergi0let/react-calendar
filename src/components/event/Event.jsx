import React from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, time, openModal, id, thisId }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  // console.log('Event', id);

  const getEventId = (id) => {
    thisId(id);
    // console.log(id);
  };

  return (
    <>
      <div
        onClick={() => {
          openModal(true);
          getEventId(id);
        }}
        // onClick={getEventId}
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
