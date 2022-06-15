import colors from '@/constants/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Participation from '../../assets/img/Participation.png';
import PostI from '../../assets/img/post.png';
import Shop from '../../assets/img/shop.png';
import Location from '../../assets/img/loc_icon.png';
import Fee from '../../assets/img/fee_icon.png';
import Time from '../../assets/img/time_icon.png';
import Ppl from '../../assets/img/ppl_icon.png';
import ModifyPost from '../../assets/img/ModifyPost.png';
import DeletePost from '../../assets/img/DeletePost.png';
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

const LeftDiv = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;
width: 70%;
`;

const RightDiv = styled.div`
display: flex;
flex-direction: column;
float:right;
width: 20%;
height: 80%;
`;

const InfoDiv = styled.div`
display: flex;
margin-top:3%;
`;


const IconWrapper = styled.div`
margin-top:2%;
width:20%;
height:10%;
`;

const InfoWrapper = styled.div`
width:50%;
`;

const TitleWrapper = styled.div`
width:90%;
height:30%;
font-size:160%;
margin-bottom: 5%;
`;

const DeleteBtn = styled.button`
margin-left:400%;
`;

const ModifyBtn = styled.button`
margin-top: 900%;
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
        <InfoDiv>
        <IconWrapper><img src = {Location} alt="배달 위치"/></IconWrapper>
        <InfoWrapper>{location} </InfoWrapper> 
        </InfoDiv>
        <InfoDiv>
        <IconWrapper><img src = {Ppl} alt="인원"/></IconWrapper> 
        <InfoWrapper>{peopleNum}명</InfoWrapper>
        </InfoDiv>
        <InfoDiv>
        <IconWrapper><img src = {Time} alt="마감시간"/></IconWrapper>
        <InfoWrapper>{time}</InfoWrapper>
        </InfoDiv>
        <InfoDiv>
        <IconWrapper><img src = {Fee} alt="배달비"/></IconWrapper> 
        <InfoWrapper>{fee}원</InfoWrapper>
        </InfoDiv>
        </LeftDiv>

        <RightDiv>

        <IconWrapper><DeleteBtn><img src = {DeletePost} alt="삭제하기"/></DeleteBtn></IconWrapper>
        <IconWrapper><ModifyBtn><img src = {ModifyPost} alt="수정하기"/></ModifyBtn></IconWrapper>
        </RightDiv>
    </PostDiv>
    </>
  );
}
