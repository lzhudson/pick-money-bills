import axios from 'axios'

const api = axios.create({
  baseURL: 'http://homolog.momentum.com.br/integracoes/areaProprietario/api',
})

export { api }
