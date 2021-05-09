import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { useTheme } from './theme/ThemeContext.js'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');
  * { 
    box-sizing: border-box;
  }

  body {
    background-color: ${props => (props.theme === "light" ? "#F4F6F8" : "#121721")};
    color: ${props => (props.theme === "light" ? "black" : "white")};
    font-family: 'Kumbh Sans', sans-serif;
    margin:0;
    font-size: 16px;
  }

  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 20px;
    margin: 0;
    color: ${props => (props.theme === "light" ? "black" : "white")}
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 14px;
  }
`;

const StyledTheme = ({ props }) => {
  const theme = useTheme()
  return (
    <GlobalStyle {...props} theme={theme} />
  );
}

export default StyledTheme;
