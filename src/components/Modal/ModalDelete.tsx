import { css } from '@emotion/react';
import colors from '@/constants/colors';
import { useState } from 'react';
import styled from '@emotion/styled';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

interface Props {
  visible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Info {
  name: string;
  select: boolean;
}

const BtnDiv = styled.div`
  display: flex;
  width: 90%;
  margin: 2rem auto;
  border: 1px solid ${colors.grey300};
  border-radius: 8px;
`;

export default function ModalDelete({ visible, setModalVisible }: Props) {
  const navigate = useNavigate();
  const [checkDelete, setCheckDelete] = useState(false);
  const onClick = () => {
    setCheckDelete(true);
  };
  return (
    <>
      <Modal visible={visible} setModalVisible={setModalVisible}>
        <>
          <span
            css={css`
              display: flex;
              font-size: 2rem;
              margin: 1rem;
              margin-left: 10%;
            `}
          >
            글을 삭제하시겠습니까?
          </span>
          <BtnDiv>
            <Button height={5} buttonId="deleteA" style={{ marginRight: 5 }}>
              확인
            </Button>
            <Button height={5} buttonId="deleteB" style={{ marginLeft: 5 }} onClick={onClick}>
              취소
            </Button>
          </BtnDiv>
        </>
      </Modal>
    </>
  );
}
