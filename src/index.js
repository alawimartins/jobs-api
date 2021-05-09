import React, { Component, useState } from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom";
import styled from "styled-components";
import StyledTheme from "./global-style";
import JobDescriptionPage from "./components/JobDescriptionPage/JobDescriptionPage.jsx";
import Header from "./components/Header/Header.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import breakpoint from './utils/breakpoints';
import xsHeader from './assets/mobile/bg-pattern-header.svg';
import smHeader from './assets/tablet/bg-pattern-header.svg';
import lgHeader from './assets/desktop/bg-pattern-header.svg';
import useFetchJobs from './api/useFetchJobs.js'
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


function App() {
  const { jobs, loading, error } = useFetchJobs()
  //TODO: logic to add more jobs
  const loadMore = () => {
    console.log('I NEED TO GIVE MORE JOBS TO LANDING PAGE')
  }

  return (
    <HashRouter basename='/'>
      <ThemeProvider>
        <StyledTheme />
        <Wrapper>
          {/* TODO: add spinner */}
          {loading && <h1>Loading...</h1>}
          {error && <h1>error...</h1>}
          <Header />
          <div className="App">
            <Switch>
              <Route exact path="/">
                {jobs && <LandingPage jobs={jobs} funcProp={loadMore} />}
              </Route>
              <Route path="/jobs/:slug">
                {jobs && <JobDescriptionPage jobs={jobs} />}

              </Route>
            </Switch>
          </div>
        </Wrapper>
      </ThemeProvider>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
