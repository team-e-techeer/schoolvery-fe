import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { useState } from 'react';
import Modal from './Modal';
import Ch from '../../assets/img/ch.png';
import chicken from '../../assets/img/chicken.png';
import Jp from '../../assets/img/jp.png';
import Ko from '../../assets/img/ko.png';
import Pizza from '../../assets/img/pizza.png';
import All from '../../assets/img/all.png';
import Asian from '../../assets/img/asian.png';
import Hamburger from '../../assets/img/hamburger.png';
import koreanFood from '../../assets/img/koreanFood.png';
import coffee from '../../assets/img/coffee.png';
import { useNavigate } from 'react-router-dom';
interface Props {
  visible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isNavigating: boolean;
}

interface Info {
  path: string;
  src: string;
  name: string;
  select: boolean;
  id: number;
}

export default function ModalCategory({ visible, setModalVisible, isNavigating }: Props) {
  const navigate = useNavigate();
  const [imageInfo, setImage] = useState<Info[]>([
    { path: '/category/전체', src: All, name: '전체', select: true, id: 0 },
    { path: '/category/한식', src: Ko, name: '한식', select: false, id: 1 },
    { path: '/category/중식', src: Ch, name: '중식', select: false, id: 2 },
    { path: '/category/일식', src: Jp, name: '일식', select: false, id: 3 },
    { path: '/category/아시안', src: Asian, name: '아시안', select: false, id: 4 },
    { path: '/category/치킨', src: chicken, name: '치킨', select: false, id: 5 },
    { path: '/category/피자', src: Pizza, name: '피자', select: false, id: 6 },
    { path: '/category/햄버거', src: Hamburger, name: '햄버거', select: false, id: 7 },
    { path: '/category/분식', src: koreanFood, name: '분식', select: false, id: 8 },
    { path: '/category/커피', src: coffee, name: '커피', select: false, id: 9 },
  ]);
  const onClickCategory = (image: Info) => {
    setImage(imageInfo.map(img => (img.id === image.id ? { ...img, select: true } : { ...img, select: false })));
    isNavigating && navigate(`${image.path}`);
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
              margin-left: 2%;
            `}
          >
            카테고리를 선택해주세요
          </span>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              box-sizing: border-box;
              justify-content: center;
            `}
          >
            {imageInfo.map(image => (
              <button
                onClick={() => onClickCategory(image)}
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  border-radius: 0.7rem;
                  box-sizing: border-box;
                  background-color: ${image.select ? colors.mainColor : colors.grey100};
                  padding: 1rem;
                  margin: 2rem 1%;
                  flex: 1 1 30%;
                  justify-content: space-around;
                `}
                key={image.name}
              >
                <img
                  css={css`
                    max-width: 100%;
                    max-height: 3rem;
                  `}
                  src={image.src}
                  alt={`category img for ${image.name}`}
                />
                <span
                  css={css`
                    color: ${image.select ? colors.grey100 : colors.black};
                  `}
                >
                  {image.name}
                </span>
              </button>
            ))}
          </div>
        </>
      </Modal>
    </>
  );
}
