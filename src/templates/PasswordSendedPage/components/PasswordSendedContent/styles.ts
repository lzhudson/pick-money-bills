import styled from 'styled-components'

export const PasswordSendedContentContainer = styled.div`
  h1 {
    font-family: ${(props) => props.theme.caecillia};
    font-size: 30px;
    text-align: center;
    color: ${(props) => props.theme['green-700']};
    @media (max-width: 576px) {
      text-align: left;
      font-size: 26px;
    }
  }
  p {
    margin-top: 2.5rem;
    text-align: center;
    font-family: ${(props) => props.theme.openSans};
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${(props) => props.theme['gray-900']};
    a {
      display: block;
      font-weight: 700;
      color: ${(props) => props.theme['green-700']};
      text-decoration: none;
      &:first-child {
        margin-top: 1rem;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 576px) {
      text-align: left;
      font-size: 14px;
    }
  }
  .link-back {
    display: block;
    max-width: 330px;
    width: 100%;
    margin: 0 auto;
    margin-top: 54px;
    button {
      max-width: 330px;
      width: 100%;
    }
  }
`
