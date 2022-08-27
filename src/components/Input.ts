import styled, { css } from 'styled-components'

interface IInputProps {
  error: boolean
}

export const Input = styled.input<IInputProps>`
  border: 1px solid ${(props) => props.theme['gray-900']};
  padding: 0.95rem 1rem;

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme['red-500']};
    `}
`
