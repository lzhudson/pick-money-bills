import styled from 'styled-components'

export const ContractBillsItemContainer = styled.li`
  margin-top: 20px;

  .custom-table {
    margin-top: 20px;
    .only-desktop {
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .only-mobile {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
    &__columns,
    &__row {
      display: grid;
      width: fit-content;
      grid-template-columns: 220px 235px 335px;
      @media (max-width: 1024px) {
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      span {
        font-family: ${(props) => props.theme.openSans};
        font-weight: 700;
        font-size: 1rem;
        color: ${(props) => props.theme['green-700']};
        margin-left: 15px;
        @media (max-width: 375px) {
          font-size: 12px;
        }
      }
    }
    &__columns {
      margin-bottom: 14px;
    }
    &__row {
      background-color: #f9f9f9;
      align-items: center;
      margin-top: 10px;
      span {
        font-family: ${(props) => props.theme.openSans};
        font-weight: 400;
        font-size: 1rem;
        color: #221e20;
        @media (max-width: 768px) {
          padding: 20px 15px 20px 0px;
        }
        @media (max-width: 375px) {
          font-size: 14px;
        }
        &:last-child {
          margin-left: 0px;
          @media (max-width: 768px) {
            margin-left: 15px;
            padding: 0px 15px 20px 0px;
            grid-column: span 3;
          }
        }
        button {
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 14px;
          justify-content: center;
          a {
            display: flex;
            gap: 1rem;
            padding: 0 29px;
          }
        }
      }
    }
  }
`

export const ContractBillsNumber = styled.strong`
  display: block;
  font-family: ${(props) => props.theme.openSans};
  font-size: 20px;
  color: ${(props) => props.theme['gray-900']};
  margin-top: 50px;
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
      padding-left: 30px;
      padding-bottom: 30px;
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
