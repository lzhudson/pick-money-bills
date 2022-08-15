import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { InputGroup } from '../../../../components/InputGroup'
import { InputMasked } from '../../../../components/InputMasked'
import { Label } from '../../../../components/Label'
import { ButtonsContainer, LoginFormContainer } from './styles'

export function LoginForm() {
  return (
    <LoginFormContainer>
      <form action="">
        <InputGroup>
          <Label htmlFor="document-number">CPF/CNPJ</Label>
          <InputMasked
            mask={'999.999.999-99'}
            id="document-number"
            placeholder="CPF/CNPJ"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" placeholder="Senha" />
        </InputGroup>
        <a className="link-lost-password" href="">
          Esqueceu a senha?
        </a>
        <ButtonsContainer>
          <Button type="submit" variant="primary">
            Acessar
          </Button>
          <Button variant="secondary">Solicitar senha</Button>
        </ButtonsContainer>
      </form>
    </LoginFormContainer>
  )
}
