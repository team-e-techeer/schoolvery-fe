import type { PostParticipateChatAPI } from '@/interface/chat';
import { postParticipateChat } from '@/lib/api/chat/POST/postChat';
import { useMutation } from 'react-query';

export const usePostParticipateChat = () => {
  return useMutation((data: PostParticipateChatAPI) => postParticipateChat(data));
};
