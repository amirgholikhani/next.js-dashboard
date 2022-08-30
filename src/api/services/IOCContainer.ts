export const IocTypes = {
  HttpService: 'HttpService',
  AuthRepository: 'AuthRepository',
  BranchRepository: 'BranchRepository',
  RestaurantRepository: 'RestaurantRepository',
  ReservationRepository: 'ReservationRepository',
}

export class IOCContainer {
  private static instance: { [key: string]: any } = {}

  public static getInstance<T>(typeName: string): T {
    if (!Object.keys(IOCContainer.instance).indexOf(typeName)) {
      //throw `IOCContainer: Type '${typeName}' has not registered.`
    }
    return IOCContainer.instance[typeName] as T;
  }

  public static register<T>(typeName: string, object: T) {
    this.instance[typeName] = object;
  }
}
