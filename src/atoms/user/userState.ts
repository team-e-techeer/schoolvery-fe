import { atom, AtomEffect } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
// const localStorageEffect: <T>(key: string) => AtomEffect<T> =
//   (key: string) =>
//   ({ setSelf, onSet }) => {
//     const savedValue = localStorage.getItem(key);
//     if (savedValue != null) {
//       setSelf(JSON.parse(savedValue));
//     }
//     onSet((newValue, _, isReset) => {
//       isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };

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
  effects_UNSTABLE: [persistAtom],
});

export { userState };
