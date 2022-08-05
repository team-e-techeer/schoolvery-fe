import type { UserAPI } from '@/interface/profile';
import { deleteUserAPI } from '@/lib/api/profile/profile';
import { useMutation } from 'react-query';

export const usePatchUserQuery = () => {
    return useMutation((UserInfo: UserAPI) => deleteUserAPI(UserInfo));
  };