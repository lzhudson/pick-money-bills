import { ReactNode } from 'react'
import { InputGroupContainer } from './styles'

interface IInputGroupProps {
  children: ReactNode
}

export function InputGroup({ children }: IInputGroupProps) {
  return <InputGroupContainer>{children}</InputGroupContainer>
}
