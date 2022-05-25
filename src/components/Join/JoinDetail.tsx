import { css } from '@emotion/react';
import { MdOutlinePlace as PlaceIcon } from 'react-icons/md';
import { BiCategory as CategoryIcon } from 'react-icons/bi';
import { IoPeopleCircle as People, IoTimeOutline as Time } from 'react-icons/io5';
import { FaMoneyCheck as CardIcon } from 'react-icons/fa';
import colors from '@/constants/colors';
import Button from '../Button';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

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
  categoryName: string;
  people: {
    current: number;
    total: number;
  };
  time: {
    post: number;
    left: number;
  };
  payment: number;
}

export default function JoinDetail({ shopName, schoolName, categoryName, people, time, payment }: Props) {
  const [currentTime] = useState(dayjs(time.post).format('a hh : mm'));
  const [timeLeft, setTimeLeft] = useState(dayjs(time.left).format('a hh : mm'));

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(dayjs(time.left).subtract(1, 'm').format('a hh : mm'));
    }, 1000 * 60);
  }, []);

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;
          background-color: ${colors.grey100};
          border-radius: 8px;
          padding: 2rem;
          margin-top: 10rem;
          box-shadow: 2px 2px 2px 2px ${colors.grey300};
        `}
      >
        <h1
          css={css`
            font-size: 2rem;
            margin-bottom: 1rem;
          `}
        >
          {shopName}
        </h1>
        <span css={spanStyle}>
          <PlaceIcon css={iconStyle} />
          {schoolName}
        </span>
        <span css={spanStyle}>
          <CategoryIcon css={iconStyle} />
          {categoryName}
        </span>
        <ul css={ulStyle}>
          <People css={iconStyle} />
          <span css={eachSpanStyle}>{people.total}명</span>
          <span css={eachSpanStyle}>현재 {people.current}명</span>
        </ul>
        <ul css={ulStyle}>
          <Time css={iconStyle} />
          <span css={eachSpanStyle}>{currentTime}</span>
          <span css={eachSpanStyle}>{timeLeft} 남음</span>
        </ul>
        <ul css={ulStyle}>
          <CardIcon css={iconStyle} />
          <span css={eachSpanStyle}>총 {payment}원</span>
          <span css={eachSpanStyle}>인당 {Math.round(payment / people.total)}원 예상</span>
        </ul>
        <Button
          css={css`
            display: flex;
            align-self: flex-end;
            margin: 0;
            margin-top: 2rem;
          `}
          buttonId="join-button"
          width={20}
          height={3}
          fontSize={1.2}
        >
          참여하기
        </Button>
      </div>
    </>
  );
}
