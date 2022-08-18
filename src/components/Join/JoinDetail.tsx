import { css } from '@emotion/react';
import { BiCategory as CategoryIcon } from 'react-icons/bi';
import { IoPeopleCircle as People, IoTimeOutline as Time } from 'react-icons/io5';
import { FaMoneyCheck as CardIcon } from 'react-icons/fa';
import colors from '@/constants/colors';
import Button from '../Button';
import { useRecoilValue } from 'recoil';
import { watchingPostState } from '@/atoms/user/watchingPostState';
import { useTimer } from '@/hooks/useTimer';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useGetChatInfoWithPostId } from '@/hooks/query/chat/GET/useGetChatInfoWithPostId';
import { userState } from '@/atoms/user/userState';
import { useCallback, useEffect } from 'react';
import { usePostParticipateChat } from '@/hooks/query/chat/POST/usePostParticipateChat';
import { useNavigate } from 'react-router-dom';
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
  color: ${colors.mainColor};
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
  const { accessToken, id } = useRecoilValue(userState);
  const watchingPost = useRecoilValue(watchingPostState);
  const chatPageInfo = useGetChatInfoWithPostId({ accessToken, postId: watchingPost.id });

  const enterChatMutate = usePostParticipateChat();
  const onClickEnter = useCallback(() => {
    chatPageInfo.data &&
      enterChatMutate.mutate({
        accessToken,
        postData: { room_id: chatPageInfo.data?.id, user_id: id, name: watchingPost.title },
      });
  }, [chatPageInfo.data, userState]);
  const navigate = useNavigate();

  useEffect(() => {
    if (enterChatMutate.isSuccess && enterChatMutate.data?.room_id) {
      navigate(`/chat/?room=${enterChatMutate.data?.room_id}`, {
        state: { roomId: enterChatMutate.data.room_id, storeName: watchingPost.title },
        replace: true,
      });
    }
  }, [enterChatMutate.isSuccess, enterChatMutate.data?.room_id]);

  return (
    <>
      <div
        onClick={onClickEnter}
        css={css`
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;
          background-color: ${colors.white};
          border-radius: 8px;
          padding: 2rem;
          margin-top: 10rem;
          box-shadow: 2px 2px 2px 2px ${colors.grey300};
          -webkit-font-smoothing: antialiased;
          transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
          &:active {
            background-color: ${colors.grey300};
            box-shadow: 2px 2px 2px 2px ${colors.grey200};
          }
        `}
      >
        <h1
          css={css`
            display: inline-block;
            width: max-content;
            font-size: 2rem;
            margin-bottom: 1rem;
            background-color: ${colors.subColor};
            padding: 1rem;
            border-radius: 0.7rem;
            color: ${colors.white};
          `}
        >
          {watchingPost.store}
        </h1>

        <span css={spanStyle}>
          <CategoryIcon css={iconStyle} />
          {categoryName}
        </span>
        <ul css={ulStyle}>
          <People css={iconStyle} />
          <span css={eachSpanStyle}>{watchingPost.peopleNum}명</span>
          <span css={eachSpanStyle}>현재 {people.current}명</span>
        </ul>
        <ul css={ulStyle}>
          <Time css={iconStyle} />
          <span css={eachSpanStyle}>{dayjs(watchingPost.deadline).format('A hh : mm')}</span>
          <span css={eachSpanStyle}>{watchingPost.left} 남음</span>
        </ul>
        <ul css={ulStyle}>
          <CardIcon css={iconStyle} />
          <span css={eachSpanStyle}>총 {watchingPost.deliveryFee}원</span>
          <span css={eachSpanStyle}>인당 {Math.round(watchingPost.deliveryFee / watchingPost.peopleNum)}원 예상</span>
        </ul>
        {watchingPost.content && (
          <div
            css={css`
              width: 100%;
              background-color: #eae9f8;
              margin-top: 2rem;
              border-radius: 0.7rem;
              padding: 2rem;
            `}
          >
            <p
              css={css`
                font-size: 1.3rem;
                color: ${colors.black};
              `}
            >
              {watchingPost.content}
            </p>
          </div>
        )}

        <Button
          onClick={onClickEnter}
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
