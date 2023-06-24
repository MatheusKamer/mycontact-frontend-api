import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  padding: 16px;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  outline: 0;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]}
  }

  & + & {
    margin-top: 16px;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`
