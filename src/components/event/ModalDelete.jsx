import React from 'react';
import events from '../../gateway/events';

const ModalDelete = () => {
  const handleTaskDelete = (id) => {
    const updatedTasks = events.filter((task) => task.id !== id);
    console.log(id);
    return (events = updatedTasks);
  };
  return (
    <button onClick={handleTaskDelete} className="event__block-delete">
      Delete
    </button>
  );
};
export default ModalDelete;
