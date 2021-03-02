import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./index";


const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");

  body {
    background-color: ${props => (props.theme === "light" ? "#F4F6F8" : "#121721")};
    color: ${props => (props.theme === "light" ? "black" : "white")};
    font-family: "Roboto", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.4;
    letter-spacing: 0.0167em;
    margin:0;
  }
`;

class StyledTheme extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <GlobalStyle {...this.props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}
StyledTheme.contextType = ThemeContext;

export default StyledTheme;
