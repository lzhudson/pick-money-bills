import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  padding-left: 83px;
  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    .link-lost-password {
      align-self: flex-end;
      font-family: ${(props) => props.theme.openSans};
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: ${(props) => props.theme['gray-900']};
      text-decoration: none;
      margin-top: 0.25rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 1rem;
`
