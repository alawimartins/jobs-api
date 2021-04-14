import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './button.styles.js'
import { ThemeContext } from "../../index";

const Button = ({ primary, label, ...props }) => {
  return (
    <ThemeContext.Consumer>
      {theme =>
        <Styled.Button
          primary={primary}
          theme={theme}
        ><b>{label}</b></Styled.Button>
      }
    </ThemeContext.Consumer>
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