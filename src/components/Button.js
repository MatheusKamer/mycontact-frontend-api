import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  margin-top: 24px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  border-radius: 4px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark}
  }

  &[disabled] {
    background: #CCCCCC;
    cursor: default;
  }
`
