import { AuthRepository } from '@/api/Auth/AuthRepository'
import { IOCContainer, IocTypes } from '@/api/services/IOCContainer'

export class UsersService {
  public static isAuthenticatedWithBackendCheck(): Promise<boolean> {
    const hasToken = localStorage.getItem('token')
    if (hasToken) {
      return IOCContainer.getInstance<AuthRepository>(IocTypes.AuthRepository)
        .userCheck({})
        .then(() => true)
        .catch(() => false)
    }
    return Promise.resolve(false)
  }
}
