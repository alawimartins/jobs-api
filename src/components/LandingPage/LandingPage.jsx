import React from 'react'
import PropTypes from 'prop-types';
import SearchAreaTemplate from '../SearchAreaTemplate/SearchAreaTemplate.jsx'
import ContentPreview from '../ContentPreview/ContentPreview.jsx'
import JobDescription from '../JobDescription/JobDescription.jsx'
import * as Styled from './landingPage.styles'
import Button from "../Button/Button.jsx";
import { ThemeContext } from "../../index";

class LandingPage extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme =>
          <div>
            <div theme={theme}>
              <SearchAreaTemplate />
              <ContentPreview />
            </div>
          </div>
        }
      </ThemeContext.Consumer>
    )
  }
}


export default LandingPage