import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useLostPassword } from './useLostPassword'

type LostFormData = {
  documentNumber: string
}

const validationSchema = yup.object().shape({
  documentNumber: yup
    .string()
    .required('Obrigatório')
    .test('documentNumber', 'CPF/CNPJ Inválido', (value) => {
      const CPFWithoutLastDigit = value?.replace('_', '')
      const CPFOrCNPJRegex =
        /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/
      const isCPFOrCNPJ = CPFOrCNPJRegex.test(CPFWithoutLastDigit || '')
      return isCPFOrCNPJ
    }),
})

export function useLostPasswordForm() {
  const { lostPassword } = useLostPassword()
  const navigate = useNavigate()

  const { register, handleSubmit, formState, control, getValues } =
    useForm<LostFormData>({
      resolver: yupResolver(validationSchema),
    })
  const { errors } = formState
  const onSubmit: SubmitHandler<LostFormData> = async ({ documentNumber }) => {
    try {
      await lostPassword(documentNumber)
      navigate('/senha-enviada')
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
    register,
    errors,
    isLoading: formState.isSubmitting,
    onSubmit: handleSubmit(onSubmit),
    control,
    getValues,
  }
}
