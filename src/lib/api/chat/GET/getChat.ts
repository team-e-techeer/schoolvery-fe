import type {
  GetAllChatListAPI,
  GetAllChatListAPIResponse,
  GetChatMemberListAPI,
  GetChatMemberListAPIResponse,
  GetChatMessagesAPI,
  GetChatMessagesAPIResponse,
  GetMyAllChatListAPI,
  GetMyAllChatListAPIResponse,
} from '@/interface/chat';
import { makeHeader } from '@/util/makeHeader';
import client from '../../client';

// 모든 채팅방 조회
export const getAllChatList = async ({ accessToken }: GetAllChatListAPI): Promise<GetAllChatListAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get('/api/v1/chats', { headers });
  return data;
};

// 내가 참여중인 모든 채팅방 조회
export const getMyAllChatList = async ({
  accessToken,
  userId,
}: GetMyAllChatListAPI): Promise<GetMyAllChatListAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/chats/find/${userId}`, { headers });
  return data;
};

// 특정 유저가 참여하고 있는 채팅방 조회

// 채팅방에 참여중인 유저 목록 조회
export const getChatMemberList = async ({
  roomId,
  accessToken,
}: GetChatMemberListAPI): Promise<GetChatMemberListAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/chats/member/${roomId}`, { headers });
  return data;
};

// 채팅 메세지 전체 조회
export const getChatMessages = async ({
  roomId,
  accessToken,
}: GetChatMessagesAPI): Promise<GetChatMessagesAPIResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.get(`/api/v1/chats/room/${roomId}`, { headers });
  return data;
};
