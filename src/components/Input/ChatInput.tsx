import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { IoIosMail } from 'react-icons/io';

const iconWrapper = css`
  display: flex;
  flex: 0.1;
  justify-content: center;
  align-items: center;
`;

export default function ChatInput() {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: center;
          position: fixed;
          bottom: 0;
          width: 100%;
          border: 1px solid ${colors.black};
          padding: 2rem 0;
        `}
      >
        <textarea
          css={css`
            display: flex;
            justify-items: center;
            flex: 1;
            border: 1px solid black;
            outline: none;
            resize: none;
          `}
          placeholder="메세지를 입력해주세요"
        ></textarea>
        <div css={iconWrapper}>
          <IoIosMail size={25} />
        </div>
      </div>
    </>
  );
}
