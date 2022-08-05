import colors from '@/constants/colors';
import { css } from '@emotion/react';
import Button from '../Button';

export function ProfileFooter(){
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        margin-top: 3rem;
      `}
    >
        <>
          <Button css={css`
              margin-right: 2rem;
            `}
            buttonId="hi"
            buttonColor={colors.orange500}
          >
            회원 탈퇴하기
          </Button>
          <Button buttonId="good">회원 수정하기</Button>
        </>
    </div>
  );
}
