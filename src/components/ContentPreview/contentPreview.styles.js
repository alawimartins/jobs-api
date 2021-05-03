import styled from 'styled-components'
import breakpoint from '../../utils/breakpoints';
import { violet, grey, white, veryDarkBlue } from "../../utils/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 327px;
  height: 228px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 30px;
  margin: auto;
  background-color: ${props => (props.theme === "light" ? "white" : veryDarkBlue)};
  @media ${breakpoint.device.sm}{
    margin: 0;
    width: 339px;
    height: 228px;
  }
  @media ${breakpoint.device.lg}{
    width: 350px;
    height: 228px;
  }
`;
export const Wrapper2 = styled.div`
  margin: 0 5%;
`;

export const ImgLogo = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: orange;
  transform: translate(0%, -50%);
  left: 10%;
  z-index: 1;
  @media ${breakpoint.device.sm}{
    left: 7%;
  }
`;

export const SubText = styled.p`
  font-size: 14px;
  color: grey;
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
