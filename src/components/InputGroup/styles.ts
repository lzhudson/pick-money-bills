import styled from 'styled-components'

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & + & {
    margin-top: 0.875rem;
  }
`
