// Register
interface RegisterInfo {
  name: string;
  nickname: string;
  phoneNum: string;

  schoolId: string;
  email: string;
  password: string;
}

export type RegisterAPI = FormData;

// Login
export interface LoginAPI {
  email: string;
  password: string;
}

export interface LoginAPIResponse {
  accessToken: string;
  email: string;
}

// User Data

export interface UserMeAPIResponse {
  id: string;
  name: string;
  nickname: string;
  profileImageUrl: string;
  phoneNum: string;
  schoolId: string;
  email: string;
  modDate: string;
  regDate: string;
}
