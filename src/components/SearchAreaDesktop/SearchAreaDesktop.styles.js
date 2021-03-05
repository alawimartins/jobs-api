import styled from 'styled-components'
import { white, veryDarkBlue } from "../../utils/colors";

export const SearchWrapper = styled.div`
  width: 90%;
  margin: 38px auto;
  display:flex;
  border-radius: 3px;
  height: 80px;
  background-color: ${props => (props.theme === "light" ? white : veryDarkBlue)};
`;