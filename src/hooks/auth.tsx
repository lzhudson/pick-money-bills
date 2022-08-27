import { createContext, ReactNode, useContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { ApiResponseDTO } from '../@types/api'
import { ISignInCredentials } from '../@types/auth'
import { api } from '../services/api'
import { MINUTES_IN_MILLISECONDS } from '../utils/constants'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextData {
  generateToken: () => Promise<string>
  signIn: (credentias: ISignInCredentials) => Promise<void>
  signOut: () => void
  checkUserIsLogged: () => void
  isAuthenticated: boolean
  userLogged: string | null
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [userLogged, setUserLogged] = useState<string | null>(null)
  const [cookies, setCookies, removeCookie] = useCookies([
    '@pick-money-bills-token',
    '@pick-money-bills-user',
  ])
  const isAuthenticated = !!userLogged

  function generateTimeToExpireToken() {
    const currentTimeInMilliseconds = new Date().getTime()
    const currentTimeInMillisecondsMoreFifteenMinutes =
      currentTimeInMilliseconds + MINUTES_IN_MILLISECONDS.FIFTEEN
    return currentTimeInMillisecondsMoreFifteenMinutes
  }

  async function generateToken() {
    const response = (await api.post('/login', {
      Username: 'AreaExternaApi',
      Password: 'MOMENTUM@1',
    })) as ApiResponseDTO
    const { data } = response
    setCookies('@pick-money-bills-token', data, {
      maxAge: generateTimeToExpireToken(),
      path: '/',
    })
    return data
  }
  async function signIn({ documentNumber, password }: ISignInCredentials) {
    const token = await generateToken()
    const CPFOrCNPJWithoutMask = documentNumber.replace(/\D/g, '')
    const response = (await api.post(
      'AreaRestrita/Login/Ccb',
      {
        CpfCnpj: Number(CPFOrCNPJWithoutMask),
        Senha: password,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    )) as ApiResponseDTO
    const { data } = response
    setCookies('@pick-money-bills-user', data, {
      maxAge: generateTimeToExpireToken(),
      path: '/',
    })
    setUserLogged(data)
  }

  function signOut() {
    removeCookie('@pick-money-bills-token')
    removeCookie('@pick-money-bills-user')
    setUserLogged(null)
  }
  function checkTokenIsValid() {
    if (
      cookies['@pick-money-bills-token'] &&
      cookies['@pick-money-bills-user']
    ) {
      return true
    }
  }

  function checkUserIsLogged() {
    const tokenIsValid = checkTokenIsValid()
    if (tokenIsValid) {
      setUserLogged(cookies['@pick-money-bills-user'])
    }
  }

  return (
    <AuthContext.Provider
      value={{
        generateToken,
        signIn,
        isAuthenticated,
        userLogged,
        signOut,
        checkUserIsLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
