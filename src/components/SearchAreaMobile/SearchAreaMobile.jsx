import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchAreaMobile.styles'
import SearchBar from "./../SearchBar/SearchBar.jsx";
import Checkbox from "./../CheckBox/Checkbox.jsx";
import Button from "./../Button/Button.jsx";
import { ThemeContext } from "../../index";
import searchIcon from '../../assets/mobile/icon-search.svg'
import filterIcon from '../../assets/mobile/icon-filter.svg'

class SearchAreaMobile extends React.Component {
  state = { checked: true }

  handleCheckboxChange = (event) => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme =>
          <Styled.SearchWrapper theme={theme}>
            <SearchBar theme={theme} icon={searchIcon} placeholder={"Filter by title, companies, expertise…"} />
            <Styled.Button ><img src={filterIcon} /></Styled.Button>
            <Styled.ButtonSearch ><img src={searchIcon} /></Styled.ButtonSearch>
          </Styled.SearchWrapper>
        }
      </ThemeContext.Consumer>
    )
  }
}

SearchAreaMobile.propTypes = {
  onChange: PropTypes.func
}

export default SearchAreaMobile