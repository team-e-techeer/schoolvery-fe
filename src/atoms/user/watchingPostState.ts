import { atom } from 'recoil';

export interface WatchingPostState {
  id: string;
  title: string;
  peopleNum: number;
  deliveryFee: number;
  content: string;
  store: string;
  location: string;
  categoryId: string;
  deadline: string;
  left: string;
}

const watchingPostState = atom<WatchingPostState>({
  key: 'watchingPostState',
  default: {
    id: '',
    title: '',
    peopleNum: 0,
    deliveryFee: 0,
    content: '',
    store: '',
    categoryId: '',
    location: '',
    deadline: '',
    left: '',
  },
});

export { watchingPostState };
