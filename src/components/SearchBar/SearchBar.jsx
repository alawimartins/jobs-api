import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchBar.styles'
import { ThemeContext } from "../../index";

const SearchBar = ({ onChange, icon, placeholder }) => {
  const onSearchBarChange = (event) => {
    onChange(event.target.checked)
  }
  console.log('icon', icon)
  return (
    <>
      <ThemeContext.Consumer>
        {theme =>
          <Styled.SearchBox>
            {icon && <Styled.SearchIcon src={icon} />}
            <Styled.SearchInput theme={theme} type="text" placeholder={placeholder} icon={icon} />
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