import styled, { css } from 'styled-components'

interface IButtonProps {
  variant: 'primary' | 'secondary' | 'outline-dark'
  loading?: boolean
}

export const Button = styled.button<IButtonProps>`
  height: 56px;
  border: none;
  font-family: ${(props) => props.theme.caecillia};
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.white};
  ${(props) =>
    props.loading &&
    css`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      svg {
        animation: spin 1s infinite linear;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
      &:hover {
        background-color: ${(props) => props.theme['green-500']};
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${(props) => props.theme['gray-900']};
      transition: background-color 0.2s;
      &:hover {
        background-color: ${(props) => props.theme['gray-500']};
      }
    `}
  ${(props) =>
    props.variant === 'outline-dark' &&
    css`
      background-color: transparent;
      border: 1px solid ${(props) => props.theme['gray-500']};
      color: ${(props) => props.theme['gray-900']};
      transition: all 0.2s;
      &:hover {
        background-color: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme.white};
      }
    `}
  @media (max-width: 576px) {
    height: 38px;
    font-size: 1rem;
    line-height: 0px;
  }
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
