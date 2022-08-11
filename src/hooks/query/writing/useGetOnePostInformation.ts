import { OnePostInformationAPI } from '@/interface/writing';
import { getOnePostInformationAPI } from '@/lib/api/writing/writing';
import { useQuery } from 'react-query';

export const useGetOnePostInformation = ({ accessToken, postId }: OnePostInformationAPI) => {
  return useQuery(['getOnePost', postId], async () => getOnePostInformationAPI({ accessToken, postId }), {
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: Boolean(postId),
  });
};
