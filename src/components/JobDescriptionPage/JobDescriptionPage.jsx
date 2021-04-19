import React from 'react'
import PropTypes from 'prop-types';
import SearchAreaTemplate from '../SearchAreaTemplate/SearchAreaTemplate.jsx'
import HowToApply from '../HowToApply/HowToApply.jsx'
import JobDescription from '../JobDescription/JobDescription.jsx'
import CompanyHeader from '../CompanyHeader/CompanyHeader.jsx'
import * as Styled from './jobDescriptionPage.styles'
import Button from "../Button/Button.jsx";
import { ThemeContext } from "../../index";

class JobDescriptionPage extends React.Component {
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
              <CompanyHeader />
              {/* <JobDescription /> */}
              <HowToApply />
            </div>
          </div>
        }
      </ThemeContext.Consumer>
    )
  }
}


export default JobDescriptionPage