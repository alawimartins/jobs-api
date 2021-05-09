import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import SearchAreaTemplate from '../SearchAreaTemplate/SearchAreaTemplate.jsx'
import ContentPreview from '../ContentPreview/ContentPreview.jsx'
import JobDescription from '../JobDescription/JobDescription.jsx'
import * as Styled from './landingPage.styles'
import Button from "../Button/Button.jsx";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

import logo from '../../assets/desktop/logo.svg'
import styled from "styled-components";
import { useTheme, useThemeUpdate } from '../../theme/ThemeContext.js'

const LandingPage = () => {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(!checked)
  }, [toggleTheme])


  return (
    <div>
      <div theme={theme}>
        <SearchAreaTemplate />
        <ContentPreview />
      </div>
    </div>
  )
}


export default LandingPage