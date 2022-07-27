import type { PostListAPI } from '@/interface/list';
import { getPostListAPI } from '@/lib/api/list/list';
import { useQuery } from 'react-query';

export const useGetPostListQuery = (request: PostListAPI) => {
  return useQuery(['postList', request.accessToken, request.schoolId], async () => getPostListAPI(request), {
    refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    enabled: Boolean(request.schoolId),
  });
};
