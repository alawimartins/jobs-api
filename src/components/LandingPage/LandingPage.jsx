import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import SearchAreaTemplate from '../SearchAreaTemplate/SearchAreaTemplate.jsx'
import ContentPreview from '../ContentPreview/ContentPreview.jsx'
import * as Styled from './landingPage.styles'
import { useTheme, useThemeUpdate } from '../../theme/ThemeContext.js'

const LandingPage = ({ jobs, funcProp }) => {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  const [checked, setChecked] = useState(false)
  const [currentJobs, setCurrentJobs] = useState(jobs)

  useEffect(() => {
    setChecked(!checked)
  }, [toggleTheme])

  useEffect(() => {
    setCurrentJobs(jobs.slice(0, 12))
  }, [jobs])

  const loadMore = () => {
    if (currentJobs.length + 12 < jobs.length) {
      setCurrentJobs(jobs.slice(0, currentJobs.length + 12))
    } else {
      funcProp()
    }
  }

  return (
    <div>
      <div theme={theme}>
        <SearchAreaTemplate />
        <Styled.Wrapper>
          {currentJobs.map(job => {
            return <ContentPreview key={job.id} job={job} />
          })}
        </Styled.Wrapper>
      </div>
      <button onClick={loadMore}>Add</button>
    </div>
  )
}

export default LandingPage