import { useCookies } from 'react-cookie'
import { Separator } from '../../../../components/Separator'
import { BillsList } from './components/ContractsBillsList'
import { ContractBillsNumberContainer } from './styles'

export function ContractBills() {
  const [cookies] = useCookies()
  const user = cookies['@pick-money-bills-user']
  const contracts = user.contratos
  return (
    <>
      {contracts.map((contractList: any, index: any) => (
        <>
          <ContractBillsNumberContainer key={index}>
            <strong>Contrato:</strong>
            <span>{contractList.codigo}</span>
          </ContractBillsNumberContainer>
          <BillsList Boleto={contractList.Boleto} />
          <Separator />
        </>
      ))}
    </>
  )
}
