import { searchState } from '@/atoms/searchState';
import BottomNavigation from '@/components/BottomNavigation';
import Input from '@/components/Input';
import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

import { AiOutlineClose as CloseIcon, AiOutlineClockCircle as RecentIcon } from 'react-icons/ai';
import colors from '@/constants/colors';
import { css } from '@emotion/react';
import JoinSummary from '@/components/JoinSummary';

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
const InputUnderTextRight = styled.span`
  display: flex;
  flex: 2.5;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  color: ${colors.grey600};
  justify-content: flex-end;
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

const SearchText = styled.button`
  display: flex;
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;
`;

function SearchPage() {
  const [inputValue, setInputValue] = useState('');
  const [recentSearchValue, setRecentSearchValue] = useRecoilState(searchState);
  const [isFocus, setFocus] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isExist = (value: string) => recentSearchValue.find(item => item.searchValue === value);
    if (!isExist(inputValue) && inputValue) {
      setRecentSearchValue(prev => [...prev, { searchValue: inputValue }]);
    }
    setInputValue('');
    setFocus(false);

    const input = document.querySelector('#search-input') as HTMLInputElement;
    input.blur();
  };
  const onPressDeleteAll = useCallback(() => {
    setRecentSearchValue([]);
  }, []);

  const onClickDeleteIcon = useCallback(e => {
    setRecentSearchValue(prev => prev.filter(item => item.searchValue !== e.target.id));
  }, []);

  const onClickSearchHistory = useCallback(e => {
    setInputValue(e.target.innerText);
    onSubmit(e);
  }, []);

  return (
    <>
      <Input
        isLinking={false}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmit={onSubmit}
        setFocus={setFocus}
        searchTestId="search-input"
        formTestId="search-form"
      />
      {isFocus && (
        <>
          <InputUnderBlock>
            <InputUnderText>최근 검색어</InputUnderText>
            <InputUnderDelete onClick={onPressDeleteAll}>
              <span>전체 삭제</span>
            </InputUnderDelete>
          </InputUnderBlock>
          {recentSearchValue.map(search => (
            <SearchWrapper key={search.searchValue}>
              <SearchText onClick={onClickSearchHistory}>
                <RecentIcon
                  css={css`
                    margin-right: 1rem;
                  `}
                  size={20}
                />
                {search.searchValue}
              </SearchText>
              <IconWrapper data-testid={search.searchValue} id={search.searchValue} onClick={onClickDeleteIcon}>
                <CloseIcon id={search.searchValue} size={20} />
              </IconWrapper>
            </SearchWrapper>
          ))}
        </>
      )}
      {!isFocus && (
        <>
          <InputUnderBlock>
            <InputUnderText>검색 결과</InputUnderText>
            <InputUnderTextRight>개수 : 30개</InputUnderTextRight>
          </InputUnderBlock>
          <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
          <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
          <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
          <JoinSummary title="hi" time={{ left: '1', post: '1' }} people={{ current: 1, total: 3 }} />
        </>
      )}
      <BottomNavigation />
    </>
  );
}

export default SearchPage;
