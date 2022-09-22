import { Separator } from '../../../../components/Separator'
import { useAuth } from '../../../../hooks/auth'
import { BillsList } from './components/ContractsBillsList'
import { ContractBillsNumberContainer } from './styles'

export function ContractBills() {
  const { user } = useAuth()
  const contracts = user?.contratos
  return (
    <>
      {contracts.map((contractList: any, index: any) => (
        <>
          <ContractBillsNumberContainer key={contractList.contrato}>
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
