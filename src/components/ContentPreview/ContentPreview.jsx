import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import * as Styled from './contentPreview.styles'
import { useTheme } from '../../theme/ThemeContext.js'

const ContentPreview = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper2>
      <Styled.ImgLogo />
      <Link style={{ textDecoration: "none" }} to="/jobs">
        <Styled.Wrapper theme={theme}>
          <div>
            <Styled.SubText>5h ago • Full Time</Styled.SubText>
            <h2>Senior Software Engineer</h2>
            <Styled.SubText>National Wildlife</Styled.SubText>
          </div>
          <div>
            <Styled.Link href="https://www.google.com/"><b>Google</b></Styled.Link>
          </div>
        </Styled.Wrapper>
      </Link>
    </Styled.Wrapper2>

  )
}


export default ContentPreview