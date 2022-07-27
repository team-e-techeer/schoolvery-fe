import { getUserInfoAPI } from '@/lib/api/auth/auth';
import { useQuery } from 'react-query';

export const useGetUserInfo = (token: string) => {
  return useQuery(['userInfo', token], async () => getUserInfoAPI(token), {
    refetchOnWindowFocus: false,
    retry: 0,
  });
};
