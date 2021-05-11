import styled from 'styled-components'
import { white, veryDarkBlue } from "../../utils/colors";

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

export const Label = styled.label`
  display: flex;
  align-items: center;
  }
`;

