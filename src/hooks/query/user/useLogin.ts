import { LoginAPI } from '@/interface/auth';
import { getLoginAPI } from '@/lib/api/auth/auth';

import { useMutation } from 'react-query';

export const useLoginMutation = () => {
  return useMutation((loginInfo: LoginAPI) => getLoginAPI(loginInfo));
};
