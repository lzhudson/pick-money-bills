import styled, { css } from 'styled-components'

interface ILabelProps {
  error: boolean
}

export const Label = styled.label<ILabelProps>`
  font-family: ${(props) => props.theme.caecillia};
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme['green-700']};

  ${(props) =>
    props.error &&
    css`
      color: ${(props) => props.theme['red-500']};
    `}
`
