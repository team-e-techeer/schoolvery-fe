import { atom } from 'recoil';

export interface Login {
  email: string;
  password: string;
}

const loginState = atom<Login>({
  key: 'login',
  default: {
    email: '',
    password: '',
  },
});

export { loginState };
