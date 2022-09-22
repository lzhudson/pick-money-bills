import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../../hooks/auth'
import { Router } from '../../Router'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
