import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './button.styles.js'
import { useTheme } from '../../theme/ThemeContext.js'

const Button = ({ primary, label, ...props }) => {
  const theme = useTheme()

  return (
    <Styled.Button
      primary={primary}
      theme={theme}
    ><b>{label}</b></Styled.Button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
};

export default Button