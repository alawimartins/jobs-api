import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import * as Styled from './header.styles'

import logo from '../../assets/desktop/logo.svg'
import { useThemeUpdate } from '../../theme/ThemeContext.js'

const Header = () => {
  const toggleTheme = useThemeUpdate()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(!checked)
  }, [toggleTheme])


  return (
    <Styled.HeaderWrapper>
      <Link style={{ textDecoration: "none" }} to="/">
        <img src={logo} />
      </Link>
      <ToggleSwitch checked={checked} onChange={toggleTheme} />
    </Styled.HeaderWrapper>
  )
}


export default Header