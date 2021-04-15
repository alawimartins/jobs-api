import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './howToApply.styles'
import { ThemeContext } from "../../index";

class HowToApply extends React.Component {
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
              <div>
                <Styled.Header>How to apply</Styled.Header>
                <Styled.SubText>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.</Styled.SubText>
                <Styled.SubText><b>https://examplelink.com/how-to-apply</b></Styled.SubText>
              </div>
            </Styled.Wrapper>
          </Styled.Wrapper2>
        }
      </ThemeContext.Consumer>
    )
  }
}


export default HowToApply