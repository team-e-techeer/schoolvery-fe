import BottomNavigation from '@/components/BottomNavigation';
import ChatList from '@/components/Chat/ChatList';
import Header from '@/components/Header/Header';
import Korean from '../../assets/img/ko.png';
import { userState } from '@/atoms/user/userState';
import { useRecoilValue } from 'recoil';
import { useGetMyAllChatList } from '@/hooks/query/chat/GET/useGetMyAllChatList';

export default function ChatPage() {
  const userInfo = useRecoilValue(userState);
  const chatList = useGetMyAllChatList({ accessToken: userInfo.accessToken, userId: userInfo.id });

  return (
    <>
      <Header title="채팅목록" />
      {chatList.data &&
        chatList.data.map(chat => (
          <ChatList
            key={chat.id}
            imgPath={Korean}
            storeName={'hi'}
            lastMessage="h"
            time={Date.now()}
            newMessageCount={1}
            chatURL="BBQ"
            roomId={chat.room_id}
          />
        ))}
      <BottomNavigation />
    </>
  );
}
