import { ImSpinner10 } from 'react-icons/im'
import { AlertMessage } from '../../../../components/AlertMessage'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { InputGroup } from '../../../../components/InputGroup'
import { Label } from '../../../../components/Label'
import { useLostPasswordForm } from '../../hooks'
import { LostPasswordContainer } from './styles'

export function LostPasswordForm() {
  const { onSubmit, errors, register, isLoading } = useLostPasswordForm()

  return (
    <LostPasswordContainer onSubmit={onSubmit}>
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
        <AlertMessage>{errors.documentNumber?.message}</AlertMessage>
      </InputGroup>
      <Button
        loading={isLoading}
        disabled={isLoading}
        variant="primary"
        type="submit"
      >
        {isLoading && <ImSpinner10 />}
        {!isLoading && 'Enviar'}
      </Button>
    </LostPasswordContainer>
  )
}
