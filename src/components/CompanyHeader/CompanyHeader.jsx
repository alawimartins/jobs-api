import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './companyHeader.styles'
import Button from "../Button/Button.jsx";
import { ThemeContext } from "../../index";

class CompanyHeader extends React.Component {
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
              <Styled.ImgLogo />
              <Styled.HeaderAndBtn>
                <div>
                  <Styled.Header>So Digital Inc.</Styled.Header>
                  <Styled.SubText>sodigital.co</Styled.SubText>
                </div>
                <div>
                  <Button primary label="Company Site" />
                </div>
              </Styled.HeaderAndBtn>
            </Styled.Wrapper>
          </Styled.Wrapper2>
        }
      </ThemeContext.Consumer>
    )
  }
}


export default CompanyHeader