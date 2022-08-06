import colors from '@/constants/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
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
  isEdit: boolean;
  deletePostMutation?: UseMutationResult<any, unknown, void, unknown>;
}

export function WritingFooter({ isEdit, deletePostMutation }: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (deletePostMutation?.isSuccess) navigate(-1);
  }, [deletePostMutation?.isSuccess]);
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
            onClick={() => deletePostMutation?.mutate()}
            css={css`
              margin-right: 2rem;
            `}
            buttonId="hi"
            buttonColor={colors.orange500}
          >
            삭제하기
          </Button>
          <Button type="submit" buttonId="put-writing">
            수정하기
          </Button>
        </>
      )}
      {!isEdit && (
        <>
          <Button type="submit" buttonId="submit-writing">
            작성하기
          </Button>
        </>
      )}
    </div>
  );
}
