import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
import Modal from './components/modal/Modal.jsx';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (bool) => {
    setIsModalOpen(bool);
  };

  const handleNextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };

  const handlePrevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  const handlePresentWeek = () => {
    setWeekStartDate(new Date());
  };
  return (
    <>
      <Header
        handleNextWeek={handleNextWeek}
        handlePrevWeek={handlePrevWeek}
        handlePresentWeek={handlePresentWeek}
        weekDates={weekDates}
        toggleModal={toggleModal}
      />
      {isModalOpen && <Modal toggleModal={toggleModal} />}
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;

//--------------------------------------
// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }
