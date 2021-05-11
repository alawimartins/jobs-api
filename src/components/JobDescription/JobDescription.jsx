import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import * as Styled from './jobDescription.styles'
import Button from "../Button/Button.jsx";
import { useTheme } from '../../theme/ThemeContext.js'
import ReactMarkdown from 'react-markdown'

const JobDescription = ({ job }) => {
  const theme = useTheme()

  return (
    <Styled.Wrapper theme={theme}>
      <Styled.Wrapper2>
        <Styled.HeaderAndBtn>
          <div>
            <Styled.SubText>{job.created_at} • {job.type}</Styled.SubText>
            <Styled.Header>{job.title}</Styled.Header>
            <Styled.Link href="https://www.google.com/"><b>{job.type}, {job.location}</b></Styled.Link>
          </div>
          <div>
            <Button label="Apply Now" />
          </div>
        </Styled.HeaderAndBtn>
      </Styled.Wrapper2>
      <ReactMarkdown>{job.description}</ReactMarkdown>
    </Styled.Wrapper>
  )
}

export default JobDescription