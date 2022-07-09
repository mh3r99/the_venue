import React from "react";
import { useState } from "react";
import { Zoom } from "react-reveal";
import MyButton from "../utils/MyButton";

const Pricing = () => {
  const [items, setItems] = useState({
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ad, quas sed odio laborum porro.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ad, quas sed odio laborum porro.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ad, quas sed odio laborum porro.",
    ],
    linkto: ["http://google.com", "http://google.com", "http://google.com"],
    delay: [500, 0, 500],
  });

  const showBoxes = () =>
    items.prices.map((_, i) => (
      <Zoom key={i} delay={items.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${items.prices[i]}</span>
              <span>{items.positions[i]}</span>
            </div>
            <div className="pricing_description">{items.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#fff"
                link={items.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
