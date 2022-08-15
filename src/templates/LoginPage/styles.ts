import styled from 'styled-components'
import Background from '../../assets/images/background-pick-money-2-via-de-boletos.png'

export const LoginPageContainer = styled.div`
  background: url('${Background}') no-repeat center/cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentLoginContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${(props) => props.theme.white};
  padding: 64px 75px;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding: 30px 37px;
  }
`

export const ContentLeft = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContentRight = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`
