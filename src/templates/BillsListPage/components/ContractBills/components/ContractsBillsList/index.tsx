import { ContractBillsItem } from '../ContractBillsItem'
import { ContractBillsListContainer } from './styles'

export function ContractsBillsList() {
  return (
    <ContractBillsListContainer>
      <ContractBillsItem />
      <ContractBillsItem noItems />
      <ContractBillsItem noAvailable />
    </ContractBillsListContainer>
  )
}
