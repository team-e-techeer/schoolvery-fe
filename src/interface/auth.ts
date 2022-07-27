// Register
export interface RegisterAPI {
  name: string;
  nickname: string;
  phoneNum: string;
  profileImageUrl: string;
  schoolId: string;
  email: string;
  password: string;
}

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
