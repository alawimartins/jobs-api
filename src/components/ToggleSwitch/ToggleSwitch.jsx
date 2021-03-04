import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './toggleSwitch.styles'
import moonImg from '@assets/desktop/icon-moon.svg'
import sunImg from '@assets/desktop/icon-sun.svg'

const ToggleSwitch = ({ checked, onChange }) => {
  const onToggleSwitchChange = (event) => {
    onChange(event.target.checked)
  }

  return (
    <Styled.Wrapper>
      <Styled.Icon src={moonImg} />
      <Styled.CheckBoxWrapper>
        <Styled.CheckBox id="checkbox" type="checkbox" checked={checked} onChange={onToggleSwitchChange} />
        <Styled.CheckBoxLabel htmlFor="checkbox" />
      </Styled.CheckBoxWrapper>
      <Styled.Icon src={sunImg} />
    </Styled.Wrapper>
  )
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default ToggleSwitch