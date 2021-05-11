import React from 'react'
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

import HowToApply from '../HowToApply/HowToApply.jsx'
import JobDescription from '../JobDescription/JobDescription.jsx'
import CompanyHeader from '../CompanyHeader/CompanyHeader.jsx'
import { useTheme } from '../../theme/ThemeContext.js'

const JobDescriptionPage = ({ jobs }) => {
  const theme = useTheme()
  let { slug } = useParams();

  const job = jobs.filter(x => {
    if (x.id === slug) {
      return x
    } else {
      return
    }
  })

  const jobObj = job[0]

  return (
    <div>
      <div theme={theme}>
        <CompanyHeader job={jobObj} />
        <JobDescription job={jobObj} />
        <HowToApply />
      </div>
    </div>
  )
}



export default JobDescriptionPage