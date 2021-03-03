import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchBar.styles'
import { ThemeContext } from "../../index";

const SearchBar = ({ onChange, icon, placeholder }) => {
  const onSearchBarChange = (event) => {
    onChange(event.target.checked)
  }
  return (
    <>
      <ThemeContext.Consumer>
        {theme =>
          <Styled.SearchBox>
            <Styled.SearchIcon src={icon} />
            <Styled.SearchInput theme={theme} type="text" placeholder={placeholder} />
          </Styled.SearchBox>
        }
      </ThemeContext.Consumer>
    </>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  icon: PropTypes.string
}

export default SearchBar