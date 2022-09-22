import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import { useAuth } from '../../../../hooks/auth'
import { formatDocumentNumber } from '../../../../utils/format'
import {
  HeaderContainer,
  HeaderContentContainer,
  LogoutContainer,
  UserInfo,
} from './styles'

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  function handleSignOut() {
    signOut()
    navigate('/')
  }
  const documentFormatted = user?.CpfCnpj && formatDocumentNumber(user.CpfCnpj)
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <UserInfo>
          <h1>{user?.NomeCliente}</h1>
          <p>
            CPF/CNPJ: <strong>{documentFormatted}</strong>
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
