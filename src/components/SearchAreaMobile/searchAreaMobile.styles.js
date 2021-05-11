import styled from 'styled-components'
import { violet, lightViolet, white, veryDarkBlue } from "../../utils/colors";
import breakpoint from '../../utils/breakpoints';

export const SearchWrapper = styled.div`
  width: 90%;
  margin: 38px auto;
  display:flex;
  border-radius: 6px;
  height: 80px;
  background-color: ${props => (props.theme === "light" ? white : veryDarkBlue)};
  @media ${breakpoint.device.sm}{
    display: none;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.theme === "light" ? 'grey' : 'white')};
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonSearch = styled.button`
  background: ${violet};
  border-radius: 6px;
  border: none;
  margin: 0.5em 1em;
  padding: 13px 13px;
  cursor: pointer;
  :hover { background: ${lightViolet};
  }
`;

export const ButtonWrapper = styled.div`
  margin: auto;
`;