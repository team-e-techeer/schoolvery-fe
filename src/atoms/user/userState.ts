import { atom } from 'recoil';

export interface User {
  accessToken: string;
  email: string;
  id: string;
  name: string;
  nickname: string;
  profileImageUrl: string;
  phoneNum: string;
  schoolId: string;
  modDate: string;
  regDate: string;
}

const userState = atom<User>({
  key: 'userState',
  default: {
    accessToken: '',
    email: '',
    id: '',
    name: '',
    nickname: '',
    profileImageUrl: '',
    phoneNum: '',
    schoolId: '',
    modDate: '',
    regDate: '',
  },
});

export { userState };
