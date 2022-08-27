import { ChangeEvent, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AlertMessage } from '../../../../components/AlertMessage'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { InputGroup } from '../../../../components/InputGroup'
import { InputMasked } from '../../../../components/InputMasked'
import { Label } from '../../../../components/Label'
import { useLoginForm } from './hooks'
import { ButtonsContainer, LoginFormContainer } from './styles'

export function LoginForm() {
  const { register, onSubmit, errors, isLoading, control } = useLoginForm()
  const [mask, setMask] = useState('')

  function handleInputDocumentNumberChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value || e.target.value.length === 0) {
      setMask('999999999999999999')
    }

    if (e.target.value.replace(/\D/g, '').length < 12) {
      setMask('999.999.999-999')
    } else {
      setMask('99.999.999/9999-99')
    }
  }
  return (
    <LoginFormContainer>
      <form onSubmit={onSubmit}>
        <InputGroup>
          <Label error={!!errors.documentNumber} htmlFor="document-number">
            CPF/CNPJ
          </Label>
          <Controller
            control={control}
            name="documentNumber"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <>
                <InputMasked
                  error={!!errors.documentNumber}
                  mask={mask}
                  id="document-number"
                  placeholder="CPF/CNPJ"
                  onBlur={onBlur}
                  onChange={(e) => {
                    handleInputDocumentNumberChange(e)
                    onChange(e)
                  }}
                  value={value}
                  inputRef={ref}
                  name={name}
                />
              </>
            )}
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
