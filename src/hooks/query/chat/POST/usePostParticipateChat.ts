import type { PostParticipateChatAPI } from '@/interface/chat';
import { postParticipateChat } from '@/lib/api/chat/POST/postChat';
import { useMutation } from 'react-query';

export const usePostParticipateChat = (data: PostParticipateChatAPI) => {
  return useMutation(() => postParticipateChat(data));
};
