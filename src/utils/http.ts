import type { AxiosError, AxiosInstance } from 'axios'
import axios, { HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import type { AuthResponse } from 'src/types/auth.type'
import { clearLocalStorage, getAccessTokenFromLS, setAccessTokenToLS, setProfileFromLS } from './auth'
import path from 'src/constants/path'

class Http {
  instance: AxiosInstance
  //tao accesstoken de toi uu hieu suat, chay tren ram nhanh hon tren o cung
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //luu accesstoken thong qua headers voi key la authorization
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        //login or register thi luu accesstoken
        if (url == path.login || url == path.register) {
          const data = response.data as AuthResponse
          this.accessToken = data.data?.access_token
          setAccessTokenToLS(this.accessToken)
          setProfileFromLS(data.data.user)
        } else {
          //logout thi xoa
          if (url == path.logout) {
            this.accessToken = ''
            clearLocalStorage()
          }
        }

        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        if (error.response?.status == HttpStatusCode.Unauthorized) {
          clearLocalStorage()
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
