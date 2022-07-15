import colors from '@/constants/colors';
import { css } from '@emotion/react';

interface Props {
  storeName: string;
  description: string;
}

export default function AlarmList({ storeName, description }: Props) {
  return (
    <>
      <div
        css={css`
          display: flex;
          width: 90%;
          margin: 0 auto;
          box-shadow: ${colors.grey300} 6px 2px 16px 0px, ${colors.grey100} -6px -2px 16px 0px;
          padding: 2rem;
          border-radius: 0.7rem;
          margin-top: 3rem;
        `}
      >
        <div
          css={css`
            display: flex;
            flex: 0.7;
            justify-content: left;
          `}
        >
          <span
            css={css`
              display: flex;
              text-align: center;
              justify-content: center;
              align-content: center;
            `}
          >
            {storeName}
          </span>
        </div>
        <div
          css={css`
            display: flex;
            flex: 1;
          `}
        >
          <span css={css``}>{description}</span>
        </div>
      </div>
    </>
  );
}
