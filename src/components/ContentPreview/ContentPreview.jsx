import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import * as Styled from './contentPreview.styles'
import { useTheme } from '../../theme/ThemeContext.js'

const ContentPreview = ({ job }) => {
  const theme = useTheme()
  return (
    <Styled.Wrapper2>
      <Link style={{ textDecoration: "none" }} to="/jobs">
        <Styled.Wrapper theme={theme}>
          <Styled.ImgLogo imgUrl={job.company_logo} />
          <div>
            <Styled.SubText>{job.created_at} • {job.type}</Styled.SubText>
            <h2>{job.title}</h2>
            <Styled.SubText>{job.company}</Styled.SubText>
          </div>
          <div>
            <Styled.Link href={job.url}><b>{job.location}</b></Styled.Link>
          </div>
        </Styled.Wrapper>
      </Link>
    </Styled.Wrapper2>

  )
}


export default ContentPreview