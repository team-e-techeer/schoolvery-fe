import colors from '@/constants/colors';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Participation from '../../assets/img/Participation.png';
import PostI from '../../assets/img/post.png';
import Notice from '../../assets/img/notice.png';
import Setting from '../../assets/img/settings.png';
import Shop from '../../assets/img/shop.png';
import Location from '../../assets/img/Location.png';
import Fee from '../../assets/img/fee_icon.png';
import Time from '../../assets/img/time_icon.png';
import Ppl from '../../assets/img/ppl_icon.png';
import Bell from '../../assets/img/bell 1.png';
import {useState} from 'react';

interface PostInfo {
    title: string;
    location: string;
    peopleNum: string;
    time: string;
    fee: string;
    [prop: string]: string;
  }

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
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 2rem auto;
          border: 1px solid #gray;
          border-radius: 8px;
          padding: 2rem;
          max-height: 30rem;
          box-shadow: 1px 1px 1px 1px ${colors.grey300};
        `}>
            <h1>{title}</h1>
            <img src = {Location}/> {location} 
            {peopleNum}
            {time}
            {fee}
      </div>
    </>
  );
}
