import styled from 'styled-components'
import { lightGrey } from '../../utils/colors'
import { white, veryDarkBlue, midnight } from "../../utils/colors";

export const SearchBox = styled.div`
  position: relative;
  width: 500px;
  height: 60px;
`;

export const SearchInput = styled.input`
  border: 0;
  border-left: 2px solid ${props => (props.theme === "light" ? lightGrey : midnight)};
  outline: none;
  color: #8b7d77;
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 80px;
  font-size: 18px;
  padding-left: 80px;
  background-color: ${props => (props.theme === "light" ? white : veryDarkBlue)};
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  margin-left: 32px;
  z-index: 1;
`;
