import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks/auth'
import { api } from '../../../services/api'

function useLostPassword() {
  const { generateToken } = useAuth()

  async function lostPassword(documentNumber: string) {
    const CPFOrCNPJWithoutMask = documentNumber.replace(/\D/g, '')
    try {
      const token = await generateToken()
      console.log(token)
      await api.get(`/AreaRestrita/SemSenha/Ccb/${CPFOrCNPJWithoutMask}`, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error) {
      const err = error as AxiosError
      const message = err.response?.data
      toast.error(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeButton: true,
      })
    }
  }

  return {
    lostPassword,
  }
}

export { useLostPassword }
