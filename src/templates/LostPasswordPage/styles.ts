import styled from 'styled-components'
import Background from '../../assets/images/background-pick-money-2-via-de-boletos.png'
export const LostPasswordContainer = styled.div`
  background: url('${Background}') no-repeat center/cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LostPasswordContentBox = styled.div`
  background: #f9f9f9;
  width: 550px;
  height: 550px;
  padding: 81px 105px 126px 105px;
  @media (max-width: 425px) {
    padding: 37px;
    height: 100%;
  }
`