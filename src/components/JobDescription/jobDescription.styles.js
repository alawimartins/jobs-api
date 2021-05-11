import styled from 'styled-components'
import breakpoint from '../../utils/breakpoints';
import { veryDarkBlue, violet } from "../../utils/colors";

export const Wrapper = styled.div`
  margin: auto;
  width: 90%;
  min-height: 80px;
  border-radius: 3px;
  background-color: ${props => (props.theme === "light" ? "white" : veryDarkBlue)};
  padding: 30px;
  margin: auto;
  margin-bottom: 40px;
  @media ${breakpoint.device.sm}{
    min-height: 140px;
    width: 730px;
    margin-bottom: 40px;
    padding: 10px 50px;
  }
`;

export const TopSection = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${breakpoint.device.sm}{
    flex-direction: row;
    min-height: 140px;
  }
`;

export const HeaderAndBtn = styled.div`
  @media ${breakpoint.device.sm}{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SubText = styled.p`
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

export const LocationWrapper = styled.p`
  color: ${violet};
`;

