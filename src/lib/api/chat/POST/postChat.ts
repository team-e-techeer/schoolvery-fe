import {
  PostChatMessageAPI,
  PostChatMessageAPIResponse,
  PostParticipateChatAPI,
  PostParticipateChatAPIResponse,
} from '@/interface/chat';
import { makeHeader } from '@/util/makeHeader';
import client from '../../client';

// 특정 채팅방 참여하기
export const postParticipateChat = async ({
  accessToken,
  postData,
}: PostParticipateChatAPI): Promise<PostParticipateChatAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.post(`/api/v1/chats/member`, postData, { headers });
  return data;
};

export const postChatMessage = async ({
  accessToken,
  postData,
}: PostChatMessageAPI): Promise<PostChatMessageAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.post(`/api/v1/chats/member`, postData, { headers });
  return data;
};
