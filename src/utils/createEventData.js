import { formatMins } from './dateUtils';

export const createTimeData = (eventDate) => {
  const year = eventDate.getFullYear();
  const month = formatMins(eventDate.getMonth() + 1);
  const day = formatMins(eventDate.getDate());
  const hours = eventDate.getHours();

  const date = `${year}-${month}-${day}`;
  const startTime = `${formatMins(hours)}:00`;
  const endTime = hours === 23 ? '23:45' : `${formatMins(hours + 1)}:00`;

  return { date, startTime, endTime };
};
