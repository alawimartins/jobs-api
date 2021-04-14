import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './contentPreview.styles'
import { ThemeContext } from "../../index";

class ContentPreview extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log('heeeeey')
    const response = await fetch(url)
    console.log(response, 'response11')
    const data = await response.json()
    console.log('data123', data)

  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme =>
          <Styled.Wrapper2>
            <Styled.ImgLogo />
            <Styled.Wrapper theme={theme}>
              <div>
                <Styled.SubText>5h ago • Full Time</Styled.SubText>
                <h2>Senior Software Engineer</h2>
                <Styled.SubText>National Wildlife</Styled.SubText>
              </div>
              <div>
                <Styled.Link href="https://www.google.com/"><b>Google</b></Styled.Link>
              </div>
            </Styled.Wrapper>
          </Styled.Wrapper2>
        }
      </ThemeContext.Consumer>
    )
  }
}


export default ContentPreview