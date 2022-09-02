import React, { useState } from 'react';
import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  time,
  openModal,
  id,
  thisId,
  deleteTask,
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const getEventId = (id) => {
    thisId(id);
  };

  const handlerDeleteVisibility = () => {
    setIsDelete(true);
  };
  const handlerDeleteHidden = () => {
    setIsDelete(false);
  };

  return (
    <>
      <div
        onClick={() => {
          openModal(true);
        }}
        onMouseEnter={handlerDeleteVisibility}
        onMouseLeave={handlerDeleteHidden}
        style={eventStyle}
        className="event delete-event-btn "
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        {isDelete && (
          <div className="event__delete">
            <button
              className="event__delete-button "
              onClick={() => {
                deleteTask(id);
                getEventId(id);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
