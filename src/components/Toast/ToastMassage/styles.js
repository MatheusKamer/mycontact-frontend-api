import styled, { css } from "styled-components";

const containerVariant = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `
};

export const Container = styled.div`
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => containerVariant[type] || containerVariant.default}

  & + & {
    margin-top: 12px;
  }

  strong {
    margin-left: 8px;
  }
`;
