import type { UserAPI } from '@/interface/profile';
import { deleteUserAPI } from '@/lib/api/profile/profile';
import { useMutation } from 'react-query';

export const useDeleteUser = (userInfo: UserAPI) => {
    return useMutation(() => deleteUserAPI(userInfo));
  };