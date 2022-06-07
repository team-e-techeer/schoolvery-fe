import { css } from '@emotion/react';
import { useCallback, useEffect } from 'react';
import './Modal.css';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

interface Props {
  visible: boolean;
  children: JSX.Element;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ visible, setModalVisible, children }: Props) {
  useEffect(() => {
    visible && onClickModalVisible();
    return () => {};
  }, [visible]);

  const onClickModalVisible = useCallback(() => {
    const $modalContainer = document.querySelector('#modal-container') as HTMLElement;
    $modalContainer.removeAttribute('class');
    $modalContainer.classList.add('one');
    setModalVisible(false);
  }, []);

  const onClickOther = useCallback(() => {
    const modalContainer = document.querySelector('#modal-container') as HTMLElement;
    modalContainer.classList.add('out');
  }, []);

  return (
    <>
      <div id="modal-container">
        <div onClick={onClickOther} className="modal-background">
          <div className="modal">
            <button
              onClick={onClickOther}
              css={css`
                display: flex;
                width: 100%;
                justify-content: right;
              `}
            >
              <CloseIcon size={25} />
            </button>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
