import styled from 'styled-components'

export const ContractBillsItemContainer = styled.li`
  margin-top: 50px;
`

export const ContractBillsNumber = styled.strong`
  font-family: ${(props) => props.theme.openSans};
  font-size: 20px;
  color: ${(props) => props.theme['gray-900']};
`

export const TableContainer = styled.div`
  margin-top: 20px;
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
    tr {
      background: #f9f9f9;
      padding: 1rem;
      &:first-child {
        background: transparent;
      }
    }
    th {
      font-family: ${(props) => props.theme.openSans};
      font-weight: 700;
      font-size: 16px;
      color: ${(props) => props.theme['green-700']};
      padding-left: 20px;
      padding-bottom: 20px;
    }
    td {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-right: 20px;
      padding-left: 20px;
      &:last-child {
        padding: 0;
        button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 32px;
          justify-content: center;
        }
      }
    }
  }
`
