import colors from '@/constants/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoIosPin as Location, IoIosPeople as Ppl} from 'react-icons/io';
import {BsCoin as Fee} from 'react-icons/bs';
import {AiOutlineClockCircle as Time} from 'react-icons/ai';
import {TiDelete as DeletePost} from 'react-icons/ti';
import ModifyPost from '../../assets/img/ModifyPost.png';
import {useState} from 'react';
import ModalDelete from '../Modal/ModalDelete';
import Button from '../Button';
import { Link } from 'react-router-dom';

interface PostInfo {
    title: string;
    location: string;
    peopleNum: string;
    time: string;
    fee: string;
    [prop: string]: string;
  }

const PostDiv = styled.div`
display: flex;
width: 90%;
margin: 2rem auto;
border: 1px solid #gray;
border-radius: 8px;
padding: 2rem;
max-height: 30rem;
box-shadow: 1px 1px 3px 1px ${colors.grey300};
`;

const InfoDiv = styled.div`
margin-top: 3%;
`;

const LeftDiv = styled.div`
display: flex;
flex-direction: column;
margin-left: 10%;
width: 70%;
`;

const TitleWrapper = styled.div`
width:90%;
height:10%;
font-size:160%;
margin: 5% 0% 20% 0%;
`;

const SubWrapper = styled.div`
width:70%;
display: flex;
flex-direction: column;
`;

const SubtitleWrapper = styled.div`
display: flex;
margin: 3% 0% 10% 15%;
`;

const IconWrapper = styled.div`
display: flex;
margin-top:1%;
width:100%;
height:100%;
`;

const RightDiv = styled.div`
display: flex;
flex-direction: column;
float:right;
margin-right:10%;
width: 20%;
`;

const DeleteBtn = styled.button`
margin:0% 0% 0% 100%;
width:50%;
height:50%;
`;

export default function Post({title,location,peopleNum,time,fee}:PostInfo){
    const [postInfo, setPostInfo] = useState<PostInfo>({
        title: title,
        location: location,
        peopleNum: peopleNum,
        time: time,
        fee: fee,  
    });

    const [modalVisible,setModalVisible] = useState(false);

  return (
    <>
    <PostDiv>
        <LeftDiv>
        <TitleWrapper>{title}</TitleWrapper>
        <SubWrapper>
          <IconWrapper>
          <Location size={25} color='gray'/> 
          <SubtitleWrapper>{location}</SubtitleWrapper>
          </IconWrapper>
          <IconWrapper>
          <Ppl size={30}/> 
          <SubtitleWrapper>{peopleNum}명</SubtitleWrapper>
          </IconWrapper>
          <IconWrapper>
          <Time size={25}/> 
          <SubtitleWrapper>{time}</SubtitleWrapper>
          </IconWrapper>
          <IconWrapper>
          <Fee size={25}/> 
          <SubtitleWrapper>{fee}</SubtitleWrapper>
          </IconWrapper>
        </SubWrapper>
        </LeftDiv>


        <RightDiv>
        <ModalDelete visible={modalVisible} setModalVisible={setModalVisible} isNavigating={true}/>
        <DeleteBtn onClick={() => setModalVisible(true)}><DeletePost color={colors.mainColor} size={40}/></DeleteBtn>
        <Link to="/writing"><Button height={3} buttonId="modify" style={{marginTop:80,marginLeft:30}}>수정</Button></Link>       
        </RightDiv>
    </PostDiv>
    </>
  );
}
