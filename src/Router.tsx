import { Routes, Route } from 'react-router-dom'
import { BillsList } from './pages/BillsList'
import { Login } from './pages/Login'
import { LostPassword } from './pages/LostPassword'
import { PasswordSended } from './pages/PasswordSended'
import { RequestPassword } from './pages/RequestPassword'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/solicitar-senha" element={<RequestPassword />} />
      <Route path="/esqueceu-sua-senha" element={<LostPassword />} />
      <Route path="/senha-enviada" element={<PasswordSended />} />
      <Route path="/lista-de-boletos" element={<BillsList />} />
    </Routes>
  )
}
