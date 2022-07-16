import { atom } from 'recoil';

export interface SchoolSearch {
  schoolId: string;
  schoolName: string;
}

const schoolSearchState = atom<SchoolSearch>({
  key: 'schoolSearch',
  default: {
    schoolId: '',
    schoolName: '',
  },
});

export { schoolSearchState };
