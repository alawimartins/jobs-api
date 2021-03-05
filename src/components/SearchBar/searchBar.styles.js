import styled from 'styled-components'
import { lightGrey } from '../../utils/colors'
import { white, veryDarkBlue, midnight } from "../../utils/colors";

export const SearchBox = styled.div`
  position: relative;
  width: 500px;
  height: 80px;
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 6px;
  border-left: 2px solid ${props => (props.theme === "light" ? lightGrey : midnight)};
  outline: none;
  color: #8b7d77;
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
  font-size: 18px;
  padding-left: ${props => (props.icon ? '50px' : '13px')};
  background-color: ${props => (props.theme === "light" ? white : veryDarkBlue)};
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  margin-left: 12px;
  z-index: 1;
  transform: translate(0%, -50%);

`;
