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
  margin: 10px 10px 30px 10px;
  background-color: ${props => (props.theme === "light" ? "white" : veryDarkBlue)};
  @media ${breakpoint.device.sm}{
    width: 339px;
    height: 228px;
  }
  @media ${breakpoint.device.lg}{
    width: 350px;
    height: 228px;
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
  transform: translate(0%, -50%);
  left: 10px;
  top: 0%;
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
