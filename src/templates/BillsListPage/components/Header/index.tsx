import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import {
  HeaderContainer,
  HeaderContentContainer,
  LogoutContainer,
  UserInfo,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <UserInfo>
          <h1>José Antônio Santos</h1>
          <p>
            CPF/CNPJ: <strong>000.000.000 00</strong>
          </p>
        </UserInfo>
        <LogoutContainer>
          <Button variant="outline-dark">
            <Link to="/">Encerrar sessão</Link>
          </Button>
        </LogoutContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}
