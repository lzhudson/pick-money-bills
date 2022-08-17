import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import { PasswordSendedContentContainer } from './styles'

export function PasswordSendedContent() {
  return (
    <PasswordSendedContentContainer>
      <h1>Senha Enviada</h1>
      <p>Verifique o seu celular e confira o SMS com a nova senha.</p>
      <p>
        Caso não tenha recebido, entre em contato conosco
        <a href="https://api.whatsapp.com/send?phone=551140402595">
          11 4040-2595 (WhatsApp)
        </a>
        <a href="mailto:sac@pickmoney.com.br">sac@pickmoney.com.br</a>
      </p>
      <Link className="link-back" to="/">
        <Button variant="secondary">Voltar</Button>
      </Link>
    </PasswordSendedContentContainer>
  )
}
