import SearchInput from '@/components/Input/SearchInput';
import { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/extensions
import { BlankView, ListWrapper, SearchItem, SearchWrapper } from './SchoolSearchPage.styles';
import { AiOutlineArrowRight as RightIcon } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { schoolSearchState } from '@/atoms/Login/schoolSearchState';
import { useNavigate } from 'react-router-dom';
interface SchoolItem {
  schoolId: string;
  schoolName: string;
}

export default function SchoolSearchPage() {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState<SchoolItem[]>([]);
  const [schoolSearchValue, setSchoolSearchValue] = useRecoilState(schoolSearchState);
  const [schoolList] = useState<SchoolItem[]>([
    {
      schoolId: '4da9d98c-e6a0-41d6-bba5-318966892224',
      schoolName: '이화여자대학교',
    },
    {
      schoolId: '606bbffd-1012-4bf0-ab65-51a2acef399c',
      schoolName: '성결대학교',
    },
    {
      schoolId: '6dfdd712-06e4-4b5f-a0ab-d627011ae456',
      schoolName: '가천대학교',
    },
    {
      schoolId: '8922468c-bde1-4ac1-84af-16347cf68b5c',
      schoolName: '충북대학교',
    },
    {
      schoolId: 'de90b92a-70ad-4bbf-a4d4-61df5e0bc220',
      schoolName: '한국공학대학교',
    },
  ]);

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
