import { NoBillsContainer } from './styles'

interface INoBillsProps {
  message: string
}

export function NoBills({ message }: INoBillsProps) {
  return (
    <NoBillsContainer>
      <p>{message}</p>
    </NoBillsContainer>
  )
}
