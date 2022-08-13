import { SearchListAPI } from '@/interface/list';
import { getSearchListAPI } from '@/lib/api/list/list';
import { useQuery } from 'react-query';

export const useGetSearchList = ({ keyword, accessToken }: SearchListAPI) => {
  return useQuery([keyword], async () => getSearchListAPI({ keyword, accessToken }), {
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: Boolean(keyword),
  });
};
