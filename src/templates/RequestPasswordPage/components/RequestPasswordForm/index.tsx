import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button'
import { InputGroup } from '../../../../components/InputGroup'
import { InputMasked } from '../../../../components/InputMasked'
import { Label } from '../../../../components/Label'
import { RequestPasswordContainer } from './styles'

export function RequestPasswordForm() {
  return (
    <RequestPasswordContainer>
      <InputGroup>
        <Label>CPF/CNPJ</Label>
        <InputMasked mask={'999.999.999-99'} placeholder="000.000.000-00  " />
      </InputGroup>
      <Button variant="primary" type="submit">
        <Link to="/senha-enviada">Solicitar Senha</Link>
      </Button>
    </RequestPasswordContainer>
  )
}
