import { NoBillsContainer } from './styles'

interface INoBillsProps {
  message: string
}

export function NoBills({ message }: INoBillsProps) {
  function createMarkup() {
    return {__html: message};
  }

  return (
    <NoBillsContainer>
      <p dangerouslySetInnerHTML={createMarkup()} />
    </NoBillsContainer>
  )
}
