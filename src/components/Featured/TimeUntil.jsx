import React from "react";
import { useState } from "react";
import { Slide } from "react-reveal";

const TimeUntil = () => {
  const [first, setfirst] = useState();

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          <div className="countdown__item">
            <div className="countdown_time">23</div>
            <div className="countdown__tag">Days</div>
          </div>
          <div className="countdown__item">
            <div className="countdown_time">2</div>
            <div className="countdown__tag">Hs</div>
          </div>
          <div className="countdown__item">
            <div className="countdown_time">20</div>
            <div className="countdown__tag">Min</div>
          </div>
          <div className="countdown__item">
            <div className="countdown_time">40</div>
            <div className="countdown__tag">Sec</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
