import colors from '@/constants/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router-dom';
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
  deleteProfileMutation?: UseMutationResult<any, unknown, void, unknown>;
}

export function ProfileFooter({deleteProfileMutation }: Props) {
  const navigate = useNavigate();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        margin-top: 3rem;
      `}
    >
        <>
          <Button
            onClick={() => {deleteProfileMutation?.mutate()
            navigate('/login')}}
            css={css`
              margin-right: 2rem;
            `}
            buttonId="hi"
            buttonColor={colors.orange500}
          >
            회원 탈퇴하기
          </Button>
          <Button type="submit" buttonId="put-writing">
            회원 수정하기
          </Button>
        </>

    </div>
  );
}
