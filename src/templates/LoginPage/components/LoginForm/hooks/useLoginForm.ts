import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import { useAuth } from '../../../../../hooks/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

type RegistrationFormData = {
  documentNumber: string
  password: string
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
  password: yup.string().required('Obrigatório'),
})

export function useLoginForm() {
  const { register, handleSubmit, formState, control, getValues } =
    useForm<RegistrationFormData>({
      resolver: yupResolver(validationSchema),
    })
  const { errors } = formState
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<RegistrationFormData> = async ({
    documentNumber,
    password,
  }) => {
    try {
      const passwordInBase64 = btoa(unescape(encodeURIComponent(password)))
      await signIn({ documentNumber, password: passwordInBase64 })
      toast.success('Seja bem-vindo', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeButton: true,
      })
      navigate('/lista-de-boletos')
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
