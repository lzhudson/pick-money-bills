import styled from 'styled-components'
import Background from '../../assets/images/background-pick-money-2-via-de-boletos.png'

export const PasswordSendedContainer = styled.div`
  background: url('${Background}') no-repeat center/cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordSendedContentBox = styled.div`
  background: #f9f9f9;
  width: 550px;
  height: 550px;
  padding: 81px 80px 126px 80px;
  @media (max-width: 425px) {
    padding: 37px;
    height: 100%;
  }
`
