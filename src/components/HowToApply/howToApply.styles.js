import styled from 'styled-components'
import breakpoint from '../../utils/breakpoints';
import xsFooter from './../../../src/assets/mobile/bg-pattern-detail-footer.svg';
import smFooter from './../../../src/assets/desktop/bg-pattern-detail-footer.svg';
import { veryDarkBlue } from "../../utils/colors";

export const Wrapper = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  border-radius: 3px;
  min-height: 80px;
  align-items: center;
  background-color: ${props => (props.theme === "light" ? "white" : veryDarkBlue)};
  padding: 10px 20px;
  background-image: url(${xsFooter});
  margin: auto;
  @media ${breakpoint.device.sm}{
    background-image: url(${smFooter});
    flex-direction: row;
    min-height: 140px;
    padding: 20px 30px;
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
  color: white;
  font-size: 14px;
  display: flex;
  @media ${breakpoint.device.sm} {
    justify-content: flex-start;
  }
`;

export const Header = styled.h3`
  color: white;
  @media ${breakpoint.device.sm} {
    justify-content: flex-start;
}
`;

