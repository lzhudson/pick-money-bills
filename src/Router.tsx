import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { RequestPassword } from './pages/RequestPassword'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/solicitar-senha" element={<RequestPassword />} />
    </Routes>
  )
}
