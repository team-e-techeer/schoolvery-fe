import { categoryListState } from '@/atoms/list/categoryListState';
import { userState } from '@/atoms/user/userState';
import Header from '@/components/Header/Header';
import JoinSummary from '@/components/Join/JoinSummary';
import ModalCategory from '@/components/Modal/ModalCategory';

import colors from '@/constants/colors';
import { useGetPostListWithCategoryQuery } from '@/hooks/query/list/useGetListWithCategory';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { BiCategory as RightIcon } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
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
  margin-bottom: 1rem;
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

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useTimer } from '@/hooks/useTimer';
dayjs.locale('ko');

export default function SearchWithCategory() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const time = useTimer();
  useEffect(() => {
    setTitle(decodeURI(pathname.split('/')[2]));
  }, [pathname]);

  const userInfo = useRecoilValue(userState);
  const categoryList = useRecoilValue(categoryListState);
  const postListWithCategory = useGetPostListWithCategoryQuery({
    schoolId: userInfo.schoolId,
    accessToken: userInfo.accessToken,
    categoryId: categoryList.find(category => category.name === title)?.id as string,
  });

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
          <InputUnderTextRight>개수 : {postListWithCategory.data?.dtoList.length}개</InputUnderTextRight>
        </InputUnderBlock>
        {postListWithCategory.data?.dtoList.map(list => (
          <JoinSummary
            item={list}
            key={list.id}
            title={list.title}
            time={{
              left: dayjs(dayjs(time).diff(list.deadline)).format('h시간 mm분'),
              post: dayjs(list.deadline).format('A hh:mm'),
            }}
            people={{ current: 1, total: list.peopleNum }}
          />
        ))}
      </>

      <ModalCategory visible={modalVisible} setModalVisible={setModalVisible} isNavigating={true} />
    </>
  );
}
