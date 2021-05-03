import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchAreaMobile.styles'
import SearchBar from "./../SearchBar/SearchBar.jsx";
import { ThemeContext } from "../../index";
import Modal from '../Modal/Modal.jsx'
import searchIcon from '../../assets/mobile/icon-search.svg'
import filterIcon from '../../assets/mobile/icon-filter-light.svg'
import filterDarkIcon from '../../assets/mobile/icon-filter.svg'

class SearchAreaMobile extends React.Component {
  state = {
    checked: true,
    show: false
  }

  handleCheckboxChange = (event) => {
    this.setState({ checked: event.target.checked })
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme =>
          <>
            <Styled.SearchWrapper theme={theme}>
              <SearchBar theme={theme} placeholder={"Filter by title, companies, expertise…"} />
              <Styled.Button onClick={e => { this.showModal() }}><img src={theme === 'light' ? filterDarkIcon : filterIcon} /></Styled.Button>
              <Styled.ButtonSearch ><img src={searchIcon} /></Styled.ButtonSearch>
            </Styled.SearchWrapper>
            {/* <Modal show={this.state.show} /> */}
          </>
        }
      </ThemeContext.Consumer>
    )
  }
}

SearchAreaMobile.propTypes = {
  onChange: PropTypes.func
}

export default SearchAreaMobile