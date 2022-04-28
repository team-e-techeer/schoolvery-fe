import { atom } from 'recoil';

export interface Login {
  id: string;
  pw: string;
}

const loginState = atom<Login>({
  key: 'login',
  default: {
    id: '',
    pw: '',
  },
});

export { loginState };
