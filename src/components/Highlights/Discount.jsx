import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";

const Discount = () => {
  const [discount, setDiscount] = useState({
    start: 0,
    end: 30,
  });

  const porcentage = () => {
    if (discount.start < discount.end) {
      setDiscount((prev) => ({
        ...prev,
        start: prev.start + 1,
      }));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      porcentage();
    }, 30);
  });

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={() => porcentage()}>
          <div className="discount_porcentage">
            <span>{discount.start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide>
          <div className="discount_description">
            <h3>Purchase tickets before 20th JUNE</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div>button</div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
