import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
            <i class="fas fa-trash event__delete-icon"></i>

            <button
              className="event__delete-button "
              onClick={(e) => {
                e.stopPropagation();
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

Event.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  id: PropTypes.string,
  thisId: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Event;
