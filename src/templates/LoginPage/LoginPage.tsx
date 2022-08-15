import { ContentLogin } from './components/ContentLogin'
import { LoginForm } from './components/LoginForm'
import {
  ContentLeft,
  ContentLoginContainer,
  ContentRight,
  LoginPageContainer,
} from './styles'

export function LoginPage() {
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
