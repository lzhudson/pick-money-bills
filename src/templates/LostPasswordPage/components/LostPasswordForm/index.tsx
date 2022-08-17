import { Button } from '../../../../components/Button'
import { InputGroup } from '../../../../components/InputGroup'
import { InputMasked } from '../../../../components/InputMasked'
import { Label } from '../../../../components/Label'
import { LostPasswordContainer } from './styles'

export function LostPasswordForm() {
  return (
    <LostPasswordContainer>
      <InputGroup>
        <Label>CPF/CNPJ</Label>
        <InputMasked mask={'999.999.999-99'} placeholder="000.000.000-00  " />
      </InputGroup>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </LostPasswordContainer>
  )
}
