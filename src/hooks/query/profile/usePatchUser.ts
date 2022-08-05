import type { ProfileAPI } from '@/interface/profile';
import { patchUserAPI } from '@/lib/api/profile/profile';
import { useMutation } from 'react-query';

export const usePatchUserQuery = () => {
    return useMutation((UserInfo: ProfileAPI) => patchUserAPI(UserInfo));
  };