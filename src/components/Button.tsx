import type { ButtonHTMLAttributes } from 'react';

import { css } from '@emotion/react';
import colors from '../constants/colors';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  buttonId: string;
}

export default function Button(props: Props) {
  const { width = 100, children, buttonId, ...rest } = props;

  return (
    <button
      id={buttonId}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${width ? `${width}%` : '100%'};
        margin: auto;
        height: 56px;
        border: 0 solid transparent;
        border-radius: 0.7rem;
        background-color: ${colors.mainColor};
        color: ${colors.white};
        font-size: 17px;
        font-weight: 600;
        white-space: nowrap;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
        &:focus {
          outline: none;
        }
        &:disabled {
          opacity: 0.26;
          cursor: not-allowed;
        }
        &:active {
          background-color: ${colors.orange800};
        }
      `}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
}
