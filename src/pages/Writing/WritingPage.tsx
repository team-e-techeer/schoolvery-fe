/* eslint-disable import/extensions */
import Header from '@/components/Header/Header';
import {
  IconWrapper,
  Container,
  Input,
  InputBlock,
  NumInput,
  Post,
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
} from './WritingPage.styles';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import React, { useState, useCallback, useRef } from 'react';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { Link, useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { BsShop as Shop } from 'react-icons/bs';
import { BiCategory, BiTimeFive, BiMoney } from 'react-icons/bi';
import { MdLocationPin as Location } from 'react-icons/md';

import ModalPostCategory from '@/components/Modal/ModalPostCategory';
import colors from '@/constants/colors';
import { useRecoilValue } from 'recoil';
import { userState } from '@/atoms/user/userState';
import { categoryListState } from '@/atoms/list/categoryListState';

import { useWritingMutation } from '@/hooks/query/writing/useWritingMutation';
import Select from 'react-select';
import type {} from 'react-select';
import { css } from '@emotion/react';
import { BsFillPeopleFill } from 'react-icons/bs';

// dayjs
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

interface WritingInfo {
  title: string;
  store: string;
  location: string;
  peopleNum: number;
  endHour: number;
  endMinute: number;
  deliveryFee: number;
  content: string;
  [prop: string]: unknown;
}
interface iOption {
  label: string;
  value: string;
}
function WritingPage() {
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [writingInfo, setWritingInfo] = useState<WritingInfo>({
    title: '',
    store: '',
    categoryId: '',
    location: '',
    peopleNum: 0,
    endHour: dayjs().hour() > 12 ? dayjs().hour() - 12 : dayjs().hour(),
    endMinute: dayjs().minute(),
    deliveryFee: 0,
    content: '',
  });

  const [submitOK, setSubmit] = useState(true);
  const [linkOk, setLinkOk] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [isAM, setIsAM] = useState(dayjs().format('A'));
  const [isAfterNoon, setIstAfterNoon] = useState('A');
  const { title, schoolId, userId, store, categoryId, location, peopleNum, endHour, endMinute, deliveryFee, content } =
    writingInfo;
  const userInfo = useRecoilValue(userState);
  const categoryList = useRecoilValue(categoryListState);

  const { mutate, data } = useWritingMutation();
  const onSubmit = useCallback(
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
      const time = dayjs()
        .set('h', isAM === '??????' ? endHour + 12 : endHour)
        .set('m', endMinute)
        .toJSON();
      const data = {
        title: title,
        schoolId: userInfo.schoolId,
        userId: userInfo.id,
        store: store,
        categoryId: onFindCategoryId(),
        location: location,
        peopleNum,
        deadline: time,
        deliveryFee,
        content: content,
      };
      mutate({ accessToken: userInfo.accessToken, postData: data });
    },
    [writingInfo, userInfo]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setWritingInfo({
        ...writingInfo,
        [name]: value,
      });
    },
    [writingInfo]
  );

  const onChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
  const options = [
    { value: '??????', label: '??????' },
    { value: '??????', label: '??????' },
  ];
  const [selectedOption, setSelectedOption] = useState();
  const styles = {
    control: (provided: any, state: any) => ({
      ...provided,
      background: '#fff',
      borderColor: colors.mainColor,
      borderRadius: 7,
      minHeight: '45px',
      height: '45px',
      boxShadow: state.isFocused ? null : null,
      flex: 3,
    }),
    container: (base: any) => ({
      ...base,
      flex: 1,
    }),
  };
  console.log(isAM);
  return (
    <>
      <Header
        title="??? ??????"
        Left={() => (
          <IconWrapper>
            <Link to="/">
              <LeftIcon size={30} color="#fff" />
            </Link>
          </IconWrapper>
        )}
      />
      <Container ref={spanRef} onBlur={onCheckBlank} onSubmit={onSubmit}>
        <FirstSection>
          <InputBlock>
            <IconBlock>
              <FaPen size={33} color={colors.mainColor} />
            </IconBlock>
            <Input
              defaultValue={title}
              name="title"
              placeholder={'????????? ??????'}
              onChange={onChange}
              autoFocus={true}
              autoComplete="off"
            />
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <Shop size={33} color={colors.mainColor} />
            </IconBlock>
            <Input
              defaultValue={store}
              name="store"
              placeholder={'????????? ????????? ????????? ?????????'}
              onChange={onChange}
              autoComplete="off"
            />
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <BiCategory size={33} color={colors.mainColor} />
            </IconBlock>
            <Input
              defaultValue={categoryName}
              name="categoryName"
              placeholder={'??????????????? ????????? ?????????'}
              //onChange={onChange}
              onClick={() => setModalVisible(true)}
              autoComplete="off"
            />
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <Location size={33} color={colors.mainColor} />
            </IconBlock>
            <Input
              defaultValue={location}
              name="location"
              placeholder={'????????? ?????? ????????? ????????? ?????????'}
              onChange={onChange}
              autoComplete="off"
            />
          </InputBlock>
          <InputBlock>
            <RawFlexTimeWrapper>
              <Select
                defaultValue={isAM === '??????' ? options[1] : options[0]}
                styles={styles}
                placeholder="??????"
                options={options}
                onChange={option => setIsAM((option as iOption).value)}
              />
              <TimeInputBlock>
                <TimeInput
                  placeholder={'0'}
                  name="endHour"
                  defaultValue={endHour}
                  onChange={onChange}
                  autoComplete="off"
                />
                <p>:</p>
                <TimeInput
                  placeholder={'0'}
                  name="endMinute"
                  defaultValue={dayjs().format('mm')}
                  onChange={onChange}
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
                placeholder={'0'}
                name="peopleNum"
                type={'number'}
                pattern={'[0-9]*'}
                defaultValue={peopleNum}
                onChange={onChange}
                autoComplete="off"
              ></NumInput>
              <p>???</p>
            </RawFlexWrapper>
          </FlexWrapper>

          <FlexWrapper>
            <RawFlexWrapper>
              <IconCenterBlock>
                <BiMoney size={33} color={colors.mainColor} />
              </IconCenterBlock>
              <NumInput
                placeholder={'?????????'}
                name="deliveryFee"
                type={'number'}
                pattern={'[0-9]*'}
                defaultValue={deliveryFee}
                onChange={onChange}
                autoComplete="off"
              />
              <p>???</p>
            </RawFlexWrapper>
          </FlexWrapper>
        </SecondSection>

        <ThirdSection>
          <TextArea name="content" defaultValue={content} onChange={onChangeContent}></TextArea>
        </ThirdSection>

        <Post type="submit">??? ??????</Post>
      </Container>
      <ModalPostCategory
        visible={modalVisible}
        setModalVisible={setModalVisible}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        categoryId={categoryID}
        setCategoryId={setCategoryID}
      />
    </>
  );
}

export default WritingPage;
