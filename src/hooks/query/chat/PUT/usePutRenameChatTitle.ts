import type { PutRenameChatTitle } from '@/interface/chat';
import { putRenameChatTitle } from '@/lib/api/chat/PUT/putChat';
import { useMutation } from 'react-query';

export const usePutRenameChatTitle = (data: PutRenameChatTitle) => {
  return useMutation(() => putRenameChatTitle(data));
};
