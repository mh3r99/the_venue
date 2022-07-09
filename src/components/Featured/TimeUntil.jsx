import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Slide } from "react-reveal";

const TimeUntil = () => {
  const [deadline, setDeadline] = useState("Dec, 16, 2023");
  const [date, setDate] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setDate({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => getTimeUntil(deadline), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          <div className="countdown__item">
            <div className="countdown_time">{date.days}</div>
            <div className="countdown__tag">Days</div>
          </div>
          <div className="countdown__item">
            <div className="countdown_time">{date.hours}</div>
            <div className="countdown__tag">Hs</div>
          </div>
          <div className="countdown__item">
            <div className="countdown_time">{date.hours}</div>
            <div className="countdown__tag">Min</div>
          </div>
          <div className="countdown__item">
            <div className="countdown_time">{date.seconds}</div>
            <div className="countdown__tag">Sec</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
