import styled from 'styled-components'
import breakpoint from '../../utils/breakpoints';
import { veryDarkBlue, violet } from "../../utils/colors";

export const Wrapper = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  border-radius: 3px;
  min-height: 80px;
  align-items: center;
  background-color: ${props => (props.theme === "light" ? "white" : veryDarkBlue)};
  padding: 40px 30px 20px 20px;
  margin: auto;
  @media ${breakpoint.device.sm}{
    flex-direction: row;
    min-height: 140px;
    padding: 0px 30px 0px 0px;
    width: 730px;
  }
`;

export const Wrapper2 = styled.div`
  margin: 0 5%;
`;

export const HeaderAndBtn = styled.div`
  @media ${breakpoint.device.sm}{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin-left: 40px;
  }
`;

export const ImgLogo = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: orange;
  transform: translate(-50%,-140%);
  left: 50%;
  z-index: 1;
  @media ${breakpoint.device.sm}{
    transform: translate(0%,0%);
    position: static;
    width: 140px;
    height: 140px;
    border-radius: 0px;
  }
`;

export const SubText = styled.p`
font-size: 14px;
color: grey;
align-items: center;
justify-content: center;
display: flex;
@media ${breakpoint.device.sm} {
  justify-content: flex-start;
}
`;

export const Header = styled.h2`
align-items: center;
justify-content: center;
display: flex;
@media ${breakpoint.device.sm} {
  justify-content: flex-start;
}
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  :hover, :focus, :active {
    text-decoration: none;
    color: inherit;
    }
  color: ${violet};
  weight: 700;
`;

