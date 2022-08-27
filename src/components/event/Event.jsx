import React, { useState } from 'react';
import events from '../../gateway/events';
import './event.scss';
import ModalDelete from './ModalDelete';

const Event = ({ height, marginTop, title, time }) => {
  const [isDelete, setIsDelete] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const addBlock = () => {
    setIsDelete(true);
  };
  const removeBlock = () => {
    setIsDelete(false);
  };

  // isDelete = 'hover' ? 'event__block-delete' : null;
  return (
    <div
      onMouseLeave={removeBlock}
      onMouseEnter={addBlock}
      style={eventStyle}
      className="event delete-event-btn "
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDelete && <ModalDelete />}
    </div>
  );
};

export default Event;
