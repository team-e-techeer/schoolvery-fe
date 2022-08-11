import { atom } from 'recoil';

export interface prevWrite {
  title: string;
}

const prevWriteState = atom<prevWrite>({
  key: 'prevWriteState',
  default: {
    title: '',
  },
});

export { prevWriteState };
