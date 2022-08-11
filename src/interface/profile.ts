export interface UserAPI {
    userId: string;
    accessToken: string;
  }

export interface UserAPIResponse{
    modDate: string;
    regDate: string;
    id: string;
    name: string;
    nickname: string;
    profileImageUrl: string;
    phoneNum: string;
    schoolId: string;
    password: string;
    email: string;
}


export interface ProfileAPI {
    userId: string;
    accessToken: string;
    nickname: string;
    password: string;
    phoneNum: string;
    profileImageUrl: string;
  }
  
  export interface ProfileAPIResponse {
    modDate: string;
    regDate: string;
    id: string;
    name: string;
    nickname: string;
    profileImageUrl: string;
    phoneNum: string;
    schoolId: string;
    email: string;
  }