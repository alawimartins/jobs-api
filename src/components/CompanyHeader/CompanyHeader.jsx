import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './companyHeader.styles'
import Button from "../Button/Button.jsx";
import { useTheme } from '../../theme/ThemeContext.js'

const CompanyHeader = ({ job }) => {
  const theme = useTheme()
  return (
    <Styled.Wrapper theme={theme}>
      <Styled.CompanyLogo imgUrl={job.company_logo} />
      <Styled.Title>
        <div>
          <h2>{job.company}</h2>
          <p>{job.company}.com</p>
        </div>
        <Button primary label="Company Site" />
      </Styled.Title>
    </Styled.Wrapper>
  )
}

export default CompanyHeader