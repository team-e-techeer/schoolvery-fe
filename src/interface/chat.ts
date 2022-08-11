// 📒 GET

//////////////////////////////////////////////////
// 📭 REQUEST
/**
 * @interface GetMyAllChatListAPI
 * 내가 참여중인 채팅방 조회
 */
export interface GetMyAllChatListAPI {
  accessToken: string;
  userId: string;
}
interface dtoLIst {
  id: string;
  room_id: string;
  user_id: string;
}
// 📩 RESPONSE
/**
 * @interface GetMyAllChatListAPIResponse
 * 내가 참여중인 채팅방 조회
 */
// 내가 참여중인 채팅방 조회 Response
export type GetMyAllChatListAPIResponse = dtoLIst[];

//////////////////////////////////////////////////

//////////////////////////////////////////////////
// 채팅방 전체 조회
// 📭 REQUEST
/**
 * @interface GetAllChatListAPI
 * 채팅방 전체 조회 Response
 */
export interface GetAllChatListAPI {
  accessToken: string;
}
// 📩 RESPONSE
/**
 * @interface GetAllChatListAPIResponse
 * 채팅방 전체 조회 Response
 */
export interface GetAllChatListAPIResponse {
  dtoList: dtoLIst[];
  page: number;
  totalPage: number;
  size: number;
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// 📭 REQUEST
// * 현재 채팅방 참여중인 멤버조회 *
/**
 * @interface GetChatMemberListAPI
 * 현재 채팅방 참여중인 멤버조회 Request
 */
export interface GetChatMemberListAPI {
  accessToken: string;
  roomId: string;
}
// 📩 RESPONSE
/**
 * @interface GetChatMemberListAPIResponse
 * 현재 채팅방 참여중인 멤버조회 Response
 */
interface MemberInfo {
  user_id: string;
}
export interface GetChatMemberListAPIResponse {
  dtoList: MemberInfo[];
  totalPage: number;
  page: number;
  size: number;
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// 내가 참여중인 채팅방 조회
// 📭 REQUEST
/**
 * @interface ChatList
 * 내가 참여중인 채팅방 조회 Response
 */
interface ChatList {
  id: string;
  roomId: string;
  user_id: string;
}
export type GetMyChatList = ChatList[];
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// 📭 REQUEST
// * 채팅방 메세지 전체 조회 *
/**
 * @interface GetChatMessagesAPI
 * 채팅방 메세지 전체 조회 Request
 */
export interface GetChatMessagesAPI {
  accessToken: string;
  roomId: number;
}
// 📩 RESPONSE
/**
 * @interface GetChatMessagesAPIResponse
 * 채팅방 메세지 전체 조회 Response
 */
interface messageInfo {
  user_id: string;
  regDate: string;
  message: string;
}
export interface GetChatMessagesAPIResponse {
  room_id: string;
  room_messages: messageInfo[];
}
//////////////////////////////////////////////////

// 🔧 POST

//////////////////////////////////////////////////

//////////////////////////////////////////////////
// * 특정 채팅방 참여하기 *
// 📭 REQUEST
/**
 * @interface PostParticipateChatAPI
 * 특정 채팅방 참여하기 Request
 */
export interface PostParticipateChatAPI {
  accessToken: string;
  postData: {
    user_id: string;
    room_id: string;
  };
}
// 📩 RESPONSE
/**
 * @interface PostParticipateChatAPIResponse
 * 특정 채팅방 참여하기 Response
 */
export interface PostParticipateChatAPIResponse {
  room_id: string;
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// * 메세지 보내기 *
// 📭 REQUEST
/**
 * @interface PostChatMessageAPI
 * 메세지 보내기 Request
 */
export interface PostChatMessageAPI {
  accessToken: string;
  postData: {
    user_id: string;
    room_id: string;
    message: string;
  };
}
// 📩 RESPONSE
/**
 * @type PostChatMessageAPIResponse
 * 메세지 보내기 Response
 */
export type PostChatMessageAPIResponse = boolean;
//////////////////////////////////////////////////

// 📝 PUT
//////////////////////////////////////////////////
// * 특정 채팅방 나가기 *
// 📭 REQUEST
/**
 * @interface PutLeftChatAPI
 * 특정 채팅방 나가기 Request
 */
export interface PutLeftChatAPI {
  accessToken: string;
  putData: {
    user_id: string;
    room_id: string;
  };
}
// 📩 RESPONSE
/**
 * @type PutLeftChatAPIResponse
 * 특정 채팅방 나가기 Response
 */
export type PutLeftChatAPIResponse = boolean;
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// * 채팅방 이름 수정 *
// 📭 REQUEST
/**
 * @interface PutRenameChatTitle
 * 채팅방 이름 수정 Request
 */
export interface PutRenameChatTitle {
  accessToken: string;
  putData: {
    name: string;
    post_id: number;
  };
}
// 📩 RESPONSE
/**
 * @interface PutRenameChatTitleResponse
 * 채팅방 이름 수정 Response
 */
export interface PutRenameChatTitleResponse {
  id: string;
  name: string;
  post_id: number;
}
//////////////////////////////////////////////////
// 🗑 DELETE

//////////////////////////////////////////////////
// * 채팅방 삭제하기 *
// 📭 REQUEST
/**
 * @interface DeleteChatRoom
 * 채팅방 삭제하기 Request
 */
export interface DeleteChatRoom {
  accessToken: string;
  roomId: number;
}
// 📩 RESPONSE
/**
 * @type DeleteChatRoomResponse
 * 채팅방 삭제하기 Response
 */
export type DeleteChatRoomResponse = boolean;
//////////////////////////////////////////////////
