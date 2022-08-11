import type { UserAPI } from '@/interface/profile';
import { getUserAPI } from '@/lib/api/profile/profile';
import { useQuery } from 'react-query';

export const useGetUserQuery = (request: UserAPI) => {
    return useQuery(['User', request.accessToken, request.userId], async () => getUserAPI(request), {
      refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      enabled: Boolean(request.userId),
    });
  };