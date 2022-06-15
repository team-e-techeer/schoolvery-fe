import colors from '@/constants/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Participation from '../../assets/img/Participation.png';
import PostI from '../../assets/img/post.png';
import Shop from '../../assets/img/shop.png';
import Location from '../../assets/img/Location.png';
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
box-shadow: 1px 1px 1px 1px ${colors.grey300};
`;

const LeftDiv = styled.div`
//display: flex;
flex-direction: column;
width: 80%;
`;

const RightDiv = styled.div`
display: flex;
flex-direction: column;
width: 20%;
`;

const IconWrapper = styled.div`
width:30%;
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

  return (
    <>
    <PostDiv>
        <LeftDiv>
        <h1>{title}</h1>
        <IconWrapper><img src = {Location} alt="배달 위치"/> {location}</IconWrapper> 
        <IconWrapper><img src = {Ppl} alt="인원"/> {peopleNum}명</IconWrapper>
        <IconWrapper><img src = {Time} alt="마감시간"/> {time}</IconWrapper>
        <IconWrapper><img src = {Fee} alt="배달비"/> {fee}원</IconWrapper>
        </LeftDiv>
        <RightDiv>
        <IconWrapper><img src = {DeletePost} alt="삭제하기"/></IconWrapper>
        <IconWrapper><img src = {ModifyPost} alt="수정하기"/></IconWrapper>
        </RightDiv>
    </PostDiv>
    </>
  );
}
