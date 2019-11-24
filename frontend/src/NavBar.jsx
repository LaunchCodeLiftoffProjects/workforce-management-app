import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";

export const NavBar = ({ color }) => (
  <AppBar color={color}>
    <Toolbar>
      <Link to="/page1">
        <Button>Store Locations</Button>
      </Link>
      <Link to="/page2">
        <Button>Edit</Button>
      </Link>
      <Link to="/page3">
        <Button>page 3</Button>
      </Link>
      <Link to="/page4">
        <Button>page 4</Button>
      </Link>
      <Link to="/page5">
        <Button>Add new Store</Button>
      </Link>
    </Toolbar>
  </AppBar>
);
