
import { auth } from './login'

import axios from 'axios'

export const request = axios.create()

request.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    access_token: auth.access_token,
  }
  return config
})
