import { userState } from '@/atoms/user/userState';
import colors from '@/constants/colors';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

dayjs.locale('ko');
interface Props {
  imgPath: string;
  storeName: string;
  lastMessage: string;
  newMessageCount: number;
  time: number;
  chatURL: string;
  roomId: string;
}

export default function ChatList({ imgPath, storeName, lastMessage, newMessageCount, time, chatURL, roomId }: Props) {
  const userInfo = useRecoilValue(userState);
  return (
    <>
      <Link
        css={css`
          display: flex;
          width: 90%;
          margin: 0 auto;
          padding: 1rem;
        `}
        to={`/chat/?room=${roomId}`}
        state={{ roomId, storeName }}
      >
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <img
            css={css`
              width: 5rem;
              height: 5rem;
              border-radius: 50%;
            `}
            src={userInfo.profileImageUrl}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex: 3 3;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: flex;
              flex: 1;
            `}
          >
            <h2
              css={css`
                display: flex;
                flex: 1;
                margin-left: 1rem;
                font-size: 1.3rem;
                align-self: center;
              `}
            >
              {storeName}
            </h2>
            <span
              css={css`
                display: flex;
                font-size: 1rem;
                justify-content: center;
                align-self: center;
              `}
            >
              {dayjs(time).format('A hh : mm')}
            </span>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              /* flex: 1; */
            `}
          >
            <div
              css={css`
                display: flex;
                flex: 4;
                min-width: 0;
              `}
            >
              <h3
                css={css`
                  margin-left: 1rem;
                  font-size: 1.1rem;
                  align-self: center;
                  text-overflow: ellipsis;
                  white-space: pre-line;
                  overflow: hidden;
                  max-lines: 2;
                  -webkit-line-clamp: 2;
                  max-height: 2.3rem;
                `}
              >
                {lastMessage}
              </h3>
            </div>
            <div
              css={css`
                display: flex;
                flex: 1;
                justify-content: flex-end;
              `}
            >
              <span
                css={css`
                  font-size: 1rem;
                  margin-top: 1rem;
                  background-color: ${colors.orange500};
                  color: ${colors.white};
                  width: 2.3rem;
                  height: 2.3rem;
                  border-radius: 50%;
                  text-align: center;
                  line-height: 2.3rem;
                `}
              >
                {newMessageCount}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div
        css={css`
          border-top: 0.1rem solid ${colors.grey400};
        `}
      />
    </>
  );
}
