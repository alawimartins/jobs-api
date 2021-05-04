import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './companyHeader.styles'
import Button from "../Button/Button.jsx";
import { useTheme } from '../../theme/ThemeContext.js'

const CompanyHeader = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper2>
      <Styled.Wrapper theme={theme}>
        <Styled.ImgLogo />
        <Styled.HeaderAndBtn>
          <div>
            <Styled.Header>So Digital Inc.</Styled.Header>
            <Styled.SubText>sodigital.co</Styled.SubText>
          </div>
          <div>
            <Button primary label="Company Site" />
          </div>
        </Styled.HeaderAndBtn>
      </Styled.Wrapper>
    </Styled.Wrapper2>
  )
}

export default CompanyHeader