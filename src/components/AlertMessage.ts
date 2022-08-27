import styled from 'styled-components'

export const AlertMessage = styled.p`
  font-family: ${(props) => props.theme.openSans};
  font-size: 14px;
  color: ${(props) => props.theme['red-500']};
  font-weight: 700;
  margin-top: 1rem;
`
