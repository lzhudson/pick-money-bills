import styled from 'styled-components'

export const RequestPasswordContentContainer = styled.div`
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
    @media (max-width: 576px) {
      text-align: left;
      font-size: 14px;
    }
  }
`
