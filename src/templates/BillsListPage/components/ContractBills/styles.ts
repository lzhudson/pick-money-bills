import styled from 'styled-components'

export const ContractBillsNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    color: ${(props) => props.theme['gray-900']};
    font-size: 14px;
    font-family: ${(props) => props.theme.openSans};
  }
  span {
    font-family: ${(props) => props.theme.openSans};
    color: ${(props) => props.theme['green-700']};
    font-weight: 700;
    font-size: 30px;
  }
`
