import { RequestPasswordContent } from './components/RequestPasswordContent'
import { RequestPasswordForm } from './components/RequestPasswordForm'
import { RequestPasswordContainer, RequestPasswordContentBox } from './styles'

export function RequestPasswordPage() {
  return (
    <RequestPasswordContainer>
      <RequestPasswordContentBox>
        <RequestPasswordContent />
        <RequestPasswordForm />
      </RequestPasswordContentBox>
    </RequestPasswordContainer>
  )
}
