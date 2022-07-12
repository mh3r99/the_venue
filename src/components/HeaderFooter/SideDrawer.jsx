import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

const SideDrawer = ({ open, onClose }) => {
  const links = [
    { where: "featured", value: "Event starts in" },
    { where: "venuenfo", value: "Venue NFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const renderItem = (item) => (
    <ListItem
      key={item.where}
      button
      onClick={() => scrollToElement(item.where)}
    >
      {item.value}
    </ListItem>
  );

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
      <List component="nav">{links.map(renderItem)}</List>
    </Drawer>
  );
};

export default SideDrawer;
