import styled, { css } from 'styled-components'
import { violet, lightViolet, darkGrey, white } from "../../utils/colors";

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  z-index: 1;

`;

export const Modal = styled.div`
width: 300px;
height: 300px;
background-color: red;
z-index: 20;
`;