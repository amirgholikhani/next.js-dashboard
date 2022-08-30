import { IOCContainer, IocTypes } from "@/api/services/IOCContainer"
import { HttpService } from "@/api/http.service"
import { AuthRepository } from "@/api/Auth/AuthRepository"
const httpService = new HttpService()
IOCContainer.register(IocTypes.HttpService, httpService)
IOCContainer.register(IocTypes.AuthRepository, new AuthRepository(httpService))
