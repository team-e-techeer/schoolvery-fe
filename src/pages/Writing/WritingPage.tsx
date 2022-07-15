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
  SecondDetailSection,
  IconCenterBlock,
} from './WritingPage.styles';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import React, { useState, useCallback, useRef } from 'react';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { Link } from 'react-router-dom';
import Shop from '../../assets/img/shop.png';
import Location from '../../assets/img/Location.png';
import Fee from '../../assets/img/fee_icon.png';
import Time from '../../assets/img/time_icon.png';
import Ppl from '../../assets/img/ppl_icon.png';
import axios from 'axios';

interface WritingInfo {
  title: string;
  schoolId: string;
  userId: string;
  store: string;
  categoryId: string;
  location: string;
  peopleNum: string;
  deadline: string;
  deliveryFee: string;
  content: string;
  [prop: string]: string;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function WritingPage() {
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [writingInfo, setWritingInfo] = useState<WritingInfo>({
    title: '',
    schoolId: '6e212f1e-c42a-4203-bb84-222e8aae12c7',
    userId: '3e9c5072-bea6-48df-b029-8cfc05f326c1',
    store: '',
    categoryId: '',
    location: '',
    peopleNum:'',
    deadline: '',
    deliveryFee: '',
    content: ''
  });
  
  const [submitOK, setSubmit] = useState(true);
  const { title, schoolId, userId, store, categoryId, location, peopleNum, deadline, deliveryFee, content } = writingInfo;
  
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['title', 'store', 'categoryId', 'location', 'peopleNum', 'deadline', 'deliveryFee'];
      submitItems.forEach(item => {
        if (!writingInfo[item].length) {
          setSubmit(false);
          const select = spanRef.current?.querySelector<HTMLElement>(`#${item}`);
          if (select && !writingInfo[item]) select.style.display = 'block';
        }
      }
      );

  
      console.log(writingInfo);


      // 👇️ format as "YYYY-MM-DD hh:mm:ss"
      // You can tweak formatting easily
      function formatDate(time:string) {
        var date = new Date;
        return (
          [date.getFullYear(),padTo2Digits(date.getMonth() + 1),padTo2Digits(date.getDate()),].join('-') +'T' +
          [time,padTo2Digits(date.getSeconds()),].join(':')
        );}

      const category : number =+categoryId;
      const people : number =+peopleNum;
      const fee : number =+ deliveryFee;
      const time = formatDate(deadline);
      const data = {
        title: title,
        schoolId: schoolId,
        userId: userId,
        store: store,
        categoryId: category,
        location:location,
        peopleNum:people,
        deadline: time,
        deliveryFee: fee,
        content: content
      }

      axios.post("http://localhost:8080/api/v1/posts",data,{
        headers: {
        'Content-Type': 'application/json'
        }
    }).then((response)=>{
        console.log(response.data);
      })
      .catch(error=>{
        console.log(error);
        console.log(writingInfo);
      }
      )
    },
    [writingInfo]

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
      const {value, name} = e.target;
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

  return (
    <>
      <Header
        title="글 등록"
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
              <img src={Shop} alt="제목" />
            </IconBlock>
            <Input
              value={title}
              name="title"
              placeholder={'게시글 제목'}
              onChange={onChange}
              autoFocus={true}
              autoComplete="off"
            ></Input>
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <img src={Shop} alt="매장" />
            </IconBlock>
            <Input
              value={store}
              name="store"
              placeholder={'주문할 매장을 입력해 주세요'}
              onChange={onChange}
              autoComplete="off"
            ></Input>
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <img src={Location} alt="카테고리" />
            </IconBlock>
            <Input
              value={categoryId}
              name="categoryId"
              placeholder={'카테고리를 선택해 주세요'}
              onChange={onChange}
              autoComplete="off"
            ></Input>
          </InputBlock>
          <InputBlock>
            <IconBlock>
              <img src={Location} alt="배달 위치" />
            </IconBlock>
            <Input
              value={location}
              name="location"
              placeholder={'배달을 받을 위치를 입력해 주세요'}
              onChange={onChange}
              autoComplete="off"
            ></Input>
          </InputBlock>
        </FirstSection>

        <SecondSection>
          <SecondDetailSection>
            <NumInput
              placeholder={'인원수'}
              name="peopleNum"
              type={'number'}
              pattern={'[0-9]*'}
              value={peopleNum}
              onChange={onChange}
              autoComplete="off"
            />
            <IconCenterBlock>
              <img src={Ppl} alt="인원" />
            </IconCenterBlock>
          </SecondDetailSection>
          <SecondDetailSection>
            <NumInput
              placeholder={'마감 시간'}
              name="deadline"
              value={deadline}
              onChange={onChange}
              autoComplete="off"
            />
            <IconCenterBlock>
              <img src={Time} alt="마감시간" />
            </IconCenterBlock>
          </SecondDetailSection>
          <SecondDetailSection>
            <NumInput
              placeholder={'배달비'}
              name="deliveryFee"
              type={'number'}
              pattern={'[0-9]*'}
              value={deliveryFee}
              onChange={onChange}
              autoComplete="off"
            />
            <IconCenterBlock>
              <img src={Fee} alt="배달비" />
            </IconCenterBlock>
          </SecondDetailSection>
        </SecondSection>

        <ThirdSection>
          <TextArea 
          name="content"
          value={content}
          onChange={onChangeContent}></TextArea>
        </ThirdSection>

        <Post type="submit">글 등록</Post>
      </Container>
    </>
  );
}

export default WritingPage;
