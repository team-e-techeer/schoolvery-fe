import { css } from '@emotion/react';
import { BiCategory as CategoryIcon } from 'react-icons/bi';
import { IoPeopleCircle as People, IoTimeOutline as Time } from 'react-icons/io5';
import { FaMoneyCheck as CardIcon } from 'react-icons/fa';
import colors from '@/constants/colors';
import Button from '../Button';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryListState } from '@/atoms/list/categoryListState';
import { Link } from 'react-router-dom';
import { watchingPostState } from '@/atoms/user/watchingPostState';
import { Post } from '@/interface/list';

dayjs.locale('ko');

const spanStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

const ulStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

const eachSpanStyle = css`
  display: flex;
  flex: 1;
  font-size: 1.3rem;
  :nth-of-type(2) {
    color: ${colors.blue500};
  }
`;

const iconStyle = css`
  margin-right: 2rem;
  font-size: 2rem;
`;

interface Props {
  shopName: string;
  schoolName: string;
  categoryId: string;
  people: {
    current: number;
    total: number;
  };
  time: {
    post: string;
    left: string;
  };
  payment: number;
  id: string;
  item: Post;
}

export default function MyPostDetail({ shopName, id, categoryId, people, time, payment, item }: Props) {
  const [categoryName, setCategoryName] = useState('');
  const categoryList = useRecoilValue(categoryListState);
  const [_, setWatchingPostState] = useRecoilState(watchingPostState);
  useEffect(() => {
    setCategoryName(categoryList.find(category => category.id === categoryId)?.name as string);
  }, [categoryList, categoryId]);

  return (
    <>
      <Link
        to={`/writing/?id=${id}`}
        onClick={() => setWatchingPostState(item)}
        css={css`
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;
          background-color: ${colors.grey100};
          border-radius: 8px;
          padding: 2rem;
          margin-top: 2rem;
          box-shadow: 2px 2px 2px 2px ${colors.grey200};
          -webkit-font-smoothing: antialiased;
          transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
          &:active {
            background-color: ${colors.grey200};
            box-shadow: 2px 2px 2px 2px ${colors.grey200};
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-content: center;
            align-items: center;
          `}
        >
          <h1
            css={css`
              display: flex;
              flex: 3;
              align-content: center;
              font-size: 2rem;
              font-weight: 600;
            `}
          >
            {shopName}
          </h1>
          <Button
            css={css`
              display: flex;
              flex: 1;
            `}
            buttonId="edit-button"
            width={20}
            height={3}
            fontSize={1.3}
          >
            수정하기
          </Button>
        </div>

        <span css={spanStyle}>
          <CategoryIcon color={colors.mainColor} css={iconStyle} />
          {categoryName}
        </span>
        <ul css={ulStyle}>
          <People color={colors.mainColor} css={iconStyle} />
          <span css={eachSpanStyle}>{people.total}명</span>
        </ul>
        <ul css={ulStyle}>
          <Time color={colors.mainColor} css={iconStyle} />
          <span css={eachSpanStyle}>{time.post}</span>
        </ul>
        <ul css={ulStyle}>
          <CardIcon color={colors.mainColor} css={iconStyle} />
          <span css={eachSpanStyle}>총 {payment}원</span>
        </ul>
      </Link>
    </>
  );
}
