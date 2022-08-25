import { Button } from '../../../../../../components/Button'
import { ContractBillsItemContainer, ContractBillsNumber } from './styles'

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
        <div className="custom-table">
          <div className="custom-table__columns">
            <span>Mês</span>
            <span>Valor</span>
            <span className="only-desktop">Data de Vencimento</span>
            <span className="only-mobile">Vencimento</span>
            <span></span>
          </div>
          <div className="custom-table__row">
            <span>03/2022</span>
            <span>R$ XXXX,XX</span>
            <span>08/04/2022</span>
            <span>
              <Button variant="primary">
                <img src={downloadIcon} alt="" /> 2ª via do boleto
              </Button>
            </span>
          </div>
          <div className="custom-table__row">
            <span>03/2022</span>
            <span>R$ XXXX,XX</span>
            <span>08/04/2022</span>
            <span>
              <Button variant="primary">
                <img src={downloadIcon} alt="" /> 2ª via do boleto
              </Button>
            </span>
          </div>
          <div className="custom-table__row">
            <span>03/2022</span>
            <span>R$ XXXX,XX</span>
            <span>08/04/2022</span>
            <span>
              <Button variant="primary">
                <img src={downloadIcon} alt="" /> 2ª via do boleto
              </Button>
            </span>
          </div>
        </div>
      )}
    </ContractBillsItemContainer>
  )
}
