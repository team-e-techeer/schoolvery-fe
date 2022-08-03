import { atom } from 'recoil';

interface Category {
  id: string;
  name: string;
  description: string;
}

const categoryListState = atom<Category[]>({
  key: 'categoryList',
  default: [],
});

export { categoryListState };
