import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { RequestPasswordContent } from './components/RequestPasswordContent'
import { RequestPasswordForm } from './components/RequestPasswordForm'
import { RequestPasswordContainer, RequestPasswordContentBox } from './styles'

export function RequestPasswordPage() {
  return (
    <RequestPasswordContainer>
      <RequestPasswordContentBox>
        <RequestPasswordContent />
        <RequestPasswordForm />
        <Link className="link-back" to="/">
          <Button variant="secondary">Voltar</Button>
        </Link>
      </RequestPasswordContentBox>
    </RequestPasswordContainer>
  )
}
