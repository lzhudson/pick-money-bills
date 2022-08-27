import { useAuth } from '../../hooks/auth'
import { ContentLogin } from './components/ContentLogin'
import { LoginForm } from './components/LoginForm'
import { useNavigate } from 'react-router-dom'
import {
  ContentLeft,
  ContentLoginContainer,
  ContentRight,
  LoginPageContainer,
} from './styles'
import { useLayoutEffect } from 'react'

export function LoginPage() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated)
      navigate('/lista-de-boletos')
    }
  }, [])

  return (
    <LoginPageContainer>
      <ContentLoginContainer>
        <ContentLeft>
          <ContentLogin />
        </ContentLeft>
        <ContentRight>
          <LoginForm />
        </ContentRight>
      </ContentLoginContainer>
    </LoginPageContainer>
  )
}
