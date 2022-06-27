import Header from '@/components/Header/Header';
import JoinSummary from '@/components/Join/JoinSummary';
import ModalCategory from '@/components/Modal/ModalCategory';

import colors from '@/constants/colors';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { BiCategory as RightIcon } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2rem;
  .button {
    border: none;
    cursor: pointer;
    padding: 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const RightIconWrapper = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: flex-end;
  margin-right: 2rem;
  .button {
    border: none;
    cursor: pointer;
    padding: 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const InputUnderBlock = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
`;
const InputUnderText = styled.span`
  display: flex;
  flex: 2.5;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  color: ${colors.grey600};
`;
const InputUnderTextRight = styled.span`
  display: flex;
  flex: 2.5;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  color: ${colors.grey600};
  justify-content: flex-end;
`;

export default function SearchWithCategory() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setTitle(decodeURI(pathname.split('/')[2]));
  }, [pathname]);
  return (
    <>
      <Header
        title={title}
        Left={() => (
          <IconWrapper data-testid="btn-back" onClick={() => navigate('/')}>
            <button>
              <LeftIcon size={30} color="#fff" />
            </button>
          </IconWrapper>
        )}
        Right={() => (
          <RightIconWrapper onClick={() => setModalVisible(true)}>
            <button>
              <RightIcon size={33} color="#fff" />
            </button>
          </RightIconWrapper>
        )}
      />
      <>
        <InputUnderBlock>
          <InputUnderText>검색 결과</InputUnderText>
          <InputUnderTextRight>개수 : 30개</InputUnderTextRight>
        </InputUnderBlock>
        <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
        <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
        <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
        <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
      </>

      <ModalCategory visible={modalVisible} setModalVisible={setModalVisible} isNavigating={true} />
    </>
  );
}
