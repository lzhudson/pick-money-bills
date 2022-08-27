import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import { useAuth } from '../../../../hooks/auth'
import {
  HeaderContainer,
  HeaderContentContainer,
  LogoutContainer,
  UserInfo,
} from './styles'

export function Header() {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  function handleSignOut() {
    signOut()
    navigate('/')
  }
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
          <Button variant="outline-dark" onClick={handleSignOut}>
            Encerrar sessão
          </Button>
        </LogoutContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}
