import React from 'react';
import { formatMins, getTimeObj } from '../../../src/utils/dateUtils.js';

import Event from '../event/Event';

const Hour = ({ id, dataHour, hourEvents, openModal, thisId, deleteTask }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${getTimeObj(dateFrom).getHours()}:${formatMins(
          getTimeObj(dateFrom).getMinutes()
        )}`;

        const eventEnd = `${getTimeObj(dateTo).getHours()}:${formatMins(
          getTimeObj(dateTo).getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={
              (getTimeObj(dateTo).getTime() - getTimeObj(dateFrom).getTime()) /
              (1000 * 60)
            }
            marginTop={getTimeObj(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            openModal={openModal}
            id={id}
            thisId={thisId}
            onClick={() => openModal(true)}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default Hour;
