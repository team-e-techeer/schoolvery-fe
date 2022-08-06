import { DeleteChatRoom, DeleteChatRoomResponse } from '@/interface/chat';
import { makeHeader } from '@/util/makeHeader';
import client from '../../client';

// 채팅방 삭제
export const deleteChatRoom = async ({ accessToken, roomId }: DeleteChatRoom): Promise<DeleteChatRoomResponse> => {
  const headers = makeHeader(accessToken);
  const { data } = await client.delete(`/api/v1/chats/${roomId}`, { headers });
  return data;
};
