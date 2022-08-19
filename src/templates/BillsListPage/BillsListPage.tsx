import { ContractBills } from './components/ContractBills'
import { Header } from './components/Header'
import { ContractBillsContainer } from './styles'

export function BillsListPage() {
  return (
    <div>
      <Header />
      <ContractBillsContainer>
        <ContractBills />
      </ContractBillsContainer>
    </div>
  )
}
