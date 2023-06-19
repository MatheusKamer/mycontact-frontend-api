import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
        transform: rotate(-90deg);
        margin-right: 8px;
    }
  }

  h1 {
    font-size: 24px;
  }
`
