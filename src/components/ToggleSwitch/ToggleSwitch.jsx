import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './toggleSwitch.styles'

export const ToggleSwitch = ({ checked, onChange }) => {
  const onToggleSwitchChange = (event) => {
    onChange(event.target.checked)
  }

  return (
    <Styled.SwitchLabel class="switch">
      <Styled.SwitchInput type="checkbox" checked={checked} />
      <Styled.Slider class="slider round"></Styled.Slider>
    </Styled.SwitchLabel>
  )
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}
