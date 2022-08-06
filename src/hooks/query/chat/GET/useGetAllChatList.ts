import { GetAllChatListAPI } from '@/interface/chat';
import { getAllChatList } from '@/lib/api/chat/GET/getChat';
import { useQuery } from 'react-query';

export const useGetAllChatList = ({ accessToken }: GetAllChatListAPI) => {
  return useQuery(['allChatList', accessToken], async () => getAllChatList({ accessToken }), {
    refetchOnWindowFocus: true,
    retry: 1,
    enabled: Boolean(accessToken),
  });
};
