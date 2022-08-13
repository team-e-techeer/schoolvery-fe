import BottomNavigation from '@/components/BottomNavigation';
import ChatList from '@/components/Chat/ChatList';
import Header from '@/components/Header/Header';
import Chicken from '../../assets/img/chicken.png';
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
            imgPath={Chicken}
            storeName={chat.name}
            lastMessage="ww8007 님이 참여 하셨습니다"
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
