import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

const SideDrawer = ({ open, onClose }) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        onClose(false);
      }}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("featured")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => scrollToElement("venuenfo")}>
          Venue info
        </ListItem>
        <ListItem button onClick={() => scrollToElement("highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElement("pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElement("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
