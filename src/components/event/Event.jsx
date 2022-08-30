import React, { useState } from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, time }) => {
  const [isDelete, setIsDelete] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const handleDeleteEvent = () => {
    setIsDelete(true);
  };

  return (
    <>
      <div
        onClick={handleDeleteEvent}
        style={eventStyle}
        className="event delete-event-btn "
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        {isDelete && <DeleteButton />}
      </div>
    </>
  );
};

export default Event;

function DeleteButton() {
  return <button style={deleteStyle}>Delete</button>;
}

const deleteStyle = {
  position: 'relative',
  top: '0',
  right: '0',
  border: 'none',
  textTransform: 'uppercase',
  color: 'blue',
  zIndex: '1',
};
