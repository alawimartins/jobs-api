import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: #e8eafa;
  border-radius: 3px;
  border: none;
  color: #5761f7;
  margin: 0.5em 1em;
  padding: 15px 40px;
  cursor: pointer;
  &:hover { background: #c0c5f0;
  }

  ${props => props.primary && css`
    background: #6871ed;
    color: white;
    &:hover{ background: #939BF4;
    }
  `}
`;