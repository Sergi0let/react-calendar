import React, { useState, useEffect } from 'react';

const getMinsPassed = () =>
  new Date().getHours() * 60 + new Date().getMinutes();

const TimeLine = ({ currentDay }) => {
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

export default TimeLine;
