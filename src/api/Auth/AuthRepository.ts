import {
  LoginDTO,
  SendVerifyCodeDTO,
  VerifyCodeDTO,
  ChangeNameDTO,
} from '@/models/services/auth.interface'
import { GetDTO } from '@/models/services/request.interface'
import { HttpService } from '@/api/http.service'

export class AuthRepository {
  constructor(private readonly http: HttpService) {}

  login = async (payload: LoginDTO) => {
    const response = await this.http.postRequest('/User/authenticate', payload)
    localStorage.setItem('token', response.data.token)
    return response
  }

  sendVerifyCode = async (payload: SendVerifyCodeDTO) => {
    const response = await this.http.postRequest(
      '/User/SendVerifyCode',
      payload
    )
    return response
  }

  verifyCode = async (payload: VerifyCodeDTO) => {
    const response = await this.http.postRequest('/User/Verify', payload)
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('username', response.data.username)
    localStorage.setItem('fullName', response.data.fullName)
    return response
  }

  changeName = async (payload: ChangeNameDTO) => {
    const response = await this.http.patchRequest('/User/ChangeName', payload)
    localStorage.setItem('username', response.data.username)
    localStorage.setItem('fullName', response.data.name)
    return response
  }

  signOut = async (payload: GetDTO) => {
    const response = await this.http.getRequest('/User/signOut', payload)
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('fullName')
    return response
  }

  userCheck = async (payload: GetDTO) => {
    const response = await this.http.getRequest('/User/Check', payload)
    return response
  }
}
