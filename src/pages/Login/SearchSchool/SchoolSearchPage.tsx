import SearchInput from '@/components/Input/SearchInput';
import { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import { BlankView, ListWrapper, SearchItem, SearchWrapper } from './SchoolSearchPage.styles';
import { AiOutlineArrowRight as RightIcon } from 'react-icons/ai';
import { useRecoilState, useRecoilValue } from 'recoil';
import { schoolSearchState } from '@/atoms/Login/schoolSearchState';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetSchoolListQuery } from '@/hooks/query/list/useGetSchoolList';
import { schoolListState } from '@/atoms/list/schoolList';
interface SchoolItem {
  schoolId: string;
  schoolName: string;
}

interface LinkParam {
  schoolList: SchoolItem[];
}

export default function SchoolSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState<SchoolItem[]>([]);

  const [_, setSchoolSearchValue] = useRecoilState(schoolSearchState);

  const location = useLocation();
  const schoolList = useRecoilValue(schoolListState);
  // const { schoolList } = location.state as LinkParam;

  useEffect(() => {
    setSearchList(schoolList);
  }, [schoolList]);

  const navigate = useNavigate();

  useEffect(() => {
    setSearchList(schoolList.filter(item => item.schoolName.includes(searchText)));
  }, [searchText]);

  const onClickText = useCallback(({ schoolId, schoolName }: SchoolItem) => {
    setSchoolSearchValue({ schoolId, schoolName });
    navigate(-1);
  }, []);

  return (
    <>
      <BlankView />
      <SearchInput isLinking={false} inputValue={searchText} setInputValue={setSearchText} />
      <ListWrapper>
        {searchList.map(item => (
          <SearchWrapper
            key={item.schoolName}
            onClick={() => onClickText({ schoolId: item.schoolId, schoolName: item.schoolName })}
          >
            <SearchItem>{item.schoolName}</SearchItem>
            <RightIcon />
          </SearchWrapper>
        ))}
      </ListWrapper>
    </>
  );
}
