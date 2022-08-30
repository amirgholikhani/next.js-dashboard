export interface LoginDTO {
  data: LoginDataDTO
}

export interface LoginDataDTO {
  username: string;
  password: string;
  branchId: number;
  userAgent: string;
}

export interface SendVerifyCodeDataDTO {
  mobile: string;
  allowCreate: boolean;
}

export interface SendLoginDTO {
  data: LoginDataDTO
}

export interface SendVerifyCodeDTO {
  data: SendVerifyCodeDataDTO
}

export interface VerifyCodeDataDTO {
  mobile: string;
  verifyCode: string;
}

export interface VerifyCodeDTO {
  data: VerifyCodeDataDTO
}

export interface ChangeNameDataDTO {
  fullName: string;
}

export interface ChangeNameDTO {
  data: ChangeNameDataDTO
}