import { NavLink } from 'react-router-dom'
import { ContentLoginContainer } from './styles'

export function ContentLogin() {
  return (
    <ContentLoginContainer>
      <h1>2ª via de boletos</h1>
      <p>
        Para acessar a 2ª via do seu boleto, realize o login.
        <br /> <br />
        Caso não possua uma senha de acesso, você pode solicitá-la{' '}
        <NavLink to="/solicitar-senha"> clicando aqui</NavLink>.
      </p>
    </ContentLoginContainer>
  )
}
