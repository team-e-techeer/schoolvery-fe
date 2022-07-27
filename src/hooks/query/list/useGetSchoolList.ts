import { getSchoolListAPI } from '@/lib/api/auth/school';
import { useQuery } from 'react-query';

export const useGetSchoolListQuery = () => {
  return useQuery('schoolList', async () => getSchoolListAPI(), {
    refetchOnWindowFocus: false,
    retry: 0,
  });
};
