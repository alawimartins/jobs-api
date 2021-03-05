import React from 'react'
import SearchAreaDesktop from "../SearchAreaDesktop/SearchAreaDesktop.jsx";
import SearchAreaMobile from "../SearchAreaMobile/SearchAreaMobile.jsx";

class SearchAreaTemplate extends React.Component {

  render() {
    return (
      <>
        <SearchAreaDesktop />
        <SearchAreaMobile />
      </>
    )
  }
}

export default SearchAreaTemplate