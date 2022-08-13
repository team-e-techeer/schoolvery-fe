import { GetChatInfoWithPostId } from '@/interface/chat';
import { getChatInfoWithPostId } from '@/lib/api/chat/GET/getChat';
import { useQuery } from 'react-query';

export const useGetChatInfoWithPostId = ({ accessToken, postId }: GetChatInfoWithPostId) => {
  return useQuery(['chatInfo', accessToken], async () => getChatInfoWithPostId({ accessToken, postId }), {
    refetchOnWindowFocus: true,
    retry: 1,
    enabled: Boolean(postId),
  });
};
