import styled from 'styled-components'

export const NoBillsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  background: #f9f9f9;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    padding: 25px 36px;
  }
  p {
    font-family: ${(props) => props.theme.openSans};
    font-size: 22px;
    text-align: center;
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`
