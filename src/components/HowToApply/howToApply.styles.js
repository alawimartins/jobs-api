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
  width: 90%;
  margin-bottom: 50px;
  @media ${breakpoint.device.sm}{
    background-image: url(${smFooter});
    flex-direction: row;
    min-height: 140px;
    padding: 10px 50px;
    width: 730px;
  }
`;

export const Header = styled.h3`
  color: white;
  @media ${breakpoint.device.sm} {
    justify-content: flex-start;
}
`;
export const Paragraph = styled.p`
  color: white;
`;

