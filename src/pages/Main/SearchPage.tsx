import { searchState } from '@/atoms/searchState';
import BottomNavigation from '@/components/BottomNavigation';
import Input from '@/components/Input';
import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

import { AiOutlineClose as CloseIcon, AiOutlineClockCircle as RecentIcon } from 'react-icons/ai';
import colors from '@/constants/colors';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const SearchWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 1rem auto;

  cursor: pointer;
  border-bottom: 1px solid ${colors.mainColor};
  &:focus {
    outline: none;
  }
`;

const InputUnderBlock = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
`;

const InputUnderText = styled.span`
  display: flex;
  flex: 2.5;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  color: ${colors.grey600};
`;

const InputUnderDelete = styled.button`
  display: flex;
  flex: 0.7;
  padding: 0.5rem;
  flex-direction: row-reverse;
  align-items: center;
  background-color: ${colors.mainColor};
  border-radius: 8px;
  color: ${colors.grey100};
  cursor: pointer;
  span {
    font-size: 1.3rem;
  }
`;

const IconWrapper = styled.button`
  display: flex;
  flex: 0.1;
  justify-content: flex-end;
  padding: 1rem;
  height: 100%;
`;

const SearchText = styled(Link)`
  display: flex;
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem;
  align-items: center;
`;

function SearchPage() {
  const [inputValue, setInputValue] = useState('');
  const [searchValues, setSearchItem] = useRecoilState(searchState);
  const [isFocus, setFocus] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isExist = (value: string) => searchValues.find(item => item.searchValue === value);
    if (!isExist(inputValue)) {
      setSearchItem(prev => [...prev, { searchValue: inputValue }]);
    }
    setInputValue('');
  };
  const onPressDeleteAll = useCallback(() => {
    setSearchItem([]);
  }, []);

  const onClickDeleteIcon = useCallback(e => {
    setSearchItem(prev => prev.filter(item => item.searchValue !== e.target.id));
  }, []);

  return (
    <>
      <>
        <Input isLinking={false} inputValue={inputValue} setInputValue={setInputValue} onSubmit={onSubmit} />
        <InputUnderBlock>
          <InputUnderText>최근 검색어</InputUnderText>
          <InputUnderDelete onClick={onPressDeleteAll}>
            <span>전체 삭제</span>
          </InputUnderDelete>
        </InputUnderBlock>
        {searchValues.map(search => (
          <SearchWrapper key={search.searchValue}>
            <SearchText to={`${search.searchValue}`}>
              <RecentIcon
                css={css`
                  margin-right: 1rem;
                `}
                size={20}
              />
              {search.searchValue}
            </SearchText>
            <IconWrapper id={search.searchValue} onClick={onClickDeleteIcon}>
              <CloseIcon id={search.searchValue} size={20} />
            </IconWrapper>
          </SearchWrapper>
        ))}
      </>
      <BottomNavigation />
    </>
  );
}

export default SearchPage;
