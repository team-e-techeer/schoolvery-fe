import Button from '@/components/Button';
import HeaderWithGradient from '@/components/HeaderWithGradation';
import JoinDetail from '@/components/JoinDetail';
import colors from '@/constants/colors';
import { css } from '@emotion/react';
import Logo from '../../assets/img/dog.png';
import { useNavigate } from 'react-router-dom';
export default function SearchDetailPage() {
  const navigate = useNavigate();
  return (
    <>
      <div
        css={css`
          background-color: ${colors.grey200};
          height: 100vh;
        `}
      >
        <HeaderWithGradient schoolName="00" imgSrc={Logo} categoryName="강아지" />
        <JoinDetail
          shopName="BBQ 치킨"
          categoryName="치킨"
          schoolName="00 대학교"
          time={{ left: '1', post: '1' }}
          payment={3000}
          people={{ current: 3, total: 5 }}
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
