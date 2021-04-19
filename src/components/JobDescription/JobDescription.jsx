import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './jobDescription.styles'
import Button from "../Button/Button.jsx";
import { ThemeContext } from "../../index";

class JobDescription extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme =>
          <Styled.Wrapper2>
            <Styled.Wrapper theme={theme}>
              <Styled.HeaderAndBtn>
                <div>
                  <Styled.SubText>5h ago • Full Time</Styled.SubText>
                  <Styled.Header>Senior Software Engineer</Styled.Header>
                  <Styled.Link href="https://www.google.com/"><b>Remote, Seoul, Tokyo, Mountain View, San Fransisco</b></Styled.Link>
                </div>
                <div>
                  <Button label="Apply Now" />
                </div>
              </Styled.HeaderAndBtn>
              <p>Senior Software Engineer</p>
            </Styled.Wrapper>
          </Styled.Wrapper2>
        }
      </ThemeContext.Consumer>
    )
  }
}


export default JobDescription