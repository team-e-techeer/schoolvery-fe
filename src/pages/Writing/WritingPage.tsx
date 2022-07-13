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
import { useState, useCallback, useRef } from 'react';
import { useCheckBlank } from '@/hooks/useCheckBlank';
import { Link } from 'react-router-dom';
import Shop from '../../assets/img/shop.png';
import Location from '../../assets/img/Location.png';
import Fee from '../../assets/img/fee_icon.png';
import Time from '../../assets/img/time_icon.png';
import Ppl from '../../assets/img/ppl_icon.png';
import Bell from '../../assets/img/bell 1.png';
import axios from 'axios';

interface WritingInfo {
  title: string;
  store: string;
  category: string;
  location: string;
  peopleNum: string;
  closedTime: string;
  fee: string;
  content: string;
  [prop: string]: string;
}

function WritingPage() {
  const spanRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [writingInfo, setWritingInfo] = useState<WritingInfo>({
    title: '',
    store: '',
    category: '',
    location: '',
    peopleNum: '',
    closedTime: '',
    fee: '',
    content: ''
  });
  const [submitOK, setSubmit] = useState(true);
  const [submitted,setSubmitted] = useState(false);
  const { title, store, category, location, peopleNum, closedTime, fee, content } = writingInfo;

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitItems = ['title', 'store', 'category', 'location', 'peopleNum', 'closedTime', 'fee', 'content'];
      submitItems.forEach(item => {
        if (!writingInfo[item].length) {
          setSubmit(false);
          const select = spanRef.current?.querySelector<HTMLElement>(`#${item}`);
          if (select && !writingInfo[item]) select.style.display = 'block';
        }
      });
      
      let body = {
        title: writingInfo[title], //"보쌈정식",
        schoolId: 196,
        userId: "bd62b27b-6d60-4192-a7b3-26fcee71cb62",
        categoryId: 1,
        location: "잠실역 4번 출구",
        peopleNum: 3,
        deliveryFee: 5000,
        deadline: "2022-07-16T01:54:13.655Z",
        content: "같이 먹을 사람 구합니다! 기숙사생이면 좋겠습니다~",
        store: "싸움의고수"
      };
      console.log(body);

      axios.post("http://52.79.69.132/api/v1/posts",body).then((response)=>{
        console.log(response.data);
        setSubmitted(true);
      })
      .catch(
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

  const onCheckBlank = useCallback(
    (e: React.FocusEvent<HTMLFormElement, Element>) => {
      useCheckBlank({ e, ref: spanRef, state: writingInfo });
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
              value={category}
              name="category"
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
              name="closedTime"
              value={closedTime}
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
              name="fee"
              type={'number'}
              pattern={'[0-9]*'}
              value={fee}
              onChange={onChange}
              autoComplete="off"
            />
            <IconCenterBlock>
              <img src={Fee} alt="배달비" />
            </IconCenterBlock>
          </SecondDetailSection>
        </SecondSection>

        <ThirdSection>
          <TextArea name="detail" value={content}></TextArea>
        </ThirdSection>

        <Post type="submit">글 등록</Post>
      </Container>
    </>
  );
}

export default WritingPage;
