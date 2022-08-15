import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputMasked = styled(InputMask)`
  border: 1px solid ${(props) => props.theme['gray-900']};
  padding: 0.95rem 1rem;
`
