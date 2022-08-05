import type { ProfileAPI } from '@/interface/profile';
import { patchUserAPI } from '@/lib/api/profile/profile';
import { useMutation } from 'react-query';

export const usePatchUserQuery = (request: ProfileAPI) => {
    return useMutation(['User', request.accessToken, request.userId], async () => patchUserAPI(request));
  };