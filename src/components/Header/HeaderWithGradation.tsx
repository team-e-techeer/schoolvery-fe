import colors from '@/constants/colors';
import { css } from '@emotion/react';

interface Props {
  schoolName: string;
  imgSrc: string;
  categoryName: string;
}

export default function HeaderWithGradient({ schoolName, imgSrc, categoryName }: Props) {
  return (
    <>
      <header
        css={css`
          height: 17rem;
          background: ${colors.mainColor};
          background: linear-gradient(0deg, #f5b7b7 0%, ${colors.mainColor} 100%);
          padding-left: 5%;
        `}
      >
        <h1
          css={css`
            padding-top: 1rem;
            color: ${colors.grey100};
            font-size: 2.5rem;
          `}
        >
          스쿨버리
        </h1>
        <h2
          css={css`
            color: ${colors.grey100};
            font-size: 1.5rem;
            margin-bottom: 1rem;
          `}
        >
          {schoolName} 대학교
        </h2>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            background-color: ${colors.grey100};
            width: 6rem;
            height: 7rem;
            border-radius: 8px;
          `}
        >
          <img
            css={css`
              width: 6rem;
              height: 6rem;
              object-fit: fill;
            `}
            alt="category-img"
            src={imgSrc}
          />
          <span
            css={css`
              display: flex;
              text-align: center;
              align-content: center;
              bottom: 10%;
              justify-content: center;
              font-size: 1rem;
            `}
          >
            {categoryName}
          </span>
        </div>
      </header>
    </>
  );
}
