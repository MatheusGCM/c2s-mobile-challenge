import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://randomuser.me/api/?results=20&seed=api&nat=br&exc=login,registered,cell',
})
