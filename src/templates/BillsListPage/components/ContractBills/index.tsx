import { Separator } from '../../../../components/Separator'
import { ContractsBillsList } from './components/ContractsBillsList'
import { ContractBillsNumberContainer } from './styles'

export function ContractBills() {
  return (
    <>
      <ContractBillsNumberContainer>
        <strong>Contrato:</strong>
        <span>000001</span>
      </ContractBillsNumberContainer>
      <ContractsBillsList />
      <Separator />
      <ContractBillsNumberContainer>
        <strong>Contrato:</strong>
        <span>000002</span>
      </ContractBillsNumberContainer>
      <ContractsBillsList />
    </>
  )
}
