import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import colors from '../../constants/colors';
export interface Props {
  title?: string;
  Left?: () => ReactNode;
  Right?: () => ReactNode;
  secondRight?: () => ReactNode;
}

export default function Header({ title, Left, Right, secondRight }: Props) {
  return (
    <>
      <header
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 6rem;
          background-color: ${colors.mainColor};
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          {Left && Left()}
        </div>
        <div
          css={css`
            flex: 1;
            text-align: center;
          `}
        >
          <h1
            css={css`
              color: #fff;
              font-size: 2rem;
            `}
          >
            {title}
          </h1>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row-reverse;
            flex: 1;
          `}
        >
          <div
            css={css`
              display: flex;
              flex: ${secondRight ? 1 : 0};
              background-color: 'transparent';
              flex-direction: row-reverse;
            `}
          >
            {secondRight && secondRight()}
          </div>
          <div
            css={css`
              display: flex;
              flex: ${Right ? 1 : 0};
              background-color: 'transparent';
              flex-direction: row-reverse;
            `}
          >
            {Right && Right()}
          </div>
        </div>
      </header>
    </>
  );
}
