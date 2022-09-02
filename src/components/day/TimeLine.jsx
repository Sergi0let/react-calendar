import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TimeLine = ({ currentDay }) => {
  const getMinsPassed = () =>
    new Date().getHours() * 60 + new Date().getMinutes();

  const [minsPass, setMinsPass] = useState(getMinsPassed());

  useEffect(() => {
    const timerId = setInterval(() => {
      setMinsPass(getMinsPassed());
      console.log(minsPass);
      if (minsPass === 0) {
        currentDay();
      }
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div className="red-line" style={{ top: minsPass }}></div>;
};

TimeLine.propTypes = {
  currentDay: PropTypes.bool,
};
export default TimeLine;
