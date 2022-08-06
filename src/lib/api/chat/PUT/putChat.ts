import type {
  PutLeftChatAPI,
  PutLeftChatAPIResponse,
  PutRenameChatTitle,
  PutRenameChatTitleResponse,
} from '@/interface/chat';
import { makeHeader } from '@/util/makeHeader';
import client from '../../client';

export const putRenameChatTitle = async ({
  accessToken,
  putData,
}: PutRenameChatTitle): Promise<PutRenameChatTitleResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.put('/api/v1/chats', putData, { headers });
  return data;
};

export const putLeftChat = async ({ accessToken, putData }: PutLeftChatAPI): Promise<PutLeftChatAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.put('/api/v1/chats/member', putData, { headers });
  return data;
};
