import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AlertMessage } from '../../../../components/AlertMessage'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { InputGroup } from '../../../../components/InputGroup'
import { Label } from '../../../../components/Label'
import { useLoginForm } from './hooks'
import { ButtonsContainer, LoginFormContainer } from './styles'

export function LoginForm() {
  const { register, onSubmit, errors } = useLoginForm()
  return (
    <LoginFormContainer>
      <form onSubmit={onSubmit}>
        <InputGroup>
          <Label error={!!errors.documentNumber} htmlFor="document-number">
            CPF/CNPJ
          </Label>
          <Input
            maxLength={18}
            error={!!errors.documentNumber}
            type="text"
            id="document-number"
            placeholder="CPF/CNPJ"
            {...register('documentNumber')}
          />
        </InputGroup>
        <InputGroup>
          <Label error={!!errors.password} htmlFor="password">
            Senha
          </Label>
          <Input
            error={!!errors.password}
            type="password"
            id="password"
            placeholder="Senha"
            {...register('password')}
          />
        </InputGroup>
        <Link className="link-lost-password" to="/esqueceu-sua-senha">
          Esqueceu a senha?
        </Link>
        <ButtonsContainer>
          <Button type="submit" variant="primary">
            Acessar
          </Button>
          <Button variant="secondary">
            <Link to="/solicitar-senha">Solicitar senha</Link>
          </Button>
        </ButtonsContainer>
        {(errors.documentNumber || errors.password) && (
          <AlertMessage>
            Preencha corretamente os campos destacados.
          </AlertMessage>
        )}
      </form>
      <ToastContainer />
    </LoginFormContainer>
  )
}
