import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import * as Styled from './contentPreview.styles'
import { useTheme } from '../../theme/ThemeContext.js'

const ContentPreview = ({ job }) => {
  const theme = useTheme()
  return (
    <Link style={{ textDecoration: "none" }} to={`/jobs/${job.id}`}>
      <Styled.Wrapper theme={theme}>
        <Styled.CompanyLogo imgUrl={job.company_logo} />
        <div>
          <p>{job.created_at} • {job.type}</p>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
        <div>
          <Styled.Link href={job.url}><b>{job.location}</b></Styled.Link>
        </div>
      </Styled.Wrapper>
    </Link>
  )
}

export default ContentPreview
