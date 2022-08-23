import React from 'react';
import Calendar from '../components/calendar/Calendar';
import Header from '../components/header/Header';
import { generateWeekRange, getWeekStartDate } from '../utils/dateUtils';

const Page = () => {
  const [weekStartDate, useWeekStarDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  return (
    <div>
      <Header />
      <Calendar weekDates={weekDates} />
    </div>
  );
};
export default Page;
