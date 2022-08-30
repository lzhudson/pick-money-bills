import { ContractBillsItem } from '../ContractBillsItem'
import { ContractBillsListContainer } from './styles'

interface IBillsListProps {
  Boleto: any
}

export function BillsList({ Boleto }: IBillsListProps) {
  return (
    <ContractBillsListContainer>
      <ContractBillsItem bill={Boleto} />
    </ContractBillsListContainer>
  )
}
