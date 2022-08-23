import React, { useState } from 'react';

import EventForm from '../event_element/EventForm';

import './modal.scss';

const Modal = ({
  handleChange,
  toggleModal,
  handleSetEventData,
  eventDataObj,
}) => {
  const [eventData, setEventData] = useState({ ...eventDataObj });
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            onClick={() => toggleModal(false)}
            className="create-event__close-btn"
          >
            +
          </button>
          <EventForm
            eventDataObj={eventData}
            onUpdateEvents={onUploadEvent}
            events={events}
            showAlert={showAlert}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
