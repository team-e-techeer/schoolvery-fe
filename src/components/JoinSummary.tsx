import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { IoPeopleCircle as People, IoTimeOutline as Time } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Button from './Button';
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

export default function JoinSummary({ title, people, time }: Props) {
  return (
    <Link
      to={`${title}`}
      css={css`
        display: block;
        width: 90%;
        margin: 0 auto;
        cursor: pointer;
        padding: 1rem;
        border-bottom: 1px solid ${colors.mainColor};
        :hover {
          background-color: ${colors.orange100};
        }
      `}
    >
      <span
        css={css`
          font-size: 1.5rem;
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
        <div css={[wrapFlex, { justifyContent: 'center' }]}>
          <span css={[spanStyle]}>{time.left} 남음</span>
        </div>
        <div css={wrapFlex}>
          <Button height={2.5} buttonId="hi">
            목록으로 돌아가기
          </Button>
        </div>
      </div>
    </Link>
  );
}
