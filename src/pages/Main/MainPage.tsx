import BottomNavigation from '@/components/BottomNavigation';
import Category from '@/components/Category/Category';
import SearchInput from '@/components/Input/SearchInput';
import JoinSummary from '@/components/Join/JoinSummary';
import Header from '../../components/Header/Header';
import Ch from '../../assets/img/ch.png';
import chicken from '../../assets/img/chicken.png';
import Jp from '../../assets/img/jp.png';
import Ko from '../../assets/img/ko.png';
import Pizza from '../../assets/img/pizza.png';
import All from '../../assets/img/all.png';
import Asian from '../../assets/img/asian.png';
import Hamburger from '../../assets/img/hamburger.png';
import koreanFood from '../../assets/img/koreanFood.png';
import coffee from '../../assets/img/coffee.png';
import { useEffect, useState } from 'react';
import type { ImgInfo } from '../../components/Category/Category';
import { IoMdNotifications as NotificationIcon } from 'react-icons/io';
// eslint-disable-next-line import/extensions
import colors from '@/constants/colors';
import { RightIconWrapper } from '@/GlobalStyle';
import { useNavigate } from 'react-router-dom';
import { useGetPostListQuery } from '@/hooks/query/list/useGetPostList';
import { useGetUserInfo } from '@/hooks/query/user/useGetUserInfo';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';
import { useGetCategoryListQuery } from '@/hooks/query/list/useGetCategoryList';
import { UseQueryResult } from 'react-query';
import { CategoryListAPIResponse } from '@/interface/list';
import { categoryListState } from '@/atoms/list/categoryListState';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

import { useTimer } from '@/hooks/useTimer';
import { css } from '@emotion/react';
import { useGetSchoolListQuery } from '@/hooks/query/list/useGetSchoolList';
import { schoolListState } from '@/atoms/list/schoolList';

function MainPage() {
  const navigate = useNavigate();
  const [imageInfo] = useState<ImgInfo[]>([
    { path: '/category/전체', src: All, name: '전체' },
    { path: '/category/한식', src: Ko, name: '한식' },
    { path: '/category/중식', src: Ch, name: '중식' },
    { path: '/category/일식', src: Jp, name: '일식' },
    { path: '/category/아시안', src: Asian, name: '아시안' },
    { path: '/category/치킨', src: chicken, name: '치킨' },
    { path: '/category/피자', src: Pizza, name: '피자' },
    { path: '/category/햄버거', src: Hamburger, name: '햄버거' },
    { path: '/category/분식', src: koreanFood, name: '분식' },
    { path: '/category/커피', src: coffee, name: '커피' },
  ]);
  const user = useRecoilValue(userState);
  const time = useTimer();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);
  const [_, setSchoolList] = useRecoilState(schoolListState);

  useEffect(() => {
    if (!user.accessToken) navigate('/login');
  }, [user]);

  const categoryListResponse = useGetCategoryListQuery({ page: 1, size: 10 });

  const userQueryInfo = useGetUserInfo(user.accessToken);

  const postList = useGetPostListQuery({ schoolId: userInfo.schoolId, accessToken: user.accessToken });

  const schoolListQuery = useGetSchoolListQuery();

  useEffect(() => {
    schoolListQuery.data && setSchoolList(schoolListQuery.data);
  }, [schoolListQuery.data]);

  useEffect(() => {
    if (userQueryInfo.data) {
      const { id, modDate, name, nickname, phoneNum, profileImageUrl, regDate, schoolId } = userQueryInfo.data;
      setUserInfo(prev => ({ ...prev, id, modDate, name, nickname, phoneNum, profileImageUrl, regDate, schoolId }));
    }
  }, [userQueryInfo.data]);

  useEffect(() => {
    categoryListResponse.data?.dtoList && setCategoryList(categoryListResponse.data.dtoList);
  }, [categoryListResponse.data?.dtoList]);

  const [schoolTitle, setSchoolTitle] = useState('');

  useEffect(() => {
    const title = Array.isArray(schoolListQuery.data)
      ? schoolListQuery?.data.find(school => school.schoolId === userInfo.schoolId)?.schoolName
      : '';
    title && setSchoolTitle(title);
  }, [schoolListQuery, schoolListQuery, userInfo]);

  return (
    <>
      <Header
        title={schoolTitle || ''}
        Right={() => (
          <>
            <div css={RightIconWrapper}>
              <button onClick={() => navigate('/notification')}>
                <NotificationIcon color={colors.white} size={25} />
              </button>
            </div>
          </>
        )}
      />
      <div
        css={css`
          margin: auto;
          @media (min-width: 500px) {
            width: 90%;
          }
          @media (min-width: 1024px) {
            width: 50%;
          }
        `}
      >
        <SearchInput isLinking={true} />
        <Category imageInfo={imageInfo} />
        <div
          css={css`
            overflow-y: auto;
            position: relative;

            height: 60rem;
          `}
        >
          {postList.data?.dtoList.map(list => (
            <JoinSummary
              item={list}
              key={list.id}
              title={list.title}
              left={
                Math.floor(dayjs(list.deadline).diff(time, 'minute') / 60) +
                '시간 ' +
                (dayjs(list.deadline).diff(time, 'minute') % 60) +
                '분'
              }
              time={{
                left:
                  Math.floor(dayjs(list.deadline).diff(time, 'minute') / 60) +
                  '시간 ' +
                  (dayjs(list.deadline).diff(time, 'minute') % 60) +
                  '분',
                post: dayjs(list.deadline).format('A hh:mm'),
              }}
              people={{ current: 1, total: list.peopleNum }}
            />
          ))}
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}

export default MainPage;
