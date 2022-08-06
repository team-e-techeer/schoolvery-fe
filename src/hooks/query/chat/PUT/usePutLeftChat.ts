import type { PutLeftChatAPI } from '@/interface/chat';
import { putLeftChat } from '@/lib/api/chat/PUT/putChat';
import { useMutation } from 'react-query';

export const usePutLeftChat = (data: PutLeftChatAPI) => {
  return useMutation(() => putLeftChat(data));
};
