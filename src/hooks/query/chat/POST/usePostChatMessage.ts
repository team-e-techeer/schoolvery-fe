import type { PostChatMessageAPI } from '@/interface/chat';
import { postChatMessage } from '@/lib/api/chat/POST/postChat';
import { useMutation } from 'react-query';

export const usePostChatMessage = (data: PostChatMessageAPI) => {
  return useMutation(() => postChatMessage(data));
};
