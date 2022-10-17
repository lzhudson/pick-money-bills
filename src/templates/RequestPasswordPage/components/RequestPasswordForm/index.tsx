import { ToastContainer } from 'react-toastify'
import { Button } from '../../../../components/Button'
import { InputGroup } from '../../../../components/InputGroup'
import { Label } from '../../../../components/Label'
import { useRequestPasswordForm } from '../../hooks'
import { RequestPasswordContainer } from './styles'
import { ImSpinner10 } from 'react-icons/im'
import { Input } from '../../../../components/Input'
import { AlertMessage } from '../../../../components/AlertMessage'
export function RequestPasswordForm() {
  const { onSubmit, errors, isLoading, register } = useRequestPasswordForm()
  return (
    <RequestPasswordContainer onSubmit={onSubmit}>
      <InputGroup>
        <Label error={!!errors.documentNumber}>CPF/CNPJ</Label>
        <Input
          maxLength={18}
          error={!!errors.documentNumber}
          type="text"
          id="document-number"
          placeholder="CPF/CNPJ"
          {...register('documentNumber')}
        />
      </InputGroup>
      <AlertMessage>{errors.documentNumber?.message}</AlertMessage>
      <Button
        loading={isLoading}
        disabled={isLoading}
        variant="primary"
        type="submit"
      >
        {isLoading && <ImSpinner10 />}
        {!isLoading && 'Solicitar Senha'}
      </Button>
      <ToastContainer />
    </RequestPasswordContainer>
  )
}
