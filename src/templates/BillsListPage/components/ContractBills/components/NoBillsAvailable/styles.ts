import styled from 'styled-components'

export const NoBillsAvailableContainer = styled.div`
  height: 290px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  margin-top: 20px;

  h3 {
    font-family: ${(props) => props.theme.openSans};
    font-weight: 700;
    font-size: 22px;

    color: ${(props) => props.theme['red-500']};
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }

  p {
    font-family: ${(props) => props.theme.openSans};
    font-size: 20px;
    line-height: 32px;
    color: ${(props) => props.theme['gray-900']};
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`
