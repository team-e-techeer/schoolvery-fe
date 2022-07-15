import BottomNavigation from '@/components/BottomNavigation';
import ChatList from '@/components/Chat/ChatList';
import Header from '@/components/Header/Header';
import Korean from '../../assets/img/ko.png';
export default function ChatPage() {
  return (
    <>
      <Header title="채팅목록" />
      <ChatList
        imgPath={Korean}
        storeName="BBQ 치킨"
        lastMessage="5시에 주문할게요!"
        time={Date.now()}
        newMessageCount={3}
        chatURL="BBQ"
      />
      <ChatList
        imgPath={Korean}
        storeName="BBQ"
        lastMessage="5시에 주문할게요! 각자 12000원 씩 보내주시면 됩니다."
        time={Date.now()}
        newMessageCount={3}
        chatURL="BBQ"
      />
      <BottomNavigation />
    </>
  );
}
