import styled from 'styled-components'

export const Label = styled.label`
  font-family: ${(props) => props.theme.caecillia};
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme['green-700']};
`
