import { Button } from "@material-ui/core";
import React from "react";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = ({ link, text, bck, color }) => {
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{
        background: bck,
        color: color,
      }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_buttons" />
      {text}
    </Button>
  );
};

export default MyButton;
