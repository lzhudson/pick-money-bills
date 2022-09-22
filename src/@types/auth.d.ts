export interface ISignInCredentials {
  documentNumber: string
  password: string
}

export interface IGetUserData {
  documentNumber: string
  password: string
  token: string
}
