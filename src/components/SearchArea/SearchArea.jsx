import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchArea.styles'
import SearchBar from "./../SearchBar/SearchBar.jsx";
import Checkbox from "./../CheckBox/Checkbox.jsx";
import Button from "./../Button/Button.jsx";
import { ThemeContext } from "../../index";
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'


class SearchArea extends React.Component {
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
            <SearchBar theme={theme} icon={locationIcon} placeholder={"Filter by location…"} />
            <label>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange.bind(this)}
              />
              <span style={{ marginLeft: 8 }}>Full Time Only</span>
            </label>
            <Button primary label="Search" />
          </Styled.SearchWrapper>
        }
      </ThemeContext.Consumer>
    )
  }
}

SearchArea.propTypes = {
  onChange: PropTypes.func
}

export default SearchArea