import { PasswordSendedContent } from './components/PasswordSendedContent'
import { PasswordSendedContainer, PasswordSendedContentBox } from './styles'

export function PasswordSendedPage() {
  return (
    <PasswordSendedContainer>
      <PasswordSendedContentBox>
        <PasswordSendedContent />
      </PasswordSendedContentBox>
    </PasswordSendedContainer>
  )
}
