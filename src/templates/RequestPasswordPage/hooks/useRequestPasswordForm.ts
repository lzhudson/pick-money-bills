import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useRequestPassword } from './useRequestPassword'
import { api } from '../../../services/api'

type RequestFormData = {
  documentNumber: string
}

const validationSchema = yup.object().shape({
  documentNumber: yup
    .string()
    .required('Obrigatório')
    .test('documentNumber', 'CPF/CNPJ Inválido', (value) => {
      let CPFWithoutLastDigit = value?.replace('_', '')
      if (CPFWithoutLastDigit?.length === 10) {
        CPFWithoutLastDigit = `0${CPFWithoutLastDigit}`
      }
      const CPFOrCNPJRegex =
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
      const isCPFOrCNPJ = CPFOrCNPJRegex.test(CPFWithoutLastDigit || '')
      return isCPFOrCNPJ
    }),
})

export function useRequestPasswordForm() {
  const { requestPassword } = useRequestPassword()
  const navigate = useNavigate()

  const { register, handleSubmit, formState, control, getValues } =
    useForm<RequestFormData>({
      resolver: yupResolver(validationSchema),
    })
  const { errors } = formState
  const onSubmit: SubmitHandler<RequestFormData> = async ({
    documentNumber,
  }) => {
    const CPFOrCNPJWithoutMask = documentNumber.replace(/\D/g, '')
    try {
      await api.get(`/cc/SemSenha/${CPFOrCNPJWithoutMask}`)
      navigate('/senha-enviada')
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
    register,
    errors,
    isLoading: formState.isSubmitting,
    onSubmit: handleSubmit(onSubmit),
    control,
    getValues,
  }
}
