/* eslint-disable import/extensions */
import Header from '@/components/Header/Header';
import {
  IconWrapper,
  Container,
  Input,
  InputBlock,
  NumInput,
  TextArea,
  FirstSection,
  SecondSection,
  ThirdSection,
  IconBlock,
  IconCenterBlock,
  TimeInput,
  TimeInputBlock,
  RawFlexWrapper,
  FlexWrapper,
  RawFlexTimeWrapper,
  Label,
  InputForm,
  ButtonBlock,
  BlankView,
} from './WritingPage.styles';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { BsShop as Shop } from 'react-icons/bs';
import { BiCategory, BiMoney } from 'react-icons/bi';
import { MdLocationPin as Location } from 'react-icons/md';

import ModalPostCategory from '@/components/Modal/ModalPostCategory';
import colors from '@/constants/colors';
import { useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';
import { categoryListState } from '@/atoms/list/categoryListState';

import { useWritingMutation } from '@/hooks/query/writing/useWritingMutation';
import Select from 'react-select';
import type {} from 'react-select';
import { BsFillPeopleFill } from 'react-icons/bs';

// dayjs
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { WritingFooter } from '@/components/Writing/WritingFooter';
import { useGetOnePostInformation } from '@/hooks/query/writing/useGetOnePostInformation';
import { useCheckWritingMode } from '@/hooks/componentHooks/writing/useCheckWritingMode';
import { usePutPostInformation } from '@/hooks/query/writing/usePutPostInfromation';
import { getQueryString } from '@/util/getQueryString';
import { PostData } from '@/interface/writing';
import { useDeleteOnePost } from '@/hooks/query/writing/useDeleteOnePost';
import { usePostParticipateChat } from '@/hooks/query/chat/POST/usePostParticipateChat';
import Button from '@/components/Button';
import 중식 from '../../assets/img/ch.png';
import 치킨 from '../../assets/img/chicken.png';
import 일식 from '../../assets/img/jp.png';
import 한식 from '../../assets/img/ko.png';
import 피자 from '../../assets/img/pizza.png';
import 아시안 from '../../assets/img/asian.png';
import 햄버거 from '../../assets/img/hamburger.png';
import 분식 from '../../assets/img/koreanFood.png';
import 커피 from '../../assets/img/coffee.png';
import { css } from '@emotion/react';
dayjs.locale('ko');

export interface WritingInfo {
  title: string;
  store: string;
  location: string;
  peopleNum: number;
  endHour: string;
  endMinute: string;
  deliveryFee: number;
  content: string;
  [prop: string]: unknown;
}
interface iOption {
  label: string;
  value: string;
}
export enum PageMode {
  Write = 'Write',
  Fix = 'Fix',
}
interface ImageList {
  [prop: string]: string;
}

function WritingPage() {
  const navigate = useNavigate();
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [writingInfo, setWritingInfo] = useState<WritingInfo>({
    title: '',
    store: '',
    categoryId: '',
    location: '',
    peopleNum: 0,
    endHour: dayjs().format('hh'),
    endMinute: dayjs().format('mm'),
    deliveryFee: 0,
    content: '',
  });

  const onChangePostData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value, name } = e.target;
      setWritingInfo({
        ...writingInfo,
        [name]: value,
      });
    },
    [writingInfo]
  );

  const onCheckBlank = useCallback(
    (e: React.FocusEvent<HTMLFormElement, Element>) => {
      //useCheckBlank({ e, ref: spanRef, state: writingInfo });
    },
    [writingInfo, spanRef]
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [categoryName, setCategoryName] = useState('치킨');
  const [categoryID, setCategoryID] = useState('');
  const [isAM, setIsAM] = useState(dayjs().format('a'));
  const { title, store, location, peopleNum, endHour, endMinute, deliveryFee, content } = writingInfo;
  const userInfo = useRecoilValue(userState);
  const categoryList = useRecoilValue(categoryListState);

  const { search } = useLocation();
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
  const [currentImg, setImg] = useState({
    src: 한식,
    name: '한식',
  });

  useEffect(() => {
    setImg(prev => ({ ...prev, name: categoryName, src: imageList[categoryName] }));
  }, [categoryID, categoryName]);

  // 페이지 모드 분리 (쓰기 모드, 수정 모드)

  // 쓰기 모드
  const writingMutation = useWritingMutation();
  useEffect(() => {
    writingMutation.isSuccess && navigate('/');
  }, [writingMutation.isSuccess]);

  // 수정 모드

  const queryString = useMemo(() => getQueryString(search), [search]);

  const postInformation = useGetOnePostInformation({
    accessToken: userInfo.accessToken,
    postId: Number(queryString.id),
  });

  const [pageMode] = useCheckWritingMode({ search, data: postInformation.data, setWritingInfo, setCategoryID });

  const putPostInformation = usePutPostInformation();

  useEffect(() => {
    if (pageMode === PageMode.Fix && postInformation.isSuccess) {
      const { content, deliveryFee, location, peopleNum, store, title } = postInformation.data;
      setWritingInfo(prev => ({
        ...prev,
        content,
        deliveryFee: Number(deliveryFee),
        location,
        peopleNum: Number(peopleNum),
        store,
        title,
      }));
    }
  }, [pageMode, postInformation]);

  const onSubmitWritingInfo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['title', 'store', 'location', 'peopleNum', 'endHour', 'endMinute', 'deliveryFee'];
      // submitItems.forEach(item => {
      //   if (!writingInfo[item].length) {
      //     setSubmit(false);
      //     const select = spanRef.current?.querySelector<HTMLElement>(`#${item}`);
      //     if (select && !writingInfo[item]) select.style.display = 'block';
      //   }
      // });

      const onFindCategoryId = (): string => {
        const id = categoryList.find(category => category.name === categoryName)?.id as string;
        return id;
      };

      const getTime = (): string => {
        const currTime = dayjs();
        const time = dayjs()
          .set('hour', isAM === '오후' ? Number(endHour) + 12 : Number(endHour))
          .set('minute', Number(endMinute))
          .set('date', currTime.hour() > 12 && isAM === '오전' ? currTime.date() + 1 : currTime.date());
        const timeResult = time.format('YYYY-MM-DD') + 'T' + time.format('HH:mm:ss') + 'Z';
        return timeResult;
      };
      // const postDat = postInformation.data;
      const data: PostData = {
        title: title,
        schoolId: userInfo.schoolId,
        userId: userInfo.id,
        store: store,
        categoryId: onFindCategoryId(),
        location: location,
        peopleNum,
        deadline: getTime(),
        deliveryFee,
        content: content,
      };
      if (pageMode === PageMode.Write) writingMutation.mutate({ accessToken: userInfo.accessToken, postData: data });
      if (pageMode === PageMode.Fix) {
        data.id = Number(queryString.id);

        putPostInformation.mutate({ accessToken: userInfo.accessToken, postData: data });
      }
    },
    [writingInfo, userInfo, pageMode]
  );
  const participateChat = usePostParticipateChat();
  useEffect(() => {
    if (writingMutation.isSuccess) {
      const response = writingMutation.data;
      participateChat.mutate({
        accessToken: userInfo.accessToken,
        postData: {
          room_id: response.roomId,
          user_id: userInfo.id,
          name: response.title,
        },
      });
    }
  }, [writingMutation, userInfo]);

  // 삭제하기
  const deletePostMutation = useDeleteOnePost({ accessToken: userInfo.accessToken, postId: Number(queryString.id) });

  const options = [
    { value: '오전', label: '오전' },
    { value: '오후', label: '오후' },
  ];

  const styles = {
    control: (provided: any, state: any) => ({
      ...provided,
      background: '#fff',
      borderColor: colors.mainColor,
      borderRadius: 7,
      minHeight: '4.5rem',
      height: '4.5rem',
      boxShadow: state.isFocused ? null : null,
      flex: 3,
    }),

    container: (base: any) => ({
      ...base,
      flex: 1,
    }),
  };

  const onClickPrev = useCallback(() => {
    search.length ? navigate(-1) : navigate('/');
  }, [search.length]);

  return (
    <>
      <Header
        title="글 등록"
        Left={() => (
          <IconWrapper onClick={onClickPrev}>
            <LeftIcon size={30} color="#fff" />
          </IconWrapper>
        )}
      />

      <Container ref={spanRef} onBlur={onCheckBlank} onSubmit={onSubmitWritingInfo}>
        <FirstSection>
          <InputBlock>
            <IconBlock>
              <FaPen size={33} color={colors.mainColor} />
            </IconBlock>
            <InputForm>
              <input
                defaultValue={title}
                name="title"
                onChange={onChangePostData}
                autoFocus={true}
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="title">제목</label>
            </InputForm>
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <Shop size={33} color={colors.mainColor} />
            </IconBlock>
            <InputForm>
              <input defaultValue={store} name="store" onChange={onChangePostData} autoComplete="off" placeholder=" " />
              <label htmlFor="title">가게 이름</label>
            </InputForm>
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <BiCategory size={33} color={colors.mainColor} />
            </IconBlock>

            {/* <input defaultValue={categoryName} name="categoryName" autoComplete="off" placeholder=" " />
              <label htmlFor="title">카테고리</label> */}
            <ButtonBlock>
              <img src={currentImg.src} />
              <p>{categoryName}</p>
            </ButtonBlock>
            <BlankView />
            <Button
              css={css`
                justify-self: flex-end;
              `}
              type="button"
              onClick={() => setModalVisible(true)}
              buttonId="category"
              width={30}
              height={5}
            >
              카테고리 선택
            </Button>
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <Location size={33} color={colors.mainColor} />
            </IconBlock>
            <InputForm>
              <input
                defaultValue={location}
                name="location"
                onChange={onChangePostData}
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="title">배달 주소</label>
            </InputForm>
          </InputBlock>

          <InputBlock>
            <RawFlexTimeWrapper>
              <Select
                defaultValue={isAM === '오전' ? options[0] : options[1]}
                styles={styles}
                placeholder="오전"
                options={options}
                onChange={option => setIsAM((option as iOption).value)}
                theme={theme => ({
                  ...theme,
                  borderRadius: 15,
                  colors: {
                    ...theme.colors,
                    text: 'orangered',
                    primary25: colors.orange100,
                    primary: colors.mainColor,
                  },
                })}
              />
              <TimeInputBlock>
                <TimeInput
                  placeholder={'00'}
                  name="endHour"
                  value={endHour}
                  onChange={onChangePostData}
                  autoComplete="off"
                />
                <p>:</p>
                <TimeInput
                  placeholder={'00'}
                  name="endMinute"
                  value={endMinute}
                  onChange={onChangePostData}
                  autoComplete="off"
                />
              </TimeInputBlock>
            </RawFlexTimeWrapper>
          </InputBlock>
        </FirstSection>

        <SecondSection>
          <FlexWrapper>
            <IconCenterBlock>
              <BsFillPeopleFill size={33} color={colors.mainColor} />
            </IconCenterBlock>
            <RawFlexWrapper>
              <NumInput
                // placeholder={'0'}
                name="peopleNum"
                type={'number'}
                pattern={'[0-9]*'}
                value={peopleNum}
                onChange={onChangePostData}
                autoComplete="off"
              />
              <p>명</p>
            </RawFlexWrapper>
          </FlexWrapper>

          <FlexWrapper>
            <RawFlexWrapper>
              <IconCenterBlock>
                <BiMoney size={33} color={colors.mainColor} />
              </IconCenterBlock>
              <NumInput
                placeholder={'0'}
                name="deliveryFee"
                type={'number'}
                pattern={'[0-9]*'}
                value={deliveryFee}
                onChange={onChangePostData}
                autoComplete="off"
              />
              <p>원</p>
            </RawFlexWrapper>
          </FlexWrapper>
        </SecondSection>

        <ThirdSection>
          <TextArea name="content" defaultValue={content} onChange={onChangePostData}></TextArea>
        </ThirdSection>
        <WritingFooter isEdit={Boolean(search.length)} deletePostMutation={deletePostMutation} />
        {/* <Post type="submit">글 등록</Post> */}
      </Container>
      <ModalPostCategory
        visible={modalVisible}
        setModalVisible={setModalVisible}
        setCategoryName={setCategoryName}
        setCategoryId={setCategoryID}
      />
    </>
  );
}

export default WritingPage;
