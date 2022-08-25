import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${(props) => props.theme['green-700']};
    font-family: ${(props) => props.theme.caecillia};
    font-size: 2.5rem;
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-family: ${(props) => props.theme.openSans};
  }
`

export const HeaderContentContainer = styled.div`
  max-width: 1065px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 22px 10px;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 22px 20px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 42px;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  p {
    font-size: 20px;
    strong {
      font-size: 1.125rem;
    }
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      font-size: 0.875rem;
    }
  }
`

export const LogoutContainer = styled.div`
  @media (max-width: 576px) {
    width: 100%;
    margin-top: 36px;
  }
  button {
    width: 230px;
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`
