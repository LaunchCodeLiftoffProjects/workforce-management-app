import React from "react";
import "./App.css";
import { Routes } from "./Router";
<<<<<<< HEAD



export default Routes;

=======
import { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0b5994"
    },
    secondary: {
      main: "#ffa500"
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
>>>>>>> 7186243653f408e6990e4a5ee892c4a893c8e45e
