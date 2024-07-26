import styled from 'styled-components';

export const Container = styled.div`
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background: #fff;
    border: none;
    border-radius: 25px;
    padding: 0 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 8px;
    padding: 8px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`

export const ListContainer = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

    button {
      border: none;
      background-color: transparent;
      display: flex;
      align-items: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }

    img {
      transform: rotate(${({ orderBy }) => orderBy === 'asc' ? '-180deg' : '-360deg'});
      transition: 0.2s ease-in;
    }
`

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & { /* & + & = CARD seguido de CARD */
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
      margin-top: 4px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

      button {
      background-color: transparent;
      border: none;
      margin-left: 4px;
      }
  }
`

export const ErrorContainer = styled.div`
 margin-top: 16px;
 display: flex;
 gap: 24px;
 align-items: center;

 .details {
     strong {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
 }
`

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`
