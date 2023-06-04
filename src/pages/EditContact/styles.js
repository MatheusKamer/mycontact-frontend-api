import styled from "styled-components";

export const Container = styled.div`
  header {
    a {
      display: flex;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;

      img {
        transform: rotate(270deg);
        margin-right: 8px;
      }
    }

    strong {
      font-size: 24px;
      font-weight: bold;
    }
  }
`
