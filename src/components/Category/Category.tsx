import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export interface ImgInfo {
  path: string;
  src: string;
  name: string;
}

interface Props {
  imageInfo: ImgInfo[];
}

const imageWrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Category({ imageInfo }: Props) {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 2rem auto;
          background-color: ${colors.grey100};
          border-radius: 8px;
          padding: 2rem;
          max-height: 30rem;
          box-shadow: 1px 1px 1px 1px ${colors.grey300};
        `}
      >
        <ul css={imageWrapper}>
          {imageInfo.map((image, idx) => (
            <Link
              css={css`
                display: flex;
                flex-direction: column;
                flex-basis: 20%;
                flex-grow: 0;
                flex-shrink: 1;
                align-items: center;
                align-content: center;
                max-height: 10rem;
              `}
              key={idx}
              to={image.path}
            >
              <img
                css={css`
                  max-width: 100%;
                  max-height: 7rem;
                `}
                src={image.src}
                alt={`category img for ${image.name}`}
              />
              <span>{image.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
