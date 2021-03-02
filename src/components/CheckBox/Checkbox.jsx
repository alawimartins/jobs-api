import React from 'react'
import * as Styled from './checkBox.styles.js'

export const Checkbox = ({ className, checked, onChange }) => {
  const onCheckboxChange = (event) => {
    onChange(event.target.checked)
  }

  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} onChange={onCheckboxChange} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool
}