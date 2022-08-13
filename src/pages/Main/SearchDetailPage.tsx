import Button from '@/components/Button';
import HeaderWithGradient from '@/components/Header/HeaderWithGradation';
import JoinDetail from '@/components/Join/JoinDetail';
import colors from '@/constants/colors';
import { css } from '@emotion/react';
import Logo from '../../assets/img/dog.png';
import { useNavigate } from 'react-router-dom';
import 중식 from '../../assets/img/ch.png';
import 치킨 from '../../assets/img/chicken.png';
import 일식 from '../../assets/img/jp.png';
import 한식 from '../../assets/img/ko.png';
import 피자 from '../../assets/img/pizza.png';
import All from '../../assets/img/all.png';
import 아시안 from '../../assets/img/asian.png';
import 햄버거 from '../../assets/img/hamburger.png';
import 분식 from '../../assets/img/koreanFood.png';
import 커피 from '../../assets/img/coffee.png';
import { useRecoilValue } from 'recoil';
import { watchingPostState } from '@/atoms/user/watchingPostState';
import { categoryListState } from '@/atoms/list/categoryListState';
import { useEffect, useState } from 'react';

interface ImageList {
  [prop: string]: string;
}

export default function SearchDetailPage() {
  const navigate = useNavigate();
  const watchingPost = useRecoilValue(watchingPostState);
  const categoryList = useRecoilValue(categoryListState);
  const [categoryName, setCategoryName] = useState('');
  const [imageList] = useState<ImageList>({
    중식: 중식,
    치킨: 치킨,
    일식: 일식,
    한식: 한식,
    피자: 피자,
    아시안: 아시안,
    햄버거: 햄버거,
    분식: 분식,
    커피: 커피,
  });

  useEffect(() => {
    setCategoryName(categoryList.find(category => category.id === watchingPost.categoryId)?.name as string);
  }, [categoryList, watchingPost]);
  return (
    <>
      <div
        css={css`
          background-color: ${colors.grey100};
          height: 100vh;
        `}
      >
        <HeaderWithGradient schoolName="00" imgSrc={imageList[categoryName]} categoryName={categoryName} />
        <JoinDetail
          shopName="BBQ 치킨"
          categoryName="치킨"
          schoolName="00 대학교"
          time={{ left: Date.now(), post: Date.now() }}
          payment={3000}
          people={{ current: 3, total: 7 }}
        />

        <Button
          onClick={() => navigate(-1)}
          width={90}
          css={css`
            position: fixed;
            bottom: 2rem;
            margin-left: 5%;
          `}
          buttonId="detail-button"
          data-testid="detail-button"
        >
          목록으로 돌아가기
        </Button>
      </div>
    </>
  );
}
