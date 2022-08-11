import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { KeyboardEvent, RefObject } from 'react';
import { IoIosMail } from 'react-icons/io';

const iconWrapper = css`
  display: flex;
  flex: 0.15;
  justify-content: center;
  align-items: center;
`;

interface Props {
  sendMessage: (e: React.FormEvent) => Promise<void>;
  formValue: string;
  setFormValue: (value: React.SetStateAction<string>) => void;
  textRef: RefObject<HTMLTextAreaElement>;
  onCheckChangeText: (e: KeyboardEvent<HTMLTextAreaElement>) => any;
}

export default function ChatInput({ sendMessage, formValue, setFormValue, textRef, onCheckChangeText }: Props) {
  return (
    <>
      <form
        onSubmit={sendMessage}
        css={css`
          display: flex;
          justify-content: center;
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: ${colors.subColor};
          padding: 2rem 0;
        `}
      >
        <div
          css={css`
            flex: 0.05;
          `}
        />
        <textarea
          value={formValue}
          ref={textRef}
          onChange={e => setFormValue(e.target.value)}
          onKeyDown={e => onCheckChangeText(e)}
          css={css`
            display: flex;
            justify-items: center;
            flex: 1;
            border-radius: 1.3rem;
            padding: 1.5rem;
            outline: none;
            resize: none;
          `}
          placeholder="메세지를 입력해주세요"
        />
        <button type="submit" css={iconWrapper}>
          <IoIosMail color={colors.white} size={25} />
        </button>
      </form>
    </>
  );
}
