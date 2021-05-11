import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './howToApply.styles'
import { useTheme } from '../../theme/ThemeContext.js'

const HowToApply = () => {
  const theme = useTheme()

  return (
    <Styled.Wrapper theme={theme}>
      <div>
        <Styled.Header>How to apply</Styled.Header>
        <Styled.Paragraph>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.</Styled.Paragraph>
        <Styled.Paragraph><b>https://examplelink.com/how-to-apply</b></Styled.Paragraph>
      </div>
    </Styled.Wrapper>
  )
}

export default HowToApply