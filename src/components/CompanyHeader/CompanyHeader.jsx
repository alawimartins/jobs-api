import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './companyHeader.styles'
import Button from "../Button/Button.jsx";
import { useTheme } from '../../theme/ThemeContext.js'

const CompanyHeader = ({ job }) => {
  const theme = useTheme()
  return (
    <Styled.Wrapper2>
      <Styled.Wrapper theme={theme}>
        <Styled.ImgLogo imgUrl={job.company_logo} />
        <Styled.HeaderAndBtn>
          <div>
            <Styled.Header>{job.company}</Styled.Header>
            <Styled.SubText>{job.company}.com</Styled.SubText>
          </div>
          <Styled.ButtonWrapper>
            <Button primary label="Company Site" />
          </Styled.ButtonWrapper>
        </Styled.HeaderAndBtn>
      </Styled.Wrapper>
    </Styled.Wrapper2>
  )
}

export default CompanyHeader