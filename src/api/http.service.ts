import type { GetServerSidePropsContext } from 'next'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { GetDTO, PostDTO } from '@/models/services/request.interface'

export class HttpService {
  public readonly axiosInstance: AxiosInstance
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL || ''}/api/`,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    })
  }

  setSsrContext(ssrContext: GetServerSidePropsContext) {
    const isDevelopment = process.env.NODE_ENV == 'development'
    if (!isDevelopment) {
      const ssrHostName = ssrContext?.req?.headers.host || ''
      const baseURL = `https://${ssrHostName}/api/`
      this.axiosInstance.defaults.baseURL = baseURL
    }
    console.log('base-url ssr mode', this.axiosInstance.defaults.baseURL)
  }

  execute(requestConfig: AxiosRequestConfig) {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        let token = ''
        if (typeof window !== 'undefined') {
          // Perform localStorage action
          token = localStorage.getItem('token') || ''
        }
        config.headers = {
          ...config.headers,
          ...(token && { Authorization: `Bearer ${token}` }),
        }
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
    //console.log('axios-request:', requestConfig.url)
    return this.axiosInstance(requestConfig)
  }

  getRequest = (url: string, request: GetDTO = {}) => {
    const mainRequest = { method: 'GET', url, ...request }
    return this.execute(mainRequest)
  }

  postRequest = async (url: string, request: PostDTO) => {
    const mainRequest = { method: 'POST', url, ...request }
    return this.execute(mainRequest)
  }

  patchRequest = async (url: string, request: PostDTO) => {
    const mainRequest = { method: 'PATCH', url, ...request }
    return this.execute(mainRequest)
  }
}
