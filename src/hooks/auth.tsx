import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { ApiResponseDTO } from '../@types/api'
import { IGetUserData, ISignInCredentials } from '../@types/auth'
import { api } from '../services/api'
import { useLocalStorage } from './useLocalStorage'

interface AuthProviderProps {
  children: ReactNode
}
interface IUserLoggedData {
  CpfCnpj: number
  NomeCliente: string
  contratos: any
}
interface AuthContextData {
  signIn: (credentias: ISignInCredentials) => Promise<void>
  signOut: () => void
  checkUserIsLogged: () => void
  isAuthenticated: boolean
  userLogged: IUserLoggedData | undefined
  user: IUserLoggedData
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const [userLogged, setUserLogged] = useState<IUserLoggedData>()
  const [user, setUser] = useLocalStorage('user', undefined)
  const [cookies, setCookies, removeCookie] = useCookies([
    '@pick-money-bills-token',
    '@pick-money-user-auth',
  ])
  const isAuthenticated = !!userLogged

  async function generateToken({
    documentNumber,
    password,
  }: ISignInCredentials) {
    const CPFOrCNPJWithoutMask = documentNumber.replace(/\D/g, '')
    const response = (await api.post('AuthenticationCcb', {
      CpfCnpj: Number(CPFOrCNPJWithoutMask),
      Senha: password,
    })) as ApiResponseDTO
    const { data } = response
    return data
  }

  async function getUserData({
    documentNumber,
    password,
    token,
  }: IGetUserData) {
    const CPFOrCNPJWithoutMask = documentNumber.replace(/\D/g, '')
    const requestUserData = await api.post(
      '/boleto/ccb',
      {
        CpfCnpj: Number(CPFOrCNPJWithoutMask),
        Senha: password,
      },
      {
        headers: {
          Authorization: String(token),
        },
      },
    )
    const { data } = requestUserData
    return data
  }

  async function signIn({ documentNumber, password }: ISignInCredentials) {
    const token = await generateToken({ documentNumber, password })
    const userData = await getUserData({ documentNumber, password, token })
    const userAuthData = {
      documentNumber: documentNumber.replace(/\D/g, ''),
      password,
    }
    setCookies('@pick-money-bills-token', token, {
      maxAge: 9000,
      path: '/',
    })

    setCookies('@pick-money-user-auth', userAuthData, {
      maxAge: 9000,
      path: '/',
    })

    setUserLogged(userData)
    setUser(userData)
  }

  function signOut() {
    removeCookie('@pick-money-bills-token')
    removeCookie('@pick-money-user-auth')
    setUserLogged(undefined)
    setUser(undefined)
  }
  function checkTokenIsValid() {
    if (cookies['@pick-money-bills-token']) {
      return true
    }
  }

  function checkUserIsLogged() {
    const tokenIsValid = checkTokenIsValid()
    if (tokenIsValid) {
      setUserLogged(cookies['@pick-money-bills-token'])
    }
  }

  useEffect(() => {
    if (!checkTokenIsValid()) {
      signOut()
      navigate('/')
    } else {
      async function getUserInfo() {
        const userDataInCookies = cookies['@pick-money-user-auth']
        const token = cookies['@pick-money-bills-token']
        const { documentNumber, password } = userDataInCookies
        const userData = await getUserData({ documentNumber, password, token })
        setUserLogged(userData)
        setUser(userData)
      }
      getUserInfo()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isAuthenticated,
        userLogged,
        signOut,
        checkUserIsLogged,
        user,
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
