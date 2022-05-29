import Header from '@/components/Header/Header';
import { IconWrapper, Container, Input, InputBlock, NumInput, Post, TextArea, FirstSection, SecondSection, ThirdSection, IconBlock, SecondDetailSection, IconCenterBlock} from './WritingPage.styles';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { useState } from 'react';
import InputNumber from 'react-input-number';
import Shop from '../../assets/img/shop.png';
import Location from '../../assets/img/Location.png';
import Fee from '../../assets/img/fee_icon.png';
import Time from '../../assets/img/time_icon.png';
import Ppl from '../../assets/img/ppl_icon.png';
import Bell from '../../assets/img/bell 1.png';

function WritingPage() {
  const [peopleNum, setPeopleNum] = useState('');
  const [fee, setFee] = useState('');

  return (
    <>
      <Header
        Left={() => (
          <IconWrapper>
            <button onClick={() => console.log('hi')}>
              <LeftIcon size={30} color="#fff" />
            </button>
          </IconWrapper> 
          
        )}
      />
      <Container>
        <FirstSection>
          <InputBlock>
            <IconBlock><img src={Shop}/></IconBlock>
      <Input placeholder={'게시글 제목'}></Input>
      </InputBlock>
      <InputBlock>
            <IconBlock><img src={Shop}/></IconBlock>
      <Input placeholder={'주문할 매장을 입력해 주세요'}></Input>
      </InputBlock>
      <InputBlock>
            <IconBlock><img src={Location}/></IconBlock>
      <Input placeholder={'카테고리를 선택해 주세요'}></Input>
      </InputBlock>
      <InputBlock>
            <IconBlock><img src={Location}/></IconBlock>
      <Input placeholder={'배달을 받을 위치를 입력해 주세요'}></Input>
      </InputBlock>
</FirstSection>


<SecondSection>
  <SecondDetailSection>
      <NumInput placeholder={'인원수'} type={'number'} pattern={"[0-9]*"} value={peopleNum} onChange={(e) =>
          setPeopleNum((v) => (e.target.validity.valid ? e.target.value : v))
      }></NumInput>
      <IconCenterBlock><img src={Ppl}/></IconCenterBlock>
  </SecondDetailSection>
  <SecondDetailSection>
      <NumInput placeholder={'마감 시간'}></NumInput>
      <IconCenterBlock><img src={Time}/></IconCenterBlock>
  </SecondDetailSection>
  <SecondDetailSection>
      <NumInput placeholder={'배달비'} type={"number"} pattern={"[0-9]*"} value={fee} onChange={(e) =>
          setFee((v) => (e.target.validity.valid ? e.target.value : v))
        }></NumInput>
      <IconCenterBlock><img src={Fee}/></IconCenterBlock>
  </SecondDetailSection>
</SecondSection>
      
      <ThirdSection>
      <TextArea></TextArea>
      </ThirdSection>

      <Post placeholder={'자세한 설명'}>글 등록</Post>
      </Container>
    </>
  );
}

export default WritingPage;
