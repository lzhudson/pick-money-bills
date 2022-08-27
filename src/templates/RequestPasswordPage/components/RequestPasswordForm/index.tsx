import { ChangeEvent, useState } from 'react'
import { Controller } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { Button } from '../../../../components/Button'
import { InputGroup } from '../../../../components/InputGroup'
import { InputMasked } from '../../../../components/InputMasked'
import { Label } from '../../../../components/Label'
import { useRequestPasswordForm } from '../../hooks'
import { RequestPasswordContainer } from './styles'
import { ImSpinner10 } from 'react-icons/im'
export function RequestPasswordForm() {
  const { onSubmit, errors, control, isLoading } = useRequestPasswordForm()
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
  console.log(isLoading)
  return (
    <RequestPasswordContainer onSubmit={onSubmit}>
      <InputGroup>
        <Label error={!!errors.documentNumber}>CPF/CNPJ</Label>
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
