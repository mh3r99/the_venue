import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-reveal";
import MyButton from "../utils/MyButton";

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);

  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
          // onReveal={() => porcentage()}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th JUNE</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <MyButton
              text="Purchase tickets"
              bck="#ffa800"
              color="#fff"
              link="http://google.com"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
