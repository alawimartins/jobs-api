import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchArea.styles'
import SearchBar from "./../SearchBar/SearchBar.jsx";
import { ThemeContext } from "../../index";
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'

const SearchArea = ({ onChange }) => {
  const onSearchAreaChange = (event) => {
    onChange(event.target.checked)
  }

  return (
    <ThemeContext.Consumer>
      {theme =>
        <Styled.SearchWrapper>
          <SearchBar theme={theme} icon={searchIcon} placeholder={"Filter by title, companies, expertise…"} />
          <SearchBar theme={theme} icon={locationIcon} placeholder={"Filter by location…"} />
        </Styled.SearchWrapper>
      }
    </ThemeContext.Consumer>
  )
}

SearchArea.propTypes = {
  onChange: PropTypes.func
}

export default SearchArea