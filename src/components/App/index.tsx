import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../../hooks/auth'
import { Router } from '../../Router'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'
export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}
