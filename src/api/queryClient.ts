import axios from 'axios'
import {
  QueryClient
} from 'react-query'

const key = localStorage.getItem('apiKey')

export const queryClient = new QueryClient()

export const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: { 'x-apisports-key': key }
})
