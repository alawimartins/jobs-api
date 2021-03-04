import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
position: relative;
width: 42px;
height: 26px;
margin: 0 16px;
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: white;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #5964E0;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  transform: translate(0%, 30%);
  &:checked + ${CheckBoxLabel} {
    background: white;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const Icon = styled.img`
  align-self: center;
`;