import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './modal.styles.js'
import { ThemeContext } from "../../index";

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <ThemeContext.Consumer>
        {theme =>
          <Styled.Modal>Hello Modal</Styled.Modal>
        }
      </ThemeContext.Consumer>
    )
  }
}

