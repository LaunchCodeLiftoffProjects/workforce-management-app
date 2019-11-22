import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";

export const NavBar = ({ color }) => (
  <AppBar color={color}>
    <Toolbar>
      <Link to="/">
        <Button>Add Location</Button>
      </Link>
      <Link to="/page2">
        <Button>Update Store Info</Button>
      </Link>
      <Link to="/page3">
        <Button>SWEP</Button>
      </Link>
      <Link to="/page4">
        <Button>STEP</Button>
      </Link>
      <Link to="/page5">
        <Button>VR SWE</Button>
      </Link>
    </Toolbar>
  </AppBar>
);
