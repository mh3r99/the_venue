import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";

const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        onClose(false);
      }}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("sdsd")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log("sdsd")}>
          Venue info
        </ListItem>
        <ListItem button onClick={() => console.log("sdsd")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("sdsd")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("sdsd")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
