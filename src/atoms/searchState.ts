import { atom } from 'recoil';

export interface EachSearch {
  searchValue: string;
}

const searchState = atom<EachSearch[]>({
  key: 'search',
  default: [],
});

export { searchState };
