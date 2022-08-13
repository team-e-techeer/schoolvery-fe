import Header from '@/components/Header/Header';
import { LeftIconWrapper, RightIconWrapper } from '@/GlobalStyle';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { BiCategory as RightIcon } from 'react-icons/bi';
import ChatInput from '@/components/Input/ChatInput';

import { useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';

import { Message } from '@/interface/firebaseChat';

import { onValue, push, ref, set } from 'firebase/database';
import { faker } from '@faker-js/faker';
// eslint-disable-next-line import/extensions
import { AvatarBlock, AvatarTextBlock, EachBlock, TextBlock } from './ChatPage.styles';
import { db } from './../../../firebase';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { debounce } from 'lodash';
dayjs.locale('ko');
interface LinkParam {
  roomId: string;
}

export default function ChatRoomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { roomId } = location.state as LinkParam;
  const navigate = useNavigate();
  const toggleDrawer = useCallback(() => setIsOpen(prevState => !prevState), []);

  const userInfo = useRecoilValue(userState);

  const [formValue, setFormValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, `chats/${roomId}`), snapshot => {
      const data = snapshot.val();
      setMessages([]);
      for (const item in data) {
        setMessages(prev => [...prev, ...[data[item]]]);
      }
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const chatListRef = ref(db, `chats/${roomId}`);
    const newChatRef = push(chatListRef);
    const time = dayjs().toJSON();
    set(newChatRef, {
      nickname: userInfo.nickname,
      text: formValue,
      imgUrl: faker.image.avatar(),
      time,
    });

    setFormValue('');
  };
  const sendMessageWithDebounce = async (text: string) => {
    const chatListRef = ref(db, `chats/${roomId}`);
    const newChatRef = push(chatListRef);
    const time = dayjs().toJSON();
    set(newChatRef, {
      nickname: userInfo.nickname,
      text,
      imgUrl: userInfo.profileImageUrl,
      time,
    });

    setFormValue('');
  };

  const emailRef = useRef<HTMLDivElement>(null); // 최하단 스크롤을 위한 ref
  const textRef = useRef<HTMLTextAreaElement>(null); // textarea ref 이용
  // 최하단 스크롤
  const scrollToBottom = useCallback(() => {
    emailRef.current?.scrollIntoView({ block: 'start' });
  }, [emailRef]);

  // shift + enter 중복 전송 방지를 위한
  // debounce를 이용한 최적화
  // 단순 \n 개행의 경우
  // 초기화 시키고 서버로 요청 안하도록 설정
  const submitWithDebounce = debounce(() => {
    if (textRef.current?.value === '\n') {
      textRef.current.value = '';
      setFormValue('');
      return;
    }
    if (textRef.current) {
      sendMessageWithDebounce(textRef.current.value);
      textRef.current.value = '';
    }

    setFormValue('');
  }, 100);

  // shift + enter 감지시 submitWithDebounce 호출
  const onCheckChangeText = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && e.shiftKey && submitWithDebounce(),
    [textRef]
  );

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Header
        title="hi"
        Left={() => (
          <div css={LeftIconWrapper} data-testid="btn-back" onClick={() => navigate('/')}>
            <button>
              <LeftIcon size={30} color="#fff" />
            </button>
          </div>
        )}
        Right={() => (
          <div css={RightIconWrapper} onClick={() => toggleDrawer()}>
            <button>
              <RightIcon size={33} color="#fff" />
            </button>
          </div>
        )}
      />
      <div ref={emailRef}>
        {messages.map(msg => (
          <EachBlock key={msg.time}>
            {msg.nickname !== userInfo.nickname && (
              <AvatarBlock fromUser={true}>
                <img alt="avatar" src={msg.imgUrl} />
                <AvatarTextBlock>
                  <p>{msg.nickname}</p>
                  <p>{msg.text}</p>
                </AvatarTextBlock>
              </AvatarBlock>
            )}
            {msg.nickname === userInfo.nickname && (
              <TextBlock>
                <p>{msg.text}</p>
              </TextBlock>
            )}
          </EachBlock>
        ))}
      </div>
      <ChatInput
        onCheckChangeText={onCheckChangeText}
        textRef={textRef}
        sendMessage={sendMessage}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div>hello</div>
      </Drawer>
    </>
  );
}
