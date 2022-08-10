import colors from '@/constants/colors';
import { css } from '@emotion/react';
import Button from '../Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';
import { useDeleteUserMutation} from '@/hooks/query/profile/useDeleteUser';

interface Props {
  isEdit: boolean;
  setIsEdit:React.Dispatch<React.SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete:React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProfileFooter({isEdit,setIsEdit,isDelete,setIsDelete}: Props){
  const onEdit = () =>{
    setIsEdit(true);
  }
  const onDelete = () => {
    setIsDelete(true);
  }
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
            onClick={() => setIsDelete}
          >
            회원 탈퇴하기
          </Button>
          <Button buttonId="good"
          onClick={() => setIsEdit}
          >
            회원 수정하기
            </Button>
        </>
    </div>
  );
}
