import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#2f2f2f",
        boxShadow: "none",
        padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>

        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => setToggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <SideDrawer
          open={toggleDrawer}
          onClose={(value) => setToggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
