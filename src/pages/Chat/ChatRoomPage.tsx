import Header from '@/components/Header/Header';
import { LeftIconWrapper, RightIconWrapper } from '@/GlobalStyle';
import { useCallback, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { BiCategory as RightIcon } from 'react-icons/bi';
import ChatInput from '@/components/Input/ChatInput';
export default function ChatRoomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = useCallback(() => setIsOpen(prevState => !prevState), []);
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
      <ChatInput />
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div>hello</div>
      </Drawer>
    </>
  );
}
