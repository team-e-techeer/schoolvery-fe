import colors from '@/constants/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '../Button';

export const Post = styled.button`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1.3rem;
  border-radius: 0.7rem;
  width: 100%;
  padding: 1.3rem;
  color: #ffffff;
  background-color: ${colors.mainColor};
`;

interface Props {
  isEdit: boolean;
}

export function WritingFooter({ isEdit }: Props) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        margin-top: 3rem;
      `}
    >
      {isEdit && (
        <>
          <Button
            css={css`
              margin-right: 2rem;
            `}
            buttonId="hi"
            buttonColor={colors.orange500}
          >
            삭제하기
          </Button>
          <Button buttonId="good">수정하기</Button>
        </>
      )}
      {!isEdit && (
        <>
          <Button type="submit" buttonId="good">
            작성하기
          </Button>
        </>
      )}
    </div>
  );
}
