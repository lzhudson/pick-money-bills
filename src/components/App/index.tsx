import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'
import { ContainerApp } from './styles'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerApp />
      <GlobalStyle />
    </ThemeProvider>
  )
}
