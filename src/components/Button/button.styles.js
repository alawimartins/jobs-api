import styled, { css } from 'styled-components'
import { violet, lightViolet, darkGrey, white } from "../../utils/colors";

export const Button = styled.button`
  background: ${violet};
  border-radius: 3px;
  border: none;
  color: white;
  margin: 0.5em 1em;
  padding: 15px 40px;
  cursor: pointer;
  :hover { background: ${lightViolet};
  }

  ${props => props.primary && css`
    background: ${props => (props.theme === "light" ? '#e8eafa' : darkGrey)};
    color: ${props => (props.theme === "light" ? violet : white)};
    :hover { background-color: ${props => (props.theme === "light" ? '#D4D7FF' : '#ccc')};
    }
  `}
`;
