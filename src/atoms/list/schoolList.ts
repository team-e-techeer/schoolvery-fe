import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
interface schoolInfo {
  schoolId: '';
  schoolName: '';
}

const schoolListState = atom<schoolInfo[]>({
  key: 'schoolList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export { schoolListState };
