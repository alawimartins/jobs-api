import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import StyledTheme from "./global-style";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch.jsx";
import SearchArea from "./components/SearchArea/SearchArea.jsx";
import breakpoint from './utils/breakpoints';
import xsHeader from './assets/mobile/bg-pattern-header.svg';
import smHeader from './assets/tablet/bg-pattern-header.svg';
import lgHeader from './assets/desktop/bg-pattern-header.svg';
import logo from './assets/desktop/logo.svg'
import CheckBox from "./components/ToggleSwitch/toggleSwitch.styles";

const theme = "light";
export const ThemeContext = React.createContext(theme);

const Wrapper = styled.div`
  background-repeat: repeat-x;
  @media ${breakpoint.device.xs}{
    background-image: url(${xsHeader});
  }
  @media ${breakpoint.device.sm}{
    background-image: url(${smHeader});
  }
  @media ${breakpoint.device.lg}{
    background-image: url(${lgHeader});
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      checked: true,
    };

  }
  toggleTheme() {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
      checked: !this.state.checked,
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <StyledTheme />
        <Wrapper>
          <img src={logo} />
          <ToggleSwitch checked={this.state.checked} onChange={this.toggleTheme.bind(this)} />
          <SearchArea />
        </Wrapper>
      </ThemeContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
