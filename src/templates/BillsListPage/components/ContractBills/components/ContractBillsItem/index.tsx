import { Button } from '../../../../../../components/Button'
import {
  ContractBillsItemContainer,
  ContractBillsNumber,
  TableContainer,
} from './styles'

import downloadIcon from '../../../../../../assets/icon/download-icon.svg'
import { NoBills } from '../NoBills'
import { NoBillsAvailable } from '../NoBillsAvailable'

interface ContractBillsItemProps {
  noItems?: boolean
  noAvailable?: boolean
}

export function ContractBillsItem({
  noItems,
  noAvailable,
}: ContractBillsItemProps) {
  console.log(noItems, noAvailable)
  return (
    <ContractBillsItemContainer>
      <ContractBillsNumber>CCB: 0000000/0</ContractBillsNumber>
      {noItems && !noAvailable && <NoBills />}
      {noAvailable && !noItems && <NoBillsAvailable />}
      {!noItems && !noAvailable && (
        <TableContainer>
          <table cellSpacing={0}>
            <tr>
              <th>Mês</th>
              <th>Valor</th>
              <th>Data de Vencimento</th>
              <th></th>
            </tr>
            <tr>
              <td>03/2022</td>
              <td>R$ XXXX,XX</td>
              <td>08/04/2022</td>
              <td>
                <Button variant="primary">
                  <img src={downloadIcon} alt="" /> 2ª via do boleto
                </Button>
              </td>
            </tr>
            <tr>
              <td>04/2022</td>
              <td>R$ XXXX,XX</td>
              <td>08/05/2022</td>
              <td>
                <Button variant="primary">
                  <img src={downloadIcon} alt="" /> 2ª via do boleto
                </Button>
              </td>
            </tr>
          </table>
        </TableContainer>
      )}
    </ContractBillsItemContainer>
  )
}
