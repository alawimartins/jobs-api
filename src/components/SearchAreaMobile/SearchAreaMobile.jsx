import React, { useState } from 'react'
import PropTypes from 'prop-types';
import * as Styled from './searchAreaMobile.styles'
import SearchBar from "./../SearchBar/SearchBar.jsx";
import Modal from '../Modal/Modal.jsx'
import searchIcon from '../../assets/mobile/icon-search.svg'
import filterIcon from '../../assets/mobile/icon-filter-light.svg'
import filterDarkIcon from '../../assets/mobile/icon-filter.svg'
import { useTheme } from '../../theme/ThemeContext.js'

const SearchAreaMobile = () => {
  const theme = useTheme()
  const [checked, setChecked] = useState(false)
  const [showModal, setShowModal] = useState(false)


  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }


  return (
    <>
      <Styled.SearchWrapper theme={theme}>
        <SearchBar theme={theme} placeholder={"Filter by title, companies, expertise…"} />
        <Styled.Button onClick={toggleModal}><img src={theme === 'light' ? filterDarkIcon : filterIcon} /></Styled.Button>
        <Styled.ButtonWrapper>
          <Styled.ButtonSearch >
            <img src={searchIcon} />
          </Styled.ButtonSearch>
        </Styled.ButtonWrapper>
      </Styled.SearchWrapper>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

SearchAreaMobile.propTypes = {
  onChange: PropTypes.func
}

export default SearchAreaMobile