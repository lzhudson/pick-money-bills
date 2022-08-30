import { Button } from '../../../../../../components/Button'
import { ContractBillsItemContainer, ContractBillsNumber } from './styles'

import downloadIcon from '../../../../../../assets/icon/download-icon.svg'
import {
  convertDateToFormatPtBr,
  convertStringToCurrencyPtBr,
} from '../../../../../../utils/format'
import { getMonthAndYearFromDate } from '../../../../../../utils/date'
import { NoBills } from '../NoBills'

interface ContractBillsItemProps {
  noItems?: boolean
  noAvailable?: boolean
  bill: any
}

export function ContractBillsItem({
  noItems,
  noAvailable,
  bill,
}: ContractBillsItemProps) {
  return (
    <ContractBillsItemContainer>
      {bill?.Ccb && <ContractBillsNumber>CCB: {bill?.Ccb}</ContractBillsNumber>}

      {bill?.error ? (
        <NoBills message={bill?.menssagem} />
      ) : (
        <div className="custom-table">
          <div className="custom-table__columns">
            <span>Mês</span>
            <span>Valor</span>
            <span className="only-desktop">Data de Vencimento</span>
            <span className="only-mobile">Vencimento</span>
            <span></span>
          </div>
          <div className="custom-table__row">
            <span>{getMonthAndYearFromDate(bill?.DataVencimento)}</span>
            <span>{convertStringToCurrencyPtBr(bill?.ValorParcela)}</span>
            <span>{convertDateToFormatPtBr(bill?.DataVencimento)}</span>
            <span>
              <Button variant="primary">
                <a href={bill} target="_blank" rel="noreferrer">
                  <img src={downloadIcon} alt="Download" /> 2ª via do boleto
                </a>
              </Button>
            </span>
          </div>
        </div>
      )}
    </ContractBillsItemContainer>
  )
}
