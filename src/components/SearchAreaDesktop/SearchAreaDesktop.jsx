import React, { useState } from 'react'
import PropTypes from 'prop-types';
import * as Styled from './SearchAreaDesktop.styles'
import SearchBar from "../SearchBar/SearchBar.jsx";
import Checkbox from "../CheckBox/Checkbox.jsx";
import Button from "../Button/Button.jsx";
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import { useTheme } from '../../theme/ThemeContext.js'




const SearchArea = () => {
  const theme = useTheme()
  const [checked, setChecked] = useState(true)

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <Styled.SearchWrapper theme={theme}>
      <SearchBar theme={theme} icon={searchIcon} placeholder={"Filter by title, companies, expertise…"} />
      <SearchBar theme={theme} icon={locationIcon} placeholder={"Filter by location…"} />
      <Styled.Label>
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span style={{ marginLeft: 8 }}>Full Time Only</span>
      </Styled.Label>
      <Button label="Search" />
    </Styled.SearchWrapper>
  )
}

SearchArea.propTypes = {
  onChange: PropTypes.func
}

export default SearchArea