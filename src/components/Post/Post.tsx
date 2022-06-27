import colors from '@/constants/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoIosPin as Location, IoIosPeople as Ppl} from 'react-icons/io';
import {BsCoin as Fee} from 'react-icons/bs';
import {AiOutlineClockCircle as Time} from 'react-icons/ai';
import {TiDelete as DeletePost} from 'react-icons/ti';
import ModifyPost from '../../assets/img/ModifyPost.png';
import {useState} from 'react';

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
height:30%;
font-size:160%;
margin: 5% 0% 20% 0%;
`;

const SubWrapper = styled.div`
width:70%;
display: flex;
`;

const SubtitleWrapper = styled.div`
display: flex;
margin: 3% 0% 10% 15%;
`;

const RightDiv = styled.div`
display: flex;
flex-direction: column;
float:right;
margin-right:10%;
width: 20%;
`;

const IconWrapper = styled.div`
margin-top:2%;
width:20%;
height:20%;
`;

const DeleteBtn = styled.button`
margin-left:400%;
`;

const ModifyBtn = styled.button`
margin: 800% 0% 0% 100%;
`;

export default function Post({title,location,peopleNum,time,fee}:PostInfo){
    const [postInfo, setPostInfo] = useState<PostInfo>({
        title: title,
        location: location,
        peopleNum: peopleNum,
        time: time,
        fee: fee,  
    });

  return (
    <>
    <PostDiv>
        <LeftDiv>
        <TitleWrapper>{title}</TitleWrapper>
        <SubWrapper>
          <Location size={25} color='gray'/> 
          <SubtitleWrapper>{location}</SubtitleWrapper>
        </SubWrapper>

        <SubWrapper>
        <Ppl size={30}/> 
        <SubtitleWrapper>{peopleNum}명</SubtitleWrapper>
        </SubWrapper>

        <SubWrapper>
        <Time size={25}/> 
        <SubtitleWrapper>{time}</SubtitleWrapper>
        </SubWrapper>

        <SubWrapper>
        <Fee size={25}/> 
        <SubtitleWrapper>{fee}</SubtitleWrapper>
        </SubWrapper>
        </LeftDiv>


        <RightDiv>
        <IconWrapper><DeleteBtn><DeletePost color={colors.mainColor} size={40}/></DeleteBtn></IconWrapper>
        <IconWrapper><ModifyBtn><img src={ModifyPost}/></ModifyBtn></IconWrapper>
        </RightDiv>
    </PostDiv>
    </>
  );
}
