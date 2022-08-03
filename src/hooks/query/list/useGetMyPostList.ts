import { MyPostListAPI } from '@/interface/list';
import { getMyPostListAPI } from '@/lib/api/list/list';
import { useQuery } from 'react-query';

export const useGetMyPostList = (request: MyPostListAPI) => {
  return useQuery('schoolList', async () => getMyPostListAPI(request), {
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: Boolean(request.userId),
  });
};
