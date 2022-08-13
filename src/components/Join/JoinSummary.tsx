import { watchingPostState } from '@/atoms/user/watchingPostState';
import colors from '@/constants/colors';
import { JoinDetail, Post } from '@/interface/list';
import { css } from '@emotion/react';
import { IoPeopleCircle as People, IoTimeOutline as Time } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from '../Button';

interface Props {
  title: string;
  people: {
    current: number;
    total: number;
  };
  time: {
    post: string;
    left: string;
  };
  item: Post;
  left: string;
}

const iconSize = 25;

const wrapFlex = css`
  display: flex;
  flex: 1;
  height: 100%;
`;

const spanStyle = css`
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-self: center;
  text-align: center;
  align-self: center;
`;

export default function JoinSummary({ title, people, time, item, left }: Props) {
  const [_, setWatchingPostState] = useRecoilState(watchingPostState);
  return (
    <Link
      to={`/detail/${title}`}
      onClick={() => setWatchingPostState({ ...item, left: left })}
      css={css`
        display: block;
        width: 90%;
        margin: 0 auto;
        cursor: pointer;
        padding: 1rem;
        border-bottom: 1px solid ${colors.mainColor};
        transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
        :hover {
          background-color: ${colors.grey100};
        }
        &:active {
          background-color: ${colors.grey200};
          box-shadow: 2px 2px 2px 2px ${colors.grey200};
        }
      `}
    >
      <span
        css={css`
          font-size: 1.7rem;
        `}
      >
        {title}
      </span>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;
          margin-top: 1rem;
        `}
      >
        <div css={wrapFlex}>
          <People size={iconSize} color={colors.mainColor} />
          <span css={spanStyle}>
            {people.current} / {people.total}명
          </span>
        </div>
        <div css={wrapFlex}>
          <Time size={iconSize} color={colors.mainColor} />
          <span css={spanStyle}>{time.post}</span>
        </div>
        <div css={[wrapFlex, { justifyContent: 'center', color: colors.red500 }]}>
          <span css={[spanStyle]}>{time.left} 남음</span>
        </div>
        <div css={wrapFlex}>
          <Button height={2.5} buttonId="hi">
            참여하기
          </Button>
        </div>
      </div>
    </Link>
  );
}
