import type { ButtonHTMLAttributes } from 'react';

import { css } from '@emotion/react';
import colors from '../constants/colors';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  buttonId: string;
  fontSize?: number;
  buttonColor?: string;
  activeButtonColor?: string;
}

export default function Button(props: Props) {
  const {
    width = 100,
    height = 5,
    fontSize = 1.5,
    children,
    buttonId,
    buttonColor,
    activeButtonColor,
    ...rest
  } = props;

  return (
    <button
      id={buttonId}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${width}%;
        margin: 0 auto;
        height: ${height}rem;
        border: 0 solid transparent;
        border-radius: 0.7rem;
        background-color: ${buttonColor ? buttonColor : colors.mainColor};
        color: ${colors.white};
        font-size: ${fontSize}rem;
        font-weight: 600;
        white-space: nowrap;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        transition: color 0.1s linear-out, background-color 0.1s linear-out;
        &:focus {
          outline: none;
        }
        &:disabled {
          opacity: 0.26;
          cursor: not-allowed;
        }
        &:active {
          background-color: ${activeButtonColor ? activeButtonColor : colors.orange400};
        }
      `}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
}
