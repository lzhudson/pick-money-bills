import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { LostPasswordContent } from './components/LostPasswordContent'
import { LostPasswordForm } from './components/LostPasswordForm'
import { LostPasswordContainer, LostPasswordContentBox } from './styles'

export function LostPasswordPage() {
  return (
    <LostPasswordContainer>
      <LostPasswordContentBox>
        <LostPasswordContent />
        <LostPasswordForm />
        <Link className="link-back" to="/">
          <Button variant="secondary">Voltar</Button>
        </Link>
      </LostPasswordContentBox>
    </LostPasswordContainer>
  )
}
