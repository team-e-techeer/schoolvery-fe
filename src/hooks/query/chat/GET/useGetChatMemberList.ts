import { GetChatMemberListAPI } from '@/interface/chat';
import { getChatMemberList } from '@/lib/api/chat/GET/getChat';
import { useQuery } from 'react-query';

export const useGetChatMemberList = ({ accessToken, roomId }: GetChatMemberListAPI) => {
  return useQuery(['chatMemberList', accessToken, roomId], async () => getChatMemberList({ accessToken, roomId }), {
    refetchOnWindowFocus: true,
    retry: 1,
    enabled: Boolean([accessToken, roomId]),
  });
};
