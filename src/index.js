import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom";
import styled from "styled-components";
import StyledTheme from "./global-style";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch.jsx";
import JobDescriptionPage from "./components/JobDescriptionPage/JobDescriptionPage.jsx";
import ContentPreview from "./components/ContentPreview/ContentPreview.jsx";
import CompanyHeader from "./components/CompanyHeader/CompanyHeader.jsx";
import HowToApply from "./components/HowToApply/HowToApply.jsx";
import Header from "./components/Header/Header.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import breakpoint from './utils/breakpoints';
import xsHeader from './assets/mobile/bg-pattern-header.svg';
import smHeader from './assets/tablet/bg-pattern-header.svg';
import lgHeader from './assets/desktop/bg-pattern-header.svg';
import logo from './assets/desktop/logo.svg'

import { ThemeProvider } from './theme/ThemeContext.js'


const Wrapper = styled.div`
background-repeat: repeat-x;
width: 100%;
position: absolute;
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
const Elem = styled.div`
justify-content: space-between;
display: flex;
margin-top: 45px;
padding: 0 5%;
`;


function App() {


  return (
    <Router basename='/'>
      <ThemeProvider>
        <StyledTheme />
        <Wrapper>
          <Header />
          <div className="App">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/jobs">
                <JobDescriptionPage />
              </Route>
            </Switch>

          </div>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
