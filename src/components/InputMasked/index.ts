import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

interface IInputMaskProps {
  error: boolean
}

export const InputMasked = styled(InputMask)<IInputMaskProps>`
  border: 1px solid ${(props) => props.theme['gray-900']};
  padding: 0.95rem 1rem;

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme['red-500']};
    `}
`
