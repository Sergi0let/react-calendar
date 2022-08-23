import moment from 'moment';

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
};

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getMonth = (weekDates) => {
  const startWeek = weekDates[0];
  const endWeek = weekDates[weekDates.length - 1];

  return startWeek.getMonth() === endWeek.getMonth()
    ? moment(startWeek).format('MMM YYYY')
    : `${moment(startWeek).format('MMM')} - ${moment(endWeek).format(
        'MMM YYYY'
      )}`;
};

const formatTime = (num) => (num < 9 ? '0' + num : num);

export const createTimeValues = (eventDate) => {
  const year = eventDate.getFullYear();
  const month = formatTime(eventDate.getMonth() + 1);
  const day = formatTime(eventDate.getDate());
  const hours = eventDate.getHours();

  const date = `${year}-${month}-${day}`;
  const startTime = `${formatTime(hours)}:00`;
  const endTime = hours === 23 ? '23:45' : `${formatTime(hours + 1)}:00`;
  console.log(year);

  return { date, startTime, endTime };
};
