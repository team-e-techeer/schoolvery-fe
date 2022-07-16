import { atom } from 'recoil';

export interface Register {
  name: string;
  nickname: string;
  id: string;
  password: string;
  passwordConfirm: string;
  email: string;
  schoolName: string;
  phoneNum: string;
  [prop: string]: string;
}

const registerState = atom<Register>({
  key: 'register',
  default: {
    name: '',
    nickname: '',
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    phoneNum: '',
    schoolName: '',
  },
});

export { registerState };
