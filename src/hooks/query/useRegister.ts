import { RegisterAPI } from '@/interface/auth';
import { postRegisterAPI } from '@/lib/api/auth/auth';

import { useMutation } from 'react-query';

export const useRegisterMutation = () => {
  return useMutation((registerInfo: RegisterAPI) => postRegisterAPI(registerInfo));
};
