import { GetChatMessagesAPI } from '@/interface/chat';
import { getChatMessages } from '@/lib/api/chat/GET/getChat';
import { useQuery } from 'react-query';

export const useGetChatMessages = ({ accessToken, roomId }: GetChatMessagesAPI) => {
  return useQuery(['chatMessages', accessToken, roomId], async () => getChatMessages({ accessToken, roomId }), {
    refetchOnWindowFocus: true,
    retry: 1,
    enabled: Boolean([accessToken, roomId]),
  });
};
