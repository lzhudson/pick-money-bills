import styled from 'styled-components'

export const ContentLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props) => props.theme['gray-900']};
  padding-right: 50px;
  @media (max-width: 768px) {
    border-right: 0px;
    padding-right: 0px;
  }
  h1 {
    font-family: ${(props) => props.theme.caecillia};
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: ${(props) => props.theme['green-700']};
    max-width: 220px;
    @media (max-width: 425px) {
      font-size: 26px;
    }
  }

  p {
    font-family: ${(props) => props.theme.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: ${(props) => props.theme['gray-900']};
    margin-top: 157px;
    @media (max-width: 425px) {
      margin-top: 11px;
    }
  }

  a {
    font-family: ${(props) => props.theme.openSans};
    text-decoration-line: underline;
    color: ${(props) => props.theme['green-700']};
    &:hover {
      font-weight: 700;
    }
  }
`
