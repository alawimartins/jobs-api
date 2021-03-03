import React from 'react'
import * as Styled from './checkBox.styles'

const Checkbox = ({ className, checked, ...props }) => {

  return (
    <Styled.CheckboxContainer className={className}>
      <Styled.HiddenCheckbox checked={checked} {...props} />
      <Styled.StyledCheckbox checked={checked}>
        <Styled.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Styled.Icon>
      </Styled.StyledCheckbox>
    </Styled.CheckboxContainer>
  )
}
export default Checkbox
