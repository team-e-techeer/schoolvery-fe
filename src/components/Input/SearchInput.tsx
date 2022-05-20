import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { BiSearch as SearchIcon } from 'react-icons/bi';
import { FiArrowLeft as LeftIcon } from 'react-icons/fi';
interface Props {
  isLinking: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  setFocus?: React.Dispatch<React.SetStateAction<boolean>>;
  searchTestId?: string;
  formTestId?: string;
}

const inputStyle = css`
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${colors.grey100};
  border-radius: 5px;
  height: 5rem;
  padding: 1rem;
  align-content: center;
`;

const inputWithoutPrev = css`
  display: flex;
  width: 90%;
  margin: 3rem auto;
  margin-bottom: 1rem;
  background-color: ${colors.grey100};
  border-radius: 5px;
  height: 5rem;
  padding: 1rem;
  align-content: center;
  align-items: center;
`;

export default function Input({
  isLinking,
  onSubmit,
  inputValue,
  setInputValue,
  setFocus,
  searchTestId,
  formTestId,
}: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue && setInputValue(e.target.value);
  return isLinking ? (
    <Link css={inputWithoutPrev} to="/search">
      <SearchIcon size={25} color={colors.mainColor} />
      <input
        css={css`
          margin-left: 1rem;
          background-color: inherit;
        `}
        placeholder="검색어를 입력해 주세요"
        type="text"
      />
    </Link>
  ) : (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-top: 2rem;
      `}
    >
      <Link
        to="/"
        css={css`
          cursor: pointer;
          margin-left: 5%;
        `}
      >
        <LeftIcon color={colors.grey800} size={30} />
      </Link>
      <form css={inputStyle} onSubmit={onSubmit} data-testid={formTestId}>
        <SearchIcon size={25} color={colors.mainColor} />
        <input
          css={css`
            margin-left: 1rem;
            background-color: inherit;
            width: 100%;
          `}
          placeholder="검색어를 입력해 주세요"
          type="text"
          id="search-input"
          autoFocus={true}
          value={inputValue}
          onChange={onChange}
          data-testid={searchTestId}
          onFocus={() => {
            setFocus && setFocus(true);
          }}
        />
      </form>
    </div>
  );
}
