import styled from 'styled-components'
import breakpoint from '../../utils/breakpoints';
import { veryDarkBlue } from "../../utils/colors";

export const Wrapper = styled.div`
  position: relative;
  margin: 38px auto;
  display:flex;
  flex-direction: column;
  border-radius: 3px;
  min-height: 80px;
  align-items: center;
  background-color: ${props => (props.theme === "light" ? "white" : veryDarkBlue)};
  padding: 40px 30px 20px 20px;
  width: 90%;
  @media ${breakpoint.device.sm}{
    flex-direction: row;
    min-height: 140px;
    padding: 0px 30px 0px 0px;
    width: 730px;
  }
`;

export const CompanyLogo = styled.div`
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
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

export const Title = styled.div`
  @media ${breakpoint.device.sm}{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px
  }
`;
