import { GetMyAllChatListAPI } from '@/interface/chat';
import { getMyAllChatList } from '@/lib/api/chat/GET/getChat';
import { useQuery } from 'react-query';

export const useGetMyAllChatList = ({ accessToken, userId }: GetMyAllChatListAPI) => {
  return useQuery(['allMyChatList'], async () => getMyAllChatList({ accessToken, userId }), {
    refetchOnWindowFocus: true,
    retry: 1,
    enabled: Boolean(accessToken),
  });
};
