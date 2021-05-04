import React from 'react'
import PropTypes from 'prop-types';
import HowToApply from '../HowToApply/HowToApply.jsx'
import JobDescription from '../JobDescription/JobDescription.jsx'
import CompanyHeader from '../CompanyHeader/CompanyHeader.jsx'
import * as Styled from './jobDescriptionPage.styles'
import { useTheme } from '../../theme/ThemeContext.js'

const JobDescriptionPage = () => {
  const theme = useTheme()

  return (
    <div>
      <div theme={theme}>
        <CompanyHeader />
        <JobDescription />
        <HowToApply />
      </div>
    </div>
  )
}



export default JobDescriptionPage