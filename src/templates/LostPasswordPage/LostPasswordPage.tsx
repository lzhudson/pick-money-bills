import { LostPasswordContent } from './components/LostPasswordContent'
import { LostPasswordForm } from './components/LostPasswordForm'
import { LostPasswordContainer, LostPasswordContentBox } from './styles'

export function LostPasswordPage() {
  return (
    <LostPasswordContainer>
      <LostPasswordContentBox>
        <LostPasswordContent />
        <LostPasswordForm />
      </LostPasswordContentBox>
    </LostPasswordContainer>
  )
}
