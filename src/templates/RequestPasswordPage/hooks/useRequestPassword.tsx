import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'

function useRequestPassword() {
  async function requestPassword(documentNumber: string) {
    const CPFOrCNPJWithoutMask = documentNumber.replace(/\D/g, '')
    try {
      const result = await api.get(`/cc/SemSenha/${CPFOrCNPJWithoutMask}`)
      console.log(result)
    } catch (error) {
      const err = error as AxiosError
      console.log(error)
      const message = err.response?.data
      toast.error(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeButton: true,
      })
    }
  }

  return {
    requestPassword,
  }
}

export { useRequestPassword }
