import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchBar.styles'
import { useTheme } from '../../theme/ThemeContext.js'

const SearchBar = ({ onChange, icon, placeholder }) => {
  const theme = useTheme()

  return (
    <Styled.SearchBox>
      {icon && <Styled.SearchIcon src={icon} />}
      <Styled.SearchInput theme={theme} type="text" placeholder={placeholder} icon={icon} />
    </Styled.SearchBox>
  )
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  icon: PropTypes.string
}

export default SearchBar