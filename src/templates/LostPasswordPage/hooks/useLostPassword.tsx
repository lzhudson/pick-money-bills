import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'

function useLostPassword() {
  async function lostPassword(documentNumber: string) {
    const CPFOrCNPJWithoutMask = documentNumber.replace(/\D/g, '')
    try {
      await api.get(`/cc/SemSenha/${CPFOrCNPJWithoutMask}`)
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
