import styled from 'styled-components'
import { white, veryDarkBlue } from "../../utils/colors";
import breakpoint from '../../utils/breakpoints';

export const SearchWrapper = styled.div`
  display: none;
  
  @media (min-width: 599px){
    width: 90%;
    margin: 38px auto;
    display:flex;
    border-radius: 3px;
    height: 80px;
    background-color: ${props => (props.theme === "light" ? white : veryDarkBlue)};
  }
`;

export const CheckBox = styled.div`
  display: none;
  margin-left: 8px;
  background-color: ${props => (props.theme === "light" ? white : 'black')};
  font-family: 'Kumbh Sans', sans-serif;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  }
`;

